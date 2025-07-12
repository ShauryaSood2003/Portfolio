import React, { useState, useRef, useEffect, useContext } from 'react';
import axios from 'axios';
import { LanguageContext } from '../contexts/LanguageContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { translations } from '../translations/translations';
import { FaMicrophone, FaMicrophoneSlash, FaVolumeUp, FaVolumeMute, FaTimes, FaExpand, FaCompress } from 'react-icons/fa';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  
  const { language } = useContext(LanguageContext);
  const { isDarkMode: darkMode } = useContext(ThemeContext);
  const t = translations[language] || translations.en;
  
  const chatEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const synthRef = useRef(null);

  // Initialize greeting message
  useEffect(() => {
    setMessages([{ type: 'assistant', content: t.aiGreeting }]);
  }, [t.aiGreeting]);

  // Initialize speech recognition and synthesis
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = language === 'hi' ? 'hi-IN' : 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setCurrentMessage(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };
    }

    if ('speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
  }, [language]);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Format message content with basic markdown support
  const formatMessage = (content) => {
    if (!content) return '';
    
    // Escape HTML first, then apply formatting
    let formatted = content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>') // Bold text
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>') // Italic text
      .replace(/\n\n/g, '<br><br>') // Paragraph breaks
      .replace(/\n/g, '<br>') // Line breaks
      .replace(/`(.*?)`/g, '<code class="bg-gray-200 dark:bg-gray-600 px-1 py-0.5 rounded text-xs font-mono">$1</code>') // Inline code
      .replace(/^#{1,6}\s*(.*?)$/gm, '<h3 class="font-bold text-base mt-2 mb-1">$1</h3>') // Headers
      .replace(/^[-•]\s*(.*?)$/gm, '<div class="flex items-start gap-2 my-1"><span class="text-blue-500 mt-1">•</span><span>$1</span></div>') // List items
      .replace(/^(\d+)\.\s*(.*?)$/gm, '<div class="flex items-start gap-2 my-1"><span class="text-blue-500 font-medium">$1.</span><span>$2</span></div>'); // Numbered lists
    
    return formatted;
  };

  // API call to RAG bot with language support and fallback
  const getAIResponse = async (message) => {
    try {
      // Map frontend language codes to backend expected format
      // Frontend: 'en' | 'hi' -> Backend: 'english' | 'hindi'
      const requestLanguage = language === 'hi' ? 'hindi' : 'english';
      console.log(`🌐 Sending request in ${requestLanguage} (frontend language: ${language})`);
      
      const requestData = {
        question: message,
        language: requestLanguage // Backend expects 'english' or 'hindi'
      };
      
      const requestConfig = {
        timeout: 30000, // 30 seconds timeout
        headers: {
          'Content-Type': 'application/json'
        }
      };

      // Try primary endpoint first (Render.com)
      try {
        console.log('🌐 Trying primary endpoint: rag-bot-api.onrender.com');
        const response = await axios.post('https://rag-bot-api.onrender.com/question', requestData, requestConfig);
        return response.data.answer || response.data.response || response.data.message || 'Sorry, I received an empty response from the server.';
      } catch (primaryError) {
        console.warn('❌ Primary endpoint failed, trying localhost fallback:', primaryError.message);
        
        // Fallback to localhost if primary fails
        try {
          console.log('🔄 Trying fallback endpoint: localhost:8000');
          const response = await axios.post('http://localhost:8000/question', requestData, requestConfig);
          return response.data.answer || response.data.response || response.data.message || 'Sorry, I received an empty response from the server.';
        } catch (fallbackError) {
          console.error('❌ Both endpoints failed:', { primary: primaryError.message, fallback: fallbackError.message });
          // Throw the original error for consistent error handling below
          throw primaryError;
        }
      }
    } catch (error) {
      console.error('API Error:', error);
      
      // Handle different error types with user-friendly messages
      if (error.code === 'ECONNREFUSED' || error.code === 'ERR_NETWORK') {
        return `🔧 **RAG Bot Temporarily Unavailable**\n\nBoth our primary (Render.com) and fallback (localhost) endpoints are currently unavailable. The custom AI system built by Shaurya is temporarily offline. Please try again in a few moments! 🚀`;
      } else if (error.code === 'ECONNABORTED') {
        return `⏱️ **Processing timeout**\n\nThe request took too long to process. Our Gemini LLM might be handling a complex query. Please try asking a simpler question or wait a moment and try again.`;
      } else if (error.response) {
        const status = error.response.status;
        const errorData = error.response.data;
        
        // Handle specific error types based on response
        if (status === 401 || status === 403) {
          return `🔑 **Sorry, LLM tokens expired!**\n\nOur Gemini LLM tokens have reached their limit. We'll be back online when the tokens are recharged! Please try again later. 🔋`;
        } else if (status === 429) {
          return `🚦 **Daily quota exceeded**\n\nOur Gemini LLM has reached its daily request limit. The quota will reset tomorrow. Thank you for your understanding! ⏰`;
        } else if (errorData?.detail && errorData.detail.includes('quota')) {
          return `📊 **API Quota Limit Reached**\n\nThe Gemini LLM has exceeded its daily free tier quota. The service will be available again tomorrow when the quota resets. Thank you for trying out Shaurya's custom RAG bot! 🤖`;
        } else if (status === 500) {
          return `⚠️ **Internal server error**\n\nOur RAG bot encountered an internal issue. Don't worry, Shaurya will fix this soon! Please try again in a few minutes. 🛠️`;
        } else if (status === 503) {
          return `🔧 **Service temporarily unavailable**\n\nOur custom RAG system is undergoing maintenance. We'll be back online shortly! Thank you for your patience. 🔄`;
        } else {
          return `❌ **Error ${status}**\n\n${errorData?.message || errorData?.error || 'Unknown server error'}. Please try again or contact support if the issue persists.`;
        }
      } else {
        return `🔌 **Connection issue**\n\nUnable to reach our RAG bot endpoint. Please check your internet connection and try again. If the problem persists, the server might be temporarily down. 🌐`;
      }
    }
  };

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage = { type: 'user', content: currentMessage };
    setMessages(prev => [...prev, userMessage]);
    
    const messageToSend = currentMessage;
    setCurrentMessage('');
    setIsTyping(true);
    
    try {
      // Call RAG bot API
      const response = await getAIResponse(messageToSend);
      const assistantMessage = { type: 'assistant', content: response };
      setMessages(prev => [...prev, assistantMessage]);
      
      // Speak the response if voice is enabled (strip HTML for TTS)
      if (voiceEnabled && synthRef.current && response) {
        const textResponse = response.replace(/<[^>]*>/g, ''); // Remove HTML tags for speech
        const utterance = new SpeechSynthesisUtterance(textResponse);
        utterance.lang = language === 'hi' ? 'hi-IN' : 'en-US';
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        synthRef.current.speak(utterance);
      }
    } catch (error) {
      // Fallback error message
      const errorMessage = { 
        type: 'assistant', 
        content: 'I apologize, but I encountered an unexpected error while processing your request. Please try again.' 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const startListening = () => {
    if (recognitionRef.current) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      setIsListening(false);
      recognitionRef.current.stop();
    }
  };

  const toggleVoice = () => {
    setVoiceEnabled(!voiceEnabled);
    if (voiceEnabled && synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <>
      {/* Floating Assistant Button */}
      <div className={`fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 ${isOpen ? 'hidden' : 'block'}`}>
        <div className="relative group animate-float">
          {/* Enhanced glow effect for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-lg opacity-90 animate-pulse"></div>
          <div className="absolute inset-0 bg-white rounded-full blur-md opacity-30"></div>
          
          {/* Main button with enhanced visibility */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative bg-gradient-to-r from-blue-600 via-purple-700 to-pink-700 text-white p-3 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-110 hover:rotate-12 border-2 border-white/30 animate-glow"
          >
            <div className="w-8 h-8 flex items-center justify-center text-3xl group-hover:animate-bounce drop-shadow-lg">
              🤖
            </div>
            
            {/* Enhanced ripple effect */}
            <div className="absolute inset-0 rounded-full bg-white opacity-30 scale-0 group-hover:scale-110 group-hover:opacity-0 transition-all duration-500"></div>
            
            {/* Pulsing ring for attention */}
            <div className="absolute inset-0 rounded-full border-2 border-white/50 scale-110 animate-ping opacity-75"></div>
          </button>
          
          {/* Enhanced tooltip */}
          <div className="absolute bottom-full right-0 mb-4 px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-2xl border border-gray-600">
            <div className="flex items-center space-x-2">
              <span>Ask me anything about Shaurya!</span>
              <span className="text-lg">💬</span>
            </div>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
          
          {/* Notification badge */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
          
        
        </div>
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className={`fixed ${isExpanded ? 'inset-4' : 'bottom-20 sm:bottom-4 right-4 w-80 sm:w-96 h-[420px] sm:h-[500px] max-h-[80vh]'} z-50 transition-all duration-500 transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          {/* Backdrop blur */}
          <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-br from-white/10 to-black/10 rounded-2xl"></div>
          
          {/* Main container */}
          <div className={`relative h-full ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} overflow-hidden flex flex-col`}>
            {/* Header */}
            <div className={`flex items-center justify-between p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'} flex-shrink-0`}>
            <div className="flex items-center space-x-4">
              {/* 3D Assistant Preview */}
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl shadow-lg">
                  🤖
                </div>
                
                {/* Status indicator */}
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 ${darkMode ? 'border-gray-700' : 'border-white'} ${isListening ? 'bg-red-500 animate-pulse' : isSpeaking ? 'bg-blue-500 animate-bounce' : 'bg-green-500'}`}></div>
              </div>
              
              <div className="flex-1">
                <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>{t.aiAssistant}</h3>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${isListening ? 'bg-red-500 animate-pulse' : isSpeaking ? 'bg-blue-500 animate-bounce' : 'bg-green-500'}`}></div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {isListening ? t.aiListening : isSpeaking ? t.aiSpeaking : t.aiOnline}
                  </p>
                </div>
              
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleVoice}
                className={`p-2 rounded-lg transition-all duration-300 ${voiceEnabled 
                  ? 'bg-green-500 text-white' 
                  : darkMode 
                    ? 'bg-gray-600 text-gray-300 hover:bg-gray-500' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
                title={voiceEnabled ? t.disableVoice : t.enableVoice}
              >
                {voiceEnabled ? <FaVolumeUp className="w-4 h-4" /> : <FaVolumeMute className="w-4 h-4" />}
              </button>
              
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`p-2 rounded-lg transition-all duration-300 ${darkMode 
                  ? 'bg-gray-600 text-gray-300 hover:bg-gray-500' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
                title={isExpanded ? t.minimize : t.expand}
              >
                {isExpanded ? <FaCompress className="w-4 h-4" /> : <FaExpand className="w-4 h-4" />}
              </button>
              
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all duration-300"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
            </div>

          {/* Messages */}
          <div className={`flex-1 overflow-y-auto px-4 py-4 space-y-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.type === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm mr-3 flex-shrink-0">
                    🤖
                  </div>
                )}
                
                <div
                  className={`max-w-sm lg:max-w-md px-4 py-3 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-blue-500 text-white'
                      : darkMode
                      ? 'bg-gray-700 text-white'
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}
                >
                  {msg.type === 'assistant' ? (
                    <div 
                      className="text-sm leading-relaxed"
                      style={{ 
                        wordBreak: 'break-word',
                        lineHeight: '1.5'
                      }}
                      dangerouslySetInnerHTML={{ 
                        __html: formatMessage(msg.content)
                      }}
                    />
                  ) : (
                    <div className="text-sm leading-relaxed">
                      {msg.content}
                    </div>
                  )}
                </div>
                
                {msg.type === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm ml-3 flex-shrink-0">
                    👤
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm mr-3 flex-shrink-0">
                  🤖
                </div>
                <div className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white border border-gray-200'}`}>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {language === 'hi' ? 'शौर्य के बारे में RAG बॉट से परामर्श कर रहे हैं...' : 'Consulting RAG bot about Shaurya...'}
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-white'} border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'} flex-shrink-0`}>
            {/* Info banner */}
            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} text-center mb-3 px-2 py-1 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              🤖 Custom RAG Bot • Powered by Gemini LLM • Built by Shaurya
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={t.askQuestion}
                  className={`w-full p-3 pr-12 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode 
                      ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                      : 'bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500'
                  }`}
                />
                
                {/* Voice button inside input */}
                {recognitionRef.current && (
                  <button
                    onClick={isListening ? stopListening : startListening}
                    className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 rounded ${
                      isListening 
                        ? 'bg-red-500 text-white' 
                        : darkMode
                          ? 'bg-gray-500 text-gray-300 hover:bg-gray-400'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                    title={isListening ? t.stopListening : t.startListening}
                  >
                    {isListening ? <FaMicrophoneSlash className="w-3 h-3" /> : <FaMicrophone className="w-3 h-3" />}
                  </button>
                )}
              </div>
              
              <button
                onClick={handleSendMessage}
                disabled={!currentMessage.trim()}
                className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;