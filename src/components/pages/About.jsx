import { skillsData } from "../../assets/asserts";
import { useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

import Footer from "../Footer"

const Education=({link,course,institute,duration,percent})=>{
  return(
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow ed_hid">
      <div className="flex items-start gap-6">
        <img src={link} alt="edu_Image" className="w-20 h-20 rounded-lg object-cover shadow-md"/>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-1">{course}</h3>
          <h4 className="text-gray-700 dark:text-gray-300 font-medium mb-2">{institute}</h4>
          <div className="flex justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">{duration}</p>
            <p className="font-semibold text-blue-600 dark:text-blue-400">{percent}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const About =()=>{
    const { t } = useLanguage();
    
    useEffect(() => {
        const observe = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("sho");
            } else {
              entry.target.classList.remove("sho");
            }
          });
        });
        const observeED = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("ed_sho");
            } else {
              entry.target.classList.remove("ed_sho");
            }
          });
        });
    
        const hidden = document.querySelectorAll(".hid");
        hidden.forEach((e) => {
          observe.observe(e);
        });
        const edu_hidden = document.querySelectorAll(".ed_hid");
        edu_hidden.forEach((e) => {
          observeED.observe(e);
        });
    
       
        return () => {
          observe.disconnect();
        };
      }, []);
    return(
        <section className="max-container">

            <div className="lg:mb-20 mb-6 ">
              <div className="flex mb-8 relative">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">{t('aboutGreeting')}</h1>
              </div>
              <h3 className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  {t('aboutIntro')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-2xl text-blue-600 mb-2">25K+</h4>
                  <p className="text-gray-700 dark:text-gray-800">{t('transactionsProcessed')}</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-2xl text-green-600 mb-2">60K+</h4>
                  <p className="text-gray-700 dark:text-gray-800">{t('activeUsers')}</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-2xl text-purple-600 mb-2">3-4x</h4>
                  <p className="text-gray-700 dark:text-gray-800">{t('deliverySpeed')}</p>
                </div>
              </div>
            </div>

            {/* Professional Experience Section */}
            <div className="lg:mt-20 mt-16 lg:mb-20 mb-10">
                <h1 className="lg:text-3xl text-2xl font-bold mb-10 text-gray-800 dark:text-gray-200">{t('professionalExperience')}</h1>
                <div className="space-y-8">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-blue-500 hid">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{t('seniorFullStackDev')}</h3>
                                <p className="text-lg text-blue-600 font-medium">BurdenOff</p>
                            </div>
                            <span className="text-gray-600 dark:text-gray-400 font-medium">May 2025 - {t('present')}</span>
                        </div>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                            <li>{t('seniorExp1')}</li>
                            <li>{t('seniorExp2')}</li>
                            <li>{t('seniorExp3')}</li>
                        </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-green-500 hid">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{t('juniorFullStackDev')}</h3>
                                <p className="text-lg text-green-600 font-medium">BurdenOff</p>
                            </div>
                            <span className="text-gray-600 dark:text-gray-400 font-medium">Nov 2024 - Apr 2025</span>
                        </div>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                            <li>{t('juniorExp1')}</li>
                            <li>{t('juniorExp2')}</li>
                            <li>{t('juniorExp3')}</li>
                        </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-purple-500 hid">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{t('fullStackIntern')}</h3>
                                <p className="text-lg text-purple-600 font-medium">BurdenOff</p>
                            </div>
                            <span className="text-gray-600 dark:text-gray-400 font-medium">Jul 2024 - Oct 2024</span>
                        </div>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                            <li>{t('internExp1')}</li>
                            <li>{t('internExp2')}</li>
                            <li>{t('internExp3')}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Core Competencies */}
            <div className="lg:mt-20 mt-16 lg:mb-20 mb-10">
                <h1 className="lg:text-3xl text-2xl font-bold mb-10 text-gray-800 dark:text-gray-200">{t('coreCompetencies')}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl shadow-lg hid">
                        <h3 className="font-bold text-lg text-blue-700 dark:text-blue-400 mb-3">{t('endToEndOwnership')}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{t('endToEndDesc')}</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl shadow-lg hid">
                        <h3 className="font-bold text-lg text-green-700 dark:text-green-400 mb-3">{t('highScaleSystems')}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{t('highScaleDesc')}</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl shadow-lg hid">
                        <h3 className="font-bold text-lg text-purple-700 dark:text-purple-400 mb-3">{t('aiPoweredDev')}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{t('aiPoweredDesc')}</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-xl shadow-lg hid">
                        <h3 className="font-bold text-lg text-orange-700 dark:text-orange-400 mb-3">{t('productionDebugging')}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{t('productionDebugDesc')}</p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-6 rounded-xl shadow-lg hid">
                        <h3 className="font-bold text-lg text-pink-700 dark:text-pink-400 mb-3">{t('businessAlignment')}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{t('businessAlignDesc')}</p>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 p-6 rounded-xl shadow-lg hid">
                        <h3 className="font-bold text-lg text-indigo-700 dark:text-indigo-400 mb-3">{t('rapidLearning')}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{t('rapidLearningDesc')}</p>
                    </div>
                </div>
            </div>

            <div className="lg:mt-20 mt-16 lg:mb-20 mb-6">
                <h1 className="lg:text-3xl text-2xl font-bold mb-10 text-gray-800 dark:text-gray-200">{t('technicalSkills')}</h1>
                
                {/* Frontend Skills */}
                <div className="mb-16">
                    <h2 className="lg:text-2xl text-xl font-semibold mb-8 text-gray-700 dark:text-gray-300 flex items-center">
                        <span className="w-1 h-6 bg-blue-500 mr-3 rounded"></span>
                        {t('frontendDevelopment')}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                        {skillsData.frontend.map((skill, index) => (
                            <div key={index} className="group bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hid animate_logo border border-gray-100 dark:border-gray-700">
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-2 sm:mb-4">
                                        <img 
                                            src={skill.icon} 
                                            className="w-8 h-8 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform duration-300" 
                                            alt={skill.name}
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-xs sm:text-sm mb-1 sm:mb-2">{skill.name}</h3>
                                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                                        skill.level === 'Expert' ? 'bg-green-100 text-green-800' :
                                        skill.level === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                                        'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {skill.level}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Backend Skills */}
                <div className="mb-16">
                    <h2 className="lg:text-2xl text-xl font-semibold mb-8 text-gray-700 dark:text-gray-300 flex items-center">
                        <span className="w-1 h-6 bg-green-500 mr-3 rounded"></span>
                        {t('backendDevOps')}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                        {skillsData.backend.map((skill, index) => (
                            <div key={index} className="group bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hid animate_logo border border-gray-100 dark:border-gray-700">
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-2 sm:mb-4">
                                        <img 
                                            src={skill.icon} 
                                            className="w-8 h-8 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform duration-300" 
                                            alt={skill.name}
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-xs sm:text-sm mb-1 sm:mb-2">{skill.name}</h3>
                                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                                        skill.level === 'Expert' ? 'bg-green-100 text-green-800' :
                                        skill.level === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                                        'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {skill.level}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI Tools & Prompt Engineering */}
                <div className="mb-12">
                    <h2 className="lg:text-2xl text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300 flex items-center">
                        <span className="w-1 h-6 bg-purple-500 mr-3 rounded"></span>
                        {t('aiToolsPrompt')}
                    </h2>
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-6 sm:p-8 mb-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">{t('promptEngSpecialist')}</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                                    {t('promptEngDesc').split('3-4x')[0]}
                                    <span className="font-semibold text-purple-600 dark:text-purple-400">3-4x {t('promptEngDesc').split('3-4x')[1].split(' ')[1]}</span>
                                    {' ' + t('promptEngDesc').split('3-4x')[1].split(' ').slice(2).join(' ')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
                        {skillsData.aitools.map((skill, index) => (
                            <div key={index} className="group bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hid animate_logo border border-gray-100 dark:border-gray-700">
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-2 sm:mb-4">
                                        <img 
                                            src={skill.icon} 
                                            className="w-8 h-8 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform duration-300" 
                                            alt={skill.name}
                                            onError={(e) => {
                                                // Fallback for AI tools with broken favicon links
                                                e.target.src = "https://img.icons8.com/color/48/000000/artificial-intelligence.png";
                                            }}
                                        />
                                    </div>
                                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-xs sm:text-sm mb-1 sm:mb-2">{skill.name}</h3>
                                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                                        skill.level === 'Expert' ? 'bg-green-100 text-green-800' :
                                        skill.level === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                                        'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {skill.level}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Summary */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mt-12">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">{t('technologyProficiency')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-lg text-green-800 dark:text-green-400 mb-1">{t('expertLevel')}</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{t('expertLevelDesc')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-lg text-blue-800 dark:text-blue-400 mb-1">{t('advanced')}</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{t('advancedDesc')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-lg text-yellow-800 dark:text-yellow-400 mb-1">{t('intermediate')}</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{t('intermediateDesc')}</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="lg:mb-20 mb-6">
                <h1 className="lg:text-3xl text-2xl font-bold mb-10 text-gray-800 dark:text-gray-200">{t('education')}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
                        <Education 
                              link="https://images.shiksha.com/mediadata/images/1674199807phpl6t19N.jpeg" 
                              course={t('btech')} 
                              institute="Guru Gobind Singh Indraprastha University (ADGITM)" 
                              duration="2021 - 2025" 
                              percent={`${t('cgpa')}: 9.23`}
                          >

                        </Education>
                        <Education 
                              link="https://www.schooldekho.org/storage/logo//894aq83o4q4oko448800kow8og0g8ws.jpg" 
                              course={t('class12')} 
                              institute="DL DAV MODEL SCHOOL PITAMPURA" 
                              duration="2009 - 2021" 
                              percent="93.2%"
                        >

                        </Education>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
    
}
export default About;