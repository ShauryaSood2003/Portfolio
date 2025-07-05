import { skillsData } from "../../assets/asserts";
import { useEffect } from "react";

import Footer from "../Footer"

const Education=({link,course,institute,duration,percent})=>{
  return(
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow ed_hid">
      <div className="flex items-start gap-6">
        <img src={link} alt="edu_Image" className="w-20 h-20 rounded-lg object-cover shadow-md"/>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-800 mb-1">{course}</h3>
          <h4 className="text-gray-700 font-medium mb-2">{institute}</h4>
          <div className="flex justify-between items-center">
            <p className="text-gray-600 text-sm">{duration}</p>
            <p className="font-semibold text-blue-600">{percent}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const About =()=>{
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
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Hey, I'm Shaurya Sood</h1>
              </div>
              <h3 className="text-gray-700 text-lg leading-relaxed mb-6">
                  Senior Full Stack Developer with a passion for building scalable SaaS solutions. 
                  In just 12 months, I progressed from intern to core product owner, delivering 
                  high-impact applications processing thousands of transactions daily.
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-2xl text-blue-600 mb-2">25K+</h4>
                  <p className="text-gray-700">Transactions Processed</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-2xl text-green-600 mb-2">60K+</h4>
                  <p className="text-gray-700">Active Users Served</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-2xl text-purple-600 mb-2">3-4x</h4>
                  <p className="text-gray-700">Delivery Speed with AI</p>
                </div>
              </div>
            </div>

            {/* Professional Experience Section */}
            <div className="lg:mt-20 mt-16 lg:mb-20 mb-10">
                <h1 className="lg:text-3xl text-2xl font-bold mb-10 text-gray-800">Professional Experience</h1>
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500 hid">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Senior Full Stack Developer</h3>
                                <p className="text-lg text-blue-600 font-medium">BurdenOff</p>
                            </div>
                            <span className="text-gray-600 font-medium">May 2025 - Present</span>
                        </div>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Leading development of cross-platform applications (iOS, Android, Web) for enterprise clients</li>
                            <li>Building AI-powered SaaS solutions with modern tech stack</li>
                            <li>Architecting scalable systems handling 25K+ daily transactions</li>
                        </ul>
                    </div>
                    
                    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500 hid">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Junior Full Stack Developer</h3>
                                <p className="text-lg text-green-600 font-medium">BurdenOff</p>
                            </div>
                            <span className="text-gray-600 font-medium">Nov 2024 - Apr 2025</span>
                        </div>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Developed 91Springboard app serving 60K+ users and 29K organizations</li>
                            <li>Implemented critical features: booking, cancellation, multi-credit logic</li>
                            <li>Optimized database queries reducing calls from 30 to 3</li>
                        </ul>
                    </div>
                    
                    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500 hid">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Full Stack Developer Intern</h3>
                                <p className="text-lg text-purple-600 font-medium">BurdenOff</p>
                            </div>
                            <span className="text-gray-600 font-medium">Jul 2024 - Oct 2024</span>
                        </div>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Rapid progression from intern to core team member</li>
                            <li>Delivered production features under tight deadlines</li>
                            <li>Learned AI-assisted development tools (Cursor, V0.dev)</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Core Competencies */}
            <div className="lg:mt-20 mt-16 lg:mb-20 mb-10">
                <h1 className="lg:text-3xl text-2xl font-bold mb-10 text-gray-800">Core Competencies</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg hid">
                        <h3 className="font-bold text-lg text-blue-700 mb-3">End-to-End Ownership</h3>
                        <p className="text-gray-700">Architecture design to production deployment, handling everything from backend APIs to frontend interfaces</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg hid">
                        <h3 className="font-bold text-lg text-green-700 mb-3">High-Scale Systems</h3>
                        <p className="text-gray-700">Built platforms processing thousands of concurrent transactions with enterprise clients like Google & Amazon</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg hid">
                        <h3 className="font-bold text-lg text-purple-700 mb-3">AI-Powered Development & Prompt Engineering</h3>
                        <p className="text-gray-700">Expert prompt engineer achieving 3-4x faster delivery using Claude, Cursor, V0.dev and other AI tools for code generation and optimization</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-lg hid">
                        <h3 className="font-bold text-lg text-orange-700 mb-3">Production Debugging</h3>
                        <p className="text-gray-700">Expert at troubleshooting live systems, optimizing queries, and handling server outages during high traffic</p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl shadow-lg hid">
                        <h3 className="font-bold text-lg text-pink-700 mb-3">Business Alignment</h3>
                        <p className="text-gray-700">Deep understanding of billing, credits logic, and revenue impact with direct client communication experience</p>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl shadow-lg hid">
                        <h3 className="font-bold text-lg text-indigo-700 mb-3">Rapid Learning</h3>
                        <p className="text-gray-700">From intern to senior developer in 12 months, continuously learning and mentoring new team members</p>
                    </div>
                </div>
            </div>

            <div className="lg:mt-20 mt-16 lg:mb-20 mb-6">
                <h1 className="lg:text-3xl text-2xl font-bold mb-10 text-gray-800">Technical Skills</h1>
                
                {/* Frontend Skills */}
                <div className="mb-16">
                    <h2 className="lg:text-2xl text-xl font-semibold mb-8 text-gray-700 flex items-center">
                        <span className="w-1 h-6 bg-blue-500 mr-3 rounded"></span>
                        Frontend Development
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                        {skillsData.frontend.map((skill, index) => (
                            <div key={index} className="group bg-white rounded-xl p-3 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hid animate_logo border border-gray-100">
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
                                    <h3 className="font-semibold text-gray-800 text-xs sm:text-sm mb-1 sm:mb-2">{skill.name}</h3>
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
                    <h2 className="lg:text-2xl text-xl font-semibold mb-8 text-gray-700 flex items-center">
                        <span className="w-1 h-6 bg-green-500 mr-3 rounded"></span>
                        Backend & DevOps
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                        {skillsData.backend.map((skill, index) => (
                            <div key={index} className="group bg-white rounded-xl p-3 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hid animate_logo border border-gray-100">
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
                                    <h3 className="font-semibold text-gray-800 text-xs sm:text-sm mb-1 sm:mb-2">{skill.name}</h3>
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
                    <h2 className="lg:text-2xl text-xl font-semibold mb-6 text-gray-700 flex items-center">
                        <span className="w-1 h-6 bg-purple-500 mr-3 rounded"></span>
                        AI Tools & Prompt Engineering
                    </h2>
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 sm:p-8 mb-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">Prompt Engineering Specialist</h3>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    Leveraging AI tools to achieve <span className="font-semibold text-purple-600">3-4x faster delivery speeds</span> in development. 
                                    Expert in crafting precise prompts for code generation, debugging, and architectural decisions. 
                                    This expertise has been instrumental in delivering complex projects under tight deadlines.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
                        {skillsData.aitools.map((skill, index) => (
                            <div key={index} className="group bg-white rounded-xl p-3 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hid animate_logo border border-gray-100">
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
                                    <h3 className="font-semibold text-gray-800 text-xs sm:text-sm mb-1 sm:mb-2">{skill.name}</h3>
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
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mt-12">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Technology Proficiency</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-lg text-green-800 mb-1">Expert Level</h4>
                            <p className="text-gray-600 text-sm">Production-ready expertise</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-lg text-blue-800 mb-1">Advanced</h4>
                            <p className="text-gray-600 text-sm">Solid understanding & application</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-lg text-yellow-800 mb-1">Intermediate</h4>
                            <p className="text-gray-600 text-sm">Growing expertise & learning</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="lg:mb-20 mb-6">
                <h1 className="lg:text-3xl text-2xl font-bold mb-10 text-gray-800">Education</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
                        <Education 
                              link="https://images.shiksha.com/mediadata/images/1674199807phpl6t19N.jpeg" 
                              course="B.Tech (Computer Science Engineering)" 
                              institute="Guru Gobind Singh Indraprastha University (ADGITM)" 
                              duration="2021 - 2025" 
                              percent="CGPA: 9.23"
                          >

                        </Education>
                        <Education 
                              link="https://www.schooldekho.org/storage/logo//894aq83o4q4oko448800kow8og0g8ws.jpg" 
                              course="12th Class" 
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