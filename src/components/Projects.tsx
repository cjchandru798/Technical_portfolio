import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: 'Salon Appointment',
        desc: 'Comprehensive booking platform using Java Spring Boot.',
        code: 'https://github.com/cjchandru798/Salon-Appointment-Booking.git',
        tags: ['Java', 'Spring Boot', 'MySQL']
    },
    {
        title: 'Portfolio Website',
        desc: 'Modern personal showcase with React & Tailwind.',
        code: 'https://github.com/cjchandru798/Portfolio_website.git',
        tags: ['React', 'Tailwind', 'Framer']
    },
    {
        title: 'Gmail Sender',
        desc: 'SMTP integration wrapper application.',
        code: 'https://github.com/cjchandru798/G-Mail-Sending-App.git',
        tags: ['Node.js', 'Express', 'SMTP']
    },
    {
        title: 'Simple Booking',
        desc: 'Lightweight scheduler for small businesses.',
        code: 'https://github.com/cjchandru798/simple-appointment-booking.git',
        tags: ['Node.js', '.NET']
    }
];

export default function Projects() {
    return (
        <motion.section
            className="section-container pt-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-6 border-b border-gray-100">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Projects</h1>
                    <p className="text-gray-500 font-mono text-sm">/root/portfolio/projects</p>
                </div>
                <p className="text-gray-400 text-sm hidden md:block">
                    Showing {projects.length} Repositories
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((proj, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group bg-white border border-gray-200 p-6 rounded-lg hover:border-black transition-colors"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:underline decoration-1 underline-offset-4">
                                {proj.title}
                            </h3>
                            <div className="flex gap-3 text-gray-400">
                                <a href={proj.code} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                                    <FaGithub size={18} />
                                </a>
                                <a href="#" className="hover:text-black transition-colors">
                                    <FaExternalLinkAlt size={16} />
                                </a>
                            </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                            {proj.desc}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {proj.tags.map((tag, t) => (
                                <span key={t} className="px-2 py-1 bg-gray-50 text-gray-600 text-[10px] font-mono border border-gray-100 uppercase tracking-wide">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
