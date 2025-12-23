import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaFolder, FaCircle } from 'react-icons/fa';
import { SiReact, SiSpringboot, SiNodedotjs } from 'react-icons/si';

const projects = [
    {
        id: 1,
        fileName: 'FundraisingPlatform.java',
        title: 'Fundraising Web Application',
        desc: 'Donation & fundraising platform.',
        fullDesc: 'A full-stack fundraising web application built for She Can Foundation to manage campaigns, donors, and contributions. Includes secure backend APIs, donation tracking, and campaign management features.',
        code: 'https://github.com/cjchandru798/fundraise-backend.git',
        tags: ['Java', 'Spring Boot', 'MySQL'],
        langColor: 'text-red-500',
        icon: SiSpringboot
    },
    {
        id: 2,
        fileName: 'TicketBookingSystem.java',
        title: 'Ticket Booking Application',
        desc: 'Microservices-based ticket booking system.',
        fullDesc: 'A scalable ticket booking application developed using microservices architecture. Integrated with Eureka Server for service discovery and API Gateway for centralized routing and security.',
        code: 'https://github.com/joshuaimman-17/Ticket-Booking-App.git',
        tags: ['Java', 'Spring Boot', 'Eureka', 'API Gateway'],
        langColor: 'text-red-500',
        icon: SiSpringboot
    },
    {
        id: 3,
        fileName: 'TicketBookingSystem.java',
        title: 'Ticket Booking Application',
        desc: 'Microservices-based ticket booking system.',
        fullDesc: 'A scalable ticket booking application developed using microservices architecture. Integrated with Eureka Server for service discovery and API Gateway for centralized routing and security.',
        code: 'https://github.com/joshuaimman-17/Ticket-Booking-App.git',
        tags: ['Java', 'Spring Boot', 'Eureka', 'API Gateway'],
        langColor: 'text-red-500',
        icon: SiSpringboot
    },
    {
        id: 4,
        fileName: 'SalonBooking.java',
        title: 'Salon Management System',
        desc: 'Full-stack booking platform.',
        fullDesc: 'A comprehensive solution for beauty salons to manage staff schedules, customer bookings, and service catalogs. Features include automated email reminders and dynamic pricing.',
        code: 'https://github.com/cjchandru798/Salon-Appointment-Booking.git',
        tags: ['Java', 'Spring', 'MySQL'],
        langColor: 'text-red-500',
        icon: SiSpringboot
    },
    {
        id: 5,
        fileName: 'Portfolio.tsx',
        title: 'Personal Portfolio',
        desc: 'Interactive personal showcase.',
        fullDesc: 'Built to demonstrate advanced frontend techniques including layout animations, page transitions, and responsive design patterns.',
        code: 'https://github.com/cjchandru798/Portfolio_website.git',
        tags: ['React', 'Framer', 'Tailwind'],
        langColor: 'text-cyan-400',
        icon: SiReact
    },
    {
        id: 6,
        fileName: 'MailerService.js',
        title: 'Gmail Wrapper Service',
        desc: 'Node.js service for emails.',
        fullDesc: 'A robust microservice that wraps SMTP interactions, providing a cleaner API for other applications to send transactional emails.',
        code: 'https://github.com/cjchandru798/G-Mail-Sending-App.git',
        tags: ['Node', 'Express', 'SMTP'],
        langColor: 'text-green-500',
        icon: SiNodedotjs
    },
    {
        id: 7,
        fileName: 'Scheduler.cs',
        title: 'Appointment Tool',
        desc: 'Lightweight scheduling tool.',
        fullDesc: 'Designed for strict simplicity, this tool allows small business owners to define available slots and lets customers book them quickly.',
        code: 'https://github.com/cjchandru798/simple-appointment-booking.git',
        tags: ['C#', '.NET', 'SQL'],
        langColor: 'text-purple-500',
        icon: FaFolder
    },



];

export default function Projects() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <motion.div
            className="page-transition min-h-screen pt-32 pb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">
                    <span className="text-purple-500">const</span> <span className="text-blue-600">works</span> <span className="text-gray-400">=</span> <span className="text-yellow-500">[ ]</span>;
                </h1>
                <p className="text-gray-500 font-mono text-sm ml-1">
                // Click a file to inspect full details
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((proj) => {
                    const isSelected = selectedId === proj.id;
                    const LangIcon = proj.icon;

                    return (
                        <motion.div
                            key={proj.id}
                            layout
                            onClick={() => setSelectedId(isSelected ? null : proj.id)}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className={`
                            relative bg-white rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300
                            ${isSelected
                                    ? 'border-blue-500 shadow-xl ring-1 ring-blue-100 col-span-1 md:col-span-2'
                                    : 'border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200'
                                }
                        `}
                        >
                            {/* Header Bar */}
                            <div className="bg-gray-50 border-b border-gray-100 px-6 py-3 flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <LangIcon className={`${proj.langColor} text-lg`} />
                                    <span className="font-mono text-sm text-gray-600 font-medium">{proj.fileName}</span>
                                </div>
                                <div className="flex gap-1.5">
                                    <FaCircle className="text-red-400 text-[10px]" />
                                    <FaCircle className="text-yellow-400 text-[10px]" />
                                    <FaCircle className="text-green-400 text-[10px]" />
                                </div>
                            </div>

                            <motion.div layout className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{proj.title}</h3>
                                        <AnimatePresence mode='wait'>
                                            {!isSelected && (
                                                <motion.p
                                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                                    className="text-gray-500"
                                                >
                                                    {proj.desc}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {isSelected && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                        >
                                            <div className="pt-4 border-t border-gray-100 mt-4">
                                                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                                    {proj.fullDesc}
                                                </p>

                                                <div className="flex flex-wrap items-center justify-between gap-6">
                                                    <div className="flex gap-2">
                                                        {proj.tags.map(tag => (
                                                            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    <a
                                                        href={proj.code}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200"
                                                    >
                                                        <FaGithub /> Git Checkout
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}
