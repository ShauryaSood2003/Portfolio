import { projects } from '../../assets/asserts';
import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Footer from '../Footer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const ProjectCard = ({ project, index }) => {
    const { t } = useLanguage();
    // Handle both old and new data structures
    const description = project.description || project.text;
    const techStack = project.techStack || [];
    const features = project.features || [];
    const metrics = project.metrics || {};
    const role = project.role || "Full Stack Developer";
    const type = project.type || "Personal Project";
    const liveLink = project.liveLink || project.link;
    const githubLink = project.githubLink || null;
    
    // Function to get translated feature
    const getTranslatedFeature = (feature, projectTitle) => {
        // Map features to translation keys based on project and feature text
        const featureMap = {
            '91Springboard': {
                "Cross-platform app (iOS, Android, Web)": 'crossPlatformApp',
                "Real-time booking management system": 'realtimeBooking',
                "Multi-credit payment logic": 'multiCreditPayment',
                "Advanced scheduling & cancellation": 'advancedScheduling'
            },
            'CodeCrack': {
                "Real-time code execution engine": 'realtimeCodeExecution',
                "Multi-language support": 'multiLanguageSupport',
                "CodeWars 1v1 battles": 'codeWarsBattles',
                "Token reward system": 'tokenRewardSystem'
            },
            'PayWay': {
                "Bank integration & transfers": 'bankIntegration',
                "P2P payment system": 'p2pPayment',
                "Merchant dashboard": 'merchantDashboard',
                "Real-time notifications": 'realtimeNotifications'
            },
            'ChatIo': {
                "Real-time messaging": 'realtimeMessaging',
                "Media & PDF sharing": 'mediaSharing',
                "Google authentication": 'googleAuth',
                "Persistent chat history": 'persistentChat'
            }
        };
        
        if (featureMap[projectTitle] && featureMap[projectTitle][feature]) {
            return t(featureMap[projectTitle][feature]);
        }
        return feature; // Return original if no translation found
    };

    return (
        <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 animate-fadeIn`}
             style={{ animationDelay: `${index * 0.1}s` }}>
            
            {/* Project Header */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                <img src={project.logo} alt={project.title} 
                     className="absolute inset-0 w-full h-full object-contain p-8" />
                <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        type === 'Client Work' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        type === 'Personal Project' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                        'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                    }`}>
                        {type === 'Client Work' ? t('clientWork') : type === 'Personal Project' ? t('personalProject') : type}
                    </span>
                </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
                {/* Title and Role */}
                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">{project.title}</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">{project.subTitle}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8h12v8H4V8z" clipRule="evenodd" />
                            </svg>
                            {project.duration}
                        </span>
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            {t('fullStackDev')}
                        </span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                    {project.title === '91Springboard' ? t('project91SpringboardDesc') :
                     project.title === 'CodeCrack' ? t('projectCodeCrackDesc') :
                     project.title === 'PayWay' ? t('projectPayWayDesc') :
                     project.title === 'ChatIo' ? t('projectChatIoDesc') :
                     project.title === 'Nutrition App' ? t('projectNutritionDesc') :
                     project.title === 'Earlier Portfolio Showcase' ? t('projectPortfolioDesc') :
                     project.title === 'Notes AppNotes App' ? t('projectNotesDesc') :
                     project.title === 'Ed-Tech Application' ? t('projectEdTechDesc') :
                     project.title === 'Simon gameSimon game' ? t('projectSimonDesc') :
                     description}
                </p>

                {/* Tech Stack - only show if available */}
                {techStack.length > 0 && (
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">{t('techStack')}</h4>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech, idx) => (
                                <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Key Features - only show if available */}
                {features.length > 0 && (
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">{t('keyFeatures')}</h4>
                        <ul className="grid grid-cols-1 gap-1">
                            {features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {getTranslatedFeature(feature, project.title)}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Metrics - only show if available */}
                {Object.keys(metrics).length > 0 && (
                    <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">{t('keyMetrics')}</h4>
                        <div className="grid grid-cols-2 gap-3">
                            {Object.entries(metrics).slice(0, 4).map(([key, value], idx) => (
                                <div key={idx} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center">
                                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{value}</div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                    {liveLink && (
                        <a href={liveLink} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                            <LaunchIcon className="w-4 h-4" />
                            {liveLink.includes('github') ? t('viewProject') : t('liveDemo')}
                        </a>
                    )}
                    {githubLink && (
                        <a href={githubLink} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                            <GitHubIcon className="w-4 h-4" />
                            {t('viewCode')}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Project = () => {
    const { t } = useLanguage();
    useEffect(() => {
        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            .animate-fadeIn {
                animation: fadeIn 0.6s ease-out forwards;
                opacity: 0;
            }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    // Filter to show only the most important projects
    const featuredProjects = projects.slice(0, 6);

    return (
        <section className='max-container'>
            {/* Header Section */}
            <div className='text-center mb-12 sm:mb-16'>
                <h1 className='font-bold text-2xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent'>
                    {t('projectsTitle')}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                    {t('projectsIntro')}
                </p>
            </div>

            {/* Projects Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 px-4 sm:px-0'>
                {featuredProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>

            {/* Call to Action */}
            <div className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl mb-20">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {t('interestedWorking')}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                    {t('interestedWorkingDesc')}
                </p>
                <div className="flex gap-4 justify-center">
                    <a href="/contact" 
                       className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
                        {t('getInTouch')}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                    <a href="https://github.com/ShauryaSood2003" 
                       target="_blank"
                       rel="noopener noreferrer"
                       className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
                        <GitHubIcon className="w-5 h-5" />
                        {t('moreOnGitHub')}
                    </a>
                </div>
            </div>

            <Footer />
        </section>
    );
}

export default Project;