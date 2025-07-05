import { NavLink } from "react-router-dom";

const Nav=()=>{
    return(
        <>
            {/* Header for all screens */}
            <header className="header backdrop-blur-sm bg-white/30">
                {/* Logo */}
                <NavLink to="/" className="bg-black w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg rounded-xl transform hover:scale-105 transition-transform">
                    <p className="text-white font-bold text-sm sm:text-lg">SS</p>
                </NavLink>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex text-base lg:text-lg gap-4 lg:gap-8 font-medium items-center">
                    <NavLink to="/about" className={({isActive})=>isActive?"text-blue-600 font-semibold":"text-gray-700 hover:text-blue-600 transition-colors"}>
                        About
                    </NavLink>
                    
                    <NavLink to="/project" className={({isActive})=>isActive?"text-blue-600 font-semibold":"text-gray-700 hover:text-blue-600 transition-colors"}>
                        Projects
                    </NavLink>

                    <NavLink to="/contact" className={({isActive})=>isActive?"text-blue-600 font-semibold":"text-gray-700 hover:text-blue-600 transition-colors"}>
                        Contact
                    </NavLink>

                    <a className="bg-black text-white px-3 lg:px-5 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm lg:text-base" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1QTAthoWZTXq2kYoAlgVSTlxrDSpLqrM_/view">
                        Resume
                    </a>
                </nav>

                {/* Mobile Resume Button */}
                <div className="md:hidden">
                    <a 
                        className="bg-black text-white px-3 py-2 rounded-lg text-xs font-medium hover:shadow-lg transition-all duration-200" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://drive.google.com/file/d/1QTAthoWZTXq2kYoAlgVSTlxrDSpLqrM_/view"
                    >
                        Resume
                    </a>
                </div>
            </header>

            {/* Mobile Bottom Navigation */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50">
                {/* Background with native app styling */}
                <div className="bg-white shadow-[0_-1px_3px_rgba(0,0,0,0.1)] border-t border-gray-100">
                    {/* Safe area padding for modern phones */}
                    <div className="px-2 pt-2 pb-safe">
                        <div className="flex justify-around items-center">
                            <NavLink 
                                to="/" 
                                className="group flex flex-col items-center py-2 px-4 min-w-0 flex-1"
                            >
                                {({isActive}) => (
                                    <>
                                        <div className={`relative mb-1 transition-all duration-300 ${isActive ? 'scale-110' : ''}`}>
                                            <svg className={`w-6 h-6 transition-colors duration-200 ${
                                                isActive ? 'text-blue-600' : 'text-gray-400'
                                            }`} fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                            </svg>
                                            {/* Active indicator dot */}
                                            {isActive && (
                                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full animate-pulse"></div>
                                            )}
                                        </div>
                                        <span className={`text-xs font-medium transition-colors duration-200 ${
                                            isActive ? 'text-blue-600' : 'text-gray-500'
                                        }`}>
                                            Home
                                        </span>
                                    </>
                                )}
                            </NavLink>
                            
                            <NavLink 
                                to="/about" 
                                className="group flex flex-col items-center py-2 px-4 min-w-0 flex-1"
                            >
                                {({isActive}) => (
                                    <>
                                        <div className={`relative mb-1 transition-all duration-300 ${isActive ? 'scale-110' : ''}`}>
                                            <svg className={`w-6 h-6 transition-colors duration-200 ${
                                                isActive ? 'text-blue-600' : 'text-gray-400'
                                            }`} fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                            </svg>
                                            {isActive && (
                                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full animate-pulse"></div>
                                            )}
                                        </div>
                                        <span className={`text-xs font-medium transition-colors duration-200 ${
                                            isActive ? 'text-blue-600' : 'text-gray-500'
                                        }`}>
                                            About
                                        </span>
                                    </>
                                )}
                            </NavLink>
                            
                            <NavLink 
                                to="/project" 
                                className="group flex flex-col items-center py-2 px-4 min-w-0 flex-1"
                            >
                                {({isActive}) => (
                                    <>
                                        <div className={`relative mb-1 transition-all duration-300 ${isActive ? 'scale-110' : ''}`}>
                                            <svg className={`w-6 h-6 transition-colors duration-200 ${
                                                isActive ? 'text-blue-600' : 'text-gray-400'
                                            }`} fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                            </svg>
                                            {isActive && (
                                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full animate-pulse"></div>
                                            )}
                                        </div>
                                        <span className={`text-xs font-medium transition-colors duration-200 ${
                                            isActive ? 'text-blue-600' : 'text-gray-500'
                                        }`}>
                                            Projects
                                        </span>
                                    </>
                                )}
                            </NavLink>
                            
                            <NavLink 
                                to="/contact" 
                                className="group flex flex-col items-center py-2 px-4 min-w-0 flex-1"
                            >
                                {({isActive}) => (
                                    <>
                                        <div className={`relative mb-1 transition-all duration-300 ${isActive ? 'scale-110' : ''}`}>
                                            <svg className={`w-6 h-6 transition-colors duration-200 ${
                                                isActive ? 'text-blue-600' : 'text-gray-400'
                                            }`} fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                            {isActive && (
                                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full animate-pulse"></div>
                                            )}
                                        </div>
                                        <span className={`text-xs font-medium transition-colors duration-200 ${
                                            isActive ? 'text-blue-600' : 'text-gray-500'
                                        }`}>
                                            Contact
                                        </span>
                                    </>
                                )}
                            </NavLink>
                        </div>
                        
                        {/* Safe area for modern phones */}
                        <div className="h-safe-bottom"></div>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Nav;