import { projects } from '../../assets/asserts';
import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Footer from '../Footer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import AppleIcon from '@mui/icons-material/Apple';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const TYPE_BADGE = {
    'Client Work': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300',
    'Personal Project': 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
    'Company Product': 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300',
    'Learning Project': 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
};

const ProjectCard = ({ project, index }) => {
    const { t } = useLanguage();
    const description = project.description || project.text;
    const techStack = project.techStack || [];
    const features = project.features || [];
    const metrics = project.metrics || {};
    const type = project.type || 'Personal Project';
    const liveLink = project.liveLink || project.link;

    const descriptionText =
        project.title === '91Springboard' ? t('project91SpringboardDesc') :
        project.title === 'CodeCrack'     ? t('projectCodeCrackDesc') :
        project.title === 'PayWay'        ? t('projectPayWayDesc') :
        description;

    const hasStoreLinks = project.appStoreLink || project.playStoreLink;
    const hasPrimaryLink = liveLink || project.githubLink;

    return (
        <div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col animate-fadeIn"
            style={{ animationDelay: `${index * 0.12}s` }}
        >
            {/* Header */}
            <div
                className="relative h-36 flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${project.color || '#e0e7ff'} 0%, #f8fafc 100%)` }}
            >
                <img
                    src={project.logo}
                    alt={project.title}
                    className="h-16 w-auto max-w-[60%] object-contain drop-shadow"
                />
                <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${TYPE_BADGE[type] || TYPE_BADGE['Personal Project']}`}>
                    {type === 'Client Work' ? t('clientWork') : type === 'Personal Project' ? t('personalProject') : type}
                </span>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col flex-1 gap-4">
                {/* Title block */}
                <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{project.title}</h3>
                        <p className="text-xs text-gray-400 flex-shrink-0 mt-1">{project.duration}</p>
                    </div>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{project.subTitle}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                    {descriptionText}
                </p>

                {/* Metrics — only for 91Springboard */}
                {Object.keys(metrics).length > 0 && (
                    <div className="grid grid-cols-4 gap-2">
                        {Object.entries(metrics).map(([key, value], idx) => (
                            <div key={idx} className="bg-blue-50 dark:bg-blue-900/30 rounded-xl py-2.5 px-1 text-center flex flex-col items-center justify-center">
                                <div className="text-base font-bold text-blue-600 dark:text-blue-400 leading-tight">{value}</div>
                                {/\d/.test(value) && (
                                    <div className="text-[10px] text-gray-500 dark:text-gray-400 capitalize leading-tight mt-0.5">
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Top 3 features only */}
                {features.length > 0 && (
                    <div className="flex flex-col gap-1.5">
                        {features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {feature}
                            </div>
                        ))}
                    </div>
                )}

                {/* Tech stack — max 5 tags */}
                {techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                        {techStack.slice(0, 5).map((tech, idx) => (
                            <span key={idx} className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                                {tech}
                            </span>
                        ))}
                        {techStack.length > 5 && (
                            <span className="px-2.5 py-1 bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded-full text-xs font-medium">
                                +{techStack.length - 5}
                            </span>
                        )}
                    </div>
                )}

                {/* Spacer */}
                <div className="flex-1" />

                {/* Buttons — primary row, then store row */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex flex-col gap-2">
                    {hasPrimaryLink && (
                        <div className="flex gap-2">
                            {liveLink && (
                                <a href={liveLink} target="_blank" rel="noopener noreferrer"
                                   className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors">
                                    <LaunchIcon style={{ fontSize: 16 }} />
                                    {t('liveDemo')}
                                </a>
                            )}
                            {project.githubLink && (
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                   className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors">
                                    <GitHubIcon style={{ fontSize: 16 }} />
                                    {t('viewCode')}
                                </a>
                            )}
                        </div>
                    )}
                    {hasStoreLinks && (
                        <div className="flex gap-2">
                            {project.appStoreLink && (
                                <a href={project.appStoreLink} target="_blank" rel="noopener noreferrer"
                                   className="flex-1 flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors">
                                    <AppleIcon style={{ fontSize: 16 }} />
                                    App Store
                                </a>
                            )}
                            {project.playStoreLink && (
                                <a href={project.playStoreLink} target="_blank" rel="noopener noreferrer"
                                   className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors">
                                    <PhoneAndroidIcon style={{ fontSize: 16 }} />
                                    Play Store
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Project = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState('client');

    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(16px); }
                to   { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn {
                animation: fadeIn 0.5s ease-out forwards;
                opacity: 0;
            }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    const clientProjects  = projects.filter(p => p.type === 'Client Work' || p.type === 'Company Product');
    const personalProjects = projects.filter(p => p.type !== 'Client Work' && p.type !== 'Company Product');
    const displayed = activeTab === 'client' ? clientProjects : personalProjects;

    return (
        <section className='max-container'>
            {/* Page header */}
            <div className='text-center mb-10 sm:mb-12'>
                <h1 className='font-bold text-3xl sm:text-5xl mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent'>
                    {t('projectsTitle')}
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                    {t('projectsIntro')}
                </p>
            </div>

            {/* Tab switcher */}
            <div className="flex justify-center mb-10">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-1 flex gap-1 shadow-inner">
                    <button
                        onClick={() => setActiveTab('client')}
                        className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                            activeTab === 'client'
                                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                        }`}
                    >
                        {t('clientWork')}
                        <span className="ml-1.5 text-[11px] bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded-full font-medium">
                            {clientProjects.length}
                        </span>
                    </button>
                    <button
                        onClick={() => setActiveTab('personal')}
                        className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                            activeTab === 'personal'
                                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                        }`}
                    >
                        {t('personalProject')}
                        <span className="ml-1.5 text-[11px] bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded-full font-medium">
                            {personalProjects.length}
                        </span>
                    </button>
                </div>
            </div>

            {/* Projects grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 sm:mb-20 px-4 sm:px-0'>
                {displayed.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </div>

            {/* CTA */}
            <div className="text-center py-14 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl mb-20 px-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    {t('interestedWorking')}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-base mb-8 max-w-xl mx-auto">
                    {t('interestedWorkingDesc')}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <a href="/contact"
                       className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                        {t('getInTouch')}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                    <a href="https://github.com/ShauryaSood2003" target="_blank" rel="noopener noreferrer"
                       className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                        <GitHubIcon style={{ fontSize: 20 }} />
                        {t('moreOnGitHub')}
                    </a>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default Project;
