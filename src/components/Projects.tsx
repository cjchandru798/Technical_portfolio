import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaCaretRight, FaCode } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: 'Salon Booking System',
        desc: 'Platform for managing salon appointments.',
        fullDesc: 'A comprehensive solution for beauty salons to manage staff schedules, customer bookings, and service catalogs. Features include automated email reminders, dynamic pricing, and an admin dashboard for real-time analytics.',
        code: 'https://github.com/cjchandru798/Salon-Appointment-Booking.git',
        tags: ['Java', 'Spring Boot', 'MySQL']
    },
    {
        id: 2,
        title: 'Personal Portfolio',
        desc: 'Interactive personal showcase.',
        fullDesc: 'Built to demonstrate advanced frontend techniques including layout animations, page transitions, and responsive design patterns. The codebase is structured for easy scalability and maintenance.',
        code: 'https://github.com/cjchandru798/Portfolio_website.git',
        tags: ['React', 'Tailwind', 'Framer']
    },
    {
        id: 3,
        title: 'Gmail Service Wrapper',
        desc: 'Node.js service for reliable email delivery.',
        fullDesc: 'A robust microservice that wraps SMTP interactions, providing a cleaner API for other applications to send transactional emails. Includes retry mechanisms and error logging.',
        code: 'https://github.com/cjchandru798/G-Mail-Sending-App.git',
        tags: ['Node.js', 'Express', 'SMTP']
    },
    {
        id: 4,
        title: 'Appointment Scheduler',
        desc: 'Lightweight tool for small businesses.',
        fullDesc: 'Designed for strict simplicity, this tool allows small business owners to define available slots and lets customers book them without user account creation.',
        code: 'https://github.com/cjchandru798/simple-appointment-booking.git',
        tags: ['Node.js', '.NET']
    }
];

export default function Projects() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <motion.div
            className="page-transition min-h-screen pt-32 pb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">Selected Works</h1>
                <p className="text-gray-500 font-mono text-sm">// Explore recent development projects</p>
            </div>

            <div className="flex flex-col gap-4">
                {projects.map((proj) => {
                    const isSelected = selectedId === proj.id;

                    return (
                        <motion.div
                            key={proj.id}
                            layout
                            onClick={() => setSelectedId(isSelected ? null : proj.id)}
                            className={`
                            relative overflow-hidden rounded-xl border cursor-pointer transition-all duration-300
                            ${isSelected ? 'bg-black text-white border-black ring-4 ring-gray-100 shadow-xl' : 'bg-white text-gray-900 border-gray-200 hover:border-gray-400'}
                        `}
                        >
                            <motion.div layout className="p-6 md:p-8 flex justify-between items-center">
                                <div className="flex flex-col md:flex-row md:items-center gap-4">
                                    <span className={`font-mono text-sm ${isSelected ? 'text-gray-500' : 'text-gray-400'}`}>0{proj.id}</span>
                                    <h3 className="text-2xl font-bold">{proj.title}</h3>
                                    {!isSelected && <p className="text-gray-500 md:ml-4 text-sm hidden md:block">{proj.desc}</p>}
                                </div>

                                <motion.div
                                    animate={{ rotate: isSelected ? 90 : 0 }}
                                    className={isSelected ? 'text-white' : 'text-gray-400'}
                                >
                                    <FaCaretRight size={20} />
                                </motion.div>
                            </motion.div>

                            <AnimatePresence>
                                {isSelected && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-8 pb-8"
                                    >
                                        <div className="pt-6 border-t border-gray-800 grid md:grid-cols-3 gap-12">
                                            <div className="md:col-span-2">
                                                <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">Description</h4>
                                                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                                                    {proj.fullDesc}
                                                </p>

                                                <a
                                                    href={proj.code}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors"
                                                >
                                                    <FaGithub /> View Source
                                                </a>
                                            </div>

                                            <div>
                                                <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">Tech Stack</h4>
                                                <ul className="space-y-3">
                                                    {proj.tags.map(tag => (
                                                        <li key={tag} className="flex items-center gap-3 text-gray-300">
                                                            <FaCode className="text-gray-600" />
                                                            {tag}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}
