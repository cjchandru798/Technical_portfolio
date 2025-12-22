import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaChevronDown } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: 'Salon Booking System',
        desc: ' a Comprehensive booking platform for managing appointments, staff schedules, and customer relationships. Built with Java Spring Boot for a robust backend and MySQL for data persistence.',
        code: 'https://github.com/cjchandru798/Salon-Appointment-Booking.git',
        tags: ['Java', 'Spring Boot', 'MySQL']
    },
    {
        id: 2,
        title: 'Personal Portfolio',
        desc: 'A modern, interactive personal showcase built with React, Tailwind CSS, and Framer Motion. Features smooth page transitions, a clean technical aesthetic, and responsive design.',
        code: 'https://github.com/cjchandru798/Portfolio_website.git',
        tags: ['React', 'Tailwind', 'Framer']
    },
    {
        id: 3,
        title: 'Gmail Service Wrapper',
        desc: 'A reliable Node.js service for handling email delivery via SMTP. Provides a simplified API for sending transactional emails with error handling and logging.',
        code: 'https://github.com/cjchandru798/G-Mail-Sending-App.git',
        tags: ['Node.js', 'Express', 'SMTP']
    },
    {
        id: 4,
        title: 'Simple Appointment Scheduler',
        desc: 'A lightweight scheduling tool designed for small businesses. Features an intuitive interface for booking slots and managing availability.',
        code: 'https://github.com/cjchandru798/simple-appointment-booking.git',
        tags: ['Node.js', '.NET', 'SQL']
    }
];

export default function Projects() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <motion.div
            className="page-transition min-h-screen py-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="mb-16">
                <h1 className="text-4xl font-bold mb-4 tracking-tight">Selected Works</h1>
                <p className="text-gray-500 font-mono text-sm">// Click to expand details</p>
            </div>

            <div className="space-y-4">
                {projects.map((proj) => (
                    <motion.div
                        key={proj.id}
                        layout
                        onClick={() => setSelectedId(selectedId === proj.id ? null : proj.id)}
                        className={`cursor-pointer border bg-white rounded-xl overflow-hidden transition-colors ${selectedId === proj.id ? 'border-black shadow-lg' : 'border-gray-200 hover:border-gray-400'}`}
                    >
                        <motion.div layout className="p-6 flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <h3 className="text-xl font-bold text-gray-900">{proj.title}</h3>
                                {selectedId !== proj.id && (
                                    <div className="hidden md:flex gap-2">
                                        {proj.tags.map(tag => (
                                            <span key={tag} className="text-xs text-gray-400 font-mono">#{tag}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <motion.div
                                animate={{ rotate: selectedId === proj.id ? 180 : 0 }}
                                className="text-gray-400"
                            >
                                <FaChevronDown />
                            </motion.div>
                        </motion.div>

                        <AnimatePresence>
                            {selectedId === proj.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="px-6 pb-6"
                                >
                                    <p className="text-gray-600 mb-6 leading-relaxed border-l-2 border-gray-100 pl-4">
                                        {proj.desc}
                                    </p>

                                    <div className="flex justify-between items-end">
                                        <div className="flex gap-2">
                                            {proj.tags.map((tag, t) => (
                                                <span key={t} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-4">
                                            <a
                                                href={proj.code}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:underline"
                                            >
                                                <FaGithub /> View Code
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
