import Footer from '../Footer';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const DRIVE_DOWNLOAD = 'https://drive.google.com/uc?export=download&id=1OFBlwgfwMdbF2zXt9EGmwiTIe9GqG72R';
const DRIVE_VIEW     = 'https://drive.google.com/file/d/1OFBlwgfwMdbF2zXt9EGmwiTIe9GqG72R/view';

const skills = {
    'Frontend':  ['React JS', 'Next JS', 'Ionic & Capacitor', 'TypeScript', 'JavaScript', 'Three.js', 'Tailwind CSS', 'MUI', 'Redux', 'Recoil'],
    'Backend':   ['Node.js', 'Hono', 'GraphQL', 'REST APIs', 'WebSockets', 'Pub/Sub'],
    'Database':  ['MongoDB', 'PostgreSQL', 'Prisma', 'Redis', 'SQL'],
    'DevOps':    ['Docker', 'AWS', 'Cloudflare'],
    'AI Tools':  ['Claude', 'Cursor', 'V0'],
};

const experience = [
    {
        role: 'Senior Full Stack Developer',
        company: 'BurdenOff',
        companyUrl: 'https://burdenoff.com/',
        period: 'May 2025 – Present',
        color: 'border-blue-500',
        badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
        points: [
            'Leading development of a cross-platform application for enterprise clients.',
            'Building an AI-powered SaaS platform from scratch, including backend architecture and frontend interfaces.',
        ],
    },
    {
        role: 'Junior Full Stack Developer',
        company: 'BurdenOff',
        companyUrl: 'https://burdenoff.com/',
        period: 'Nov 2024 – Apr 2025',
        color: 'border-green-500',
        badge: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
        points: [
            'Contributed to multiple client projects, delivering features across backend (Node.js, TypeScript) and frontend (React, Tailwind).',
            'Optimized complex workflows and integrated third-party services.',
        ],
    },
    {
        role: 'Full Stack Developer Intern',
        company: 'BurdenOff',
        companyUrl: 'https://burdenoff.com/',
        period: 'Jul 2024 – Oct 2024',
        color: 'border-purple-500',
        badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
        points: [
            'Developed core modules for client applications.',
            'Improved system performance by reducing redundant database queries and streamlining API calls.',
        ],
    },
];

const projects = [
    {
        name: '91Springboard',
        tag: 'Client Work',
        desc: 'End-to-end mobile (iOS & Android) and web platform for a coworking org handling 1000+ daily bookings and 60K+ users. Built multi-credit booking, RBAC, and processed 2.5L+ total bookings.',
    },
    {
        name: 'VibeControls',
        tag: 'Company Product',
        desc: 'Built complete billing & monetization infrastructure — subscriptions, credits, addons, plans, Stripe & Razorpay payments, usage tracking, file/template/catalog management.',
    },
    {
        name: 'FluidGrids',
        tag: 'Company Product',
        url: 'https://www.fluidgrids.ai/',
        desc: 'Workflow builder platform for designing, connecting, monitoring, and scaling business workflows through a visual canvas, node-based configuration, run tracking, and workspace access controls.',
    },
    {
        name: 'BigConsole',
        tag: 'Company Product',
        url: 'https://www.bigconsole.com/',
        desc: 'Big data dashboard platform for handling large datasets and converting them into interactive dashboards with charts, KPI widgets, tables, analytics views, and governed sharing.',
    },
    {
        name: 'CodeCrack',
        tag: 'Personal',
        url: 'https://github.com/ShauryaSood2003/CodeCrack',
        desc: 'Microserviced coding platform with real-time code execution, multi-language support, and 1v1 CodeWars battles with token rewards.',
    },
    {
        name: 'PayWay',
        tag: 'Personal',
        url: 'https://github.com/ShauryaSood2003/PayWay',
        desc: 'Fintech app featuring P2P transactions, bank transfers, merchant dashboard with WebSocket-enabled real-time transaction updates.',
    },
];

const certifications = [
    {
        name: 'Full Stack Developer Cohort 2',
        issuer: '100xDevs',
        url: 'https://app.100xdevs.com/certificate/verify/ND932FD5',
    },
    {
        name: 'Artificial Intelligence Analyst',
        issuer: 'IBM',
        url: 'https://courses.allsoftsolutions.skillsnetwork.site/certificates/24206ad74b6c41a183fd6fa5309d369f',
    },
];

const Section = ({ title, children }) => (
    <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400">{title}</h2>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        </div>
        {children}
    </div>
);

const Resume = () => {
    return (
        <section className="max-container pb-10">
            {/* Page header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">My Resume</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Shaurya Sood — Full Stack Developer</p>
                </div>
                <div className="flex gap-3">
                    <a href={DRIVE_VIEW} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors">
                        <OpenInNewIcon style={{ fontSize: 16 }} />
                        View PDF
                    </a>
                    <a href={DRIVE_DOWNLOAD} download
                       className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-md hover:shadow-lg">
                        <DownloadIcon style={{ fontSize: 16 }} />
                        Download PDF
                    </a>
                </div>
            </div>

            {/* Resume card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col lg:flex-row">

                    {/* ── Left sidebar ── */}
                    <div className="lg:w-72 xl:w-80 flex-shrink-0 bg-gray-900 dark:bg-gray-950 text-white p-8 flex flex-col gap-8">
                        {/* Photo + name */}
                        <div className="text-center">
                            <img
                                src="/myPhoto.jpeg"
                                alt="Shaurya Sood"
                                className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-white/20 shadow-xl"
                            />
                            <h1 className="text-2xl font-black tracking-wide">SHAURYA SOOD</h1>
                            <p className="text-blue-400 text-sm font-semibold tracking-widest mt-1 uppercase">Full Stack Developer</p>
                        </div>

                        {/* Contact */}
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">Contact</p>
                            <div className="flex flex-col gap-2.5 text-sm text-gray-300">
                                <a href="mailto:shauryasood293@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
                                    <EmailIcon style={{ fontSize: 15 }} className="text-blue-400 flex-shrink-0" />
                                    <span className="break-all">shauryasood293@gmail.com</span>
                                </a>
                                <a href="https://www.linkedin.com/in/shaurya-sood-87b968208" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors">
                                    <LinkedInIcon style={{ fontSize: 15 }} className="text-blue-400 flex-shrink-0" />
                                    linkedin/shaurya-sood
                                </a>
                                <a href="https://github.com/ShauryaSood2003" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors">
                                    <GitHubIcon style={{ fontSize: 15 }} className="text-blue-400 flex-shrink-0" />
                                    ShauryaSood2003
                                </a>
                                <a href="https://twitter.com/ShauyaSood" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors">
                                    <TwitterIcon style={{ fontSize: 15 }} className="text-blue-400 flex-shrink-0" />
                                    @ShauyaSood
                                </a>
                                <span className="flex items-center gap-2.5">
                                    <LocationOnIcon style={{ fontSize: 15 }} className="text-blue-400 flex-shrink-0" />
                                    Pitampura, New Delhi
                                </span>
                            </div>
                        </div>

                        {/* Skills */}
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">Skills</p>
                            <div className="flex flex-col gap-4">
                                {Object.entries(skills).map(([category, items]) => (
                                    <div key={category}>
                                        <p className="text-xs font-semibold text-blue-400 mb-1.5">{category}</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {items.map(skill => (
                                                <span key={skill} className="px-2 py-0.5 bg-white/10 text-gray-200 rounded-md text-[11px]">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">Education</p>
                            <div className="flex flex-col gap-4 text-sm">
                                <div>
                                    <p className="font-semibold text-white">B.Tech (CSE)</p>
                                    <p className="text-gray-400 text-xs leading-snug">Guru Gobind Singh Indraprastha University (ADGITM)</p>
                                    <p className="text-gray-500 text-xs">2021 – 2025</p>
                                    <p className="text-blue-400 text-xs font-semibold mt-0.5">CGPA: 9.23</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-white">12th Class</p>
                                    <p className="text-gray-400 text-xs leading-snug">DL DAV Model School, Pitampura</p>
                                    <p className="text-gray-500 text-xs">2009 – 2021</p>
                                    <p className="text-blue-400 text-xs font-semibold mt-0.5">93.2%</p>
                                </div>
                            </div>
                        </div>

                        {/* Languages */}
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">Languages</p>
                            <div className="flex gap-3">
                                {['English', 'Hindi'].map(lang => (
                                    <span key={lang} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-200">{lang}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Right main content ── */}
                    <div className="flex-1 p-8 lg:p-10">

                        {/* Profile */}
                        <Section title="Profile">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                                I am a dedicated software engineer with a vision for creating innovative solutions and a passion for leveraging technology to solve complex problems efficiently. With a strong background in software development and a commitment to continuous learning, I strive to push the boundaries of what's possible.
                            </p>
                        </Section>

                        {/* Experience */}
                        <Section title="Experience">
                            <div className="flex flex-col gap-5">
                                {experience.map((job, i) => (
                                    <div key={i} className={`pl-4 border-l-2 ${job.color}`}>
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <h3 className="font-bold text-gray-900 dark:text-white text-base">{job.role}</h3>
                                            <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${job.badge}`}>{job.period}</span>
                                        </div>
                                        <a href={job.companyUrl} target="_blank" rel="noopener noreferrer"
                                           className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 mb-2">
                                            {job.company}
                                            <OpenInNewIcon style={{ fontSize: 12 }} />
                                        </a>
                                        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                            {job.points.map((p, j) => <li key={j}>{p}</li>)}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        {/* Projects */}
                        <Section title="Projects">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {projects.map((proj, i) => (
                                    <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center justify-between mb-1.5">
                                            <h3 className="font-bold text-gray-900 dark:text-white text-sm">{proj.name}</h3>
                                            <div className="flex items-center gap-1.5">
                                                <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-[10px] font-semibold">{proj.tag}</span>
                                                {proj.url && (
                                                    <a href={proj.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                                                        <OpenInNewIcon style={{ fontSize: 14 }} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{proj.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        {/* Certifications */}
                        <Section title="Certifications">
                            <div className="flex flex-col gap-3">
                                {certifications.map((cert, i) => (
                                    <a key={i} href={cert.url} target="_blank" rel="noopener noreferrer"
                                       className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors group">
                                        <div>
                                            <p className="font-semibold text-sm text-gray-900 dark:text-white">{cert.name}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                                        </div>
                                        <OpenInNewIcon style={{ fontSize: 16 }} className="text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                                    </a>
                                ))}
                            </div>
                        </Section>

                    </div>
                </div>
            </div>

            {/* Bottom download CTA */}
            <div className="mt-8 text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Want a copy for your records?</p>
                <a href={DRIVE_DOWNLOAD} download
                   className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-md hover:shadow-lg">
                    <DownloadIcon style={{ fontSize: 18 }} />
                    Download Resume PDF
                </a>
            </div>

            <div className="mt-12">
                <Footer />
            </div>
        </section>
    );
};

export default Resume;
