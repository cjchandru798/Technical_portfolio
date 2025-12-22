import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const projects = [
    {
        title: 'Salon Booking',
        desc: 'Full-stack platform for managing appointments and staff.',
        tags: ['Java', 'SpringBoot', 'MySQL'],
        color: 'bg-rose-500'
    },
    {
        title: 'Portfolio v2',
        desc: 'Interactive personal site built with React ecosystem.',
        tags: ['React', 'FramerMotion', 'Tailwind'],
        color: 'bg-blue-500'
    },
    {
        title: 'Mail Service',
        desc: 'SMTP wrapper for reliable email delivery.',
        tags: ['Node', 'Express', 'API'],
        color: 'bg-amber-500'
    },
    {
        title: 'Scheduler App',
        desc: 'Lightweight booking tool for small businesses.',
        tags: ['.NET', 'C#', 'SQL'],
        color: 'bg-purple-500'
    }
];

export default function Projects() {
    return (
        <motion.div
            className="page-transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
        >
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">
                    <span className="text-purple-600">function</span> <span className="text-blue-600">getProjects</span>()
                </h1>
                <p className="text-gray-500 font-mono text-sm">// Selected repositories and live demos</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((proj, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all"
                    >
                        {/* Colored Tab Header */}
                        <div className={`h-2 w-full ${proj.color}`} />

                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <FaFolder className="text-yellow-400" />
                                    <h3 className="font-bold text-lg">{proj.title}</h3>
                                </div>
                                <div className="flex gap-3 text-gray-400">
                                    <FaGithub className="hover:text-black cursor-pointer transition-colors" />
                                    <FaExternalLinkAlt className="hover:text-black cursor-pointer transition-colors" />
                                </div>
                            </div>

                            <p className="text-gray-600 mb-6 text-sm">{proj.desc}</p>

                            <div className="flex flex-wrap gap-2">
                                {proj.tags.map((tag, t) => (
                                    <span key={t} className="px-2 py-1 bg-gray-50 text-gray-500 text-xs font-mono rounded border border-gray-100">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
