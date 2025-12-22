import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
            <div className="pointer-events-auto relative">
                <motion.div
                    className="bg-white/90 backdrop-blur-xl border border-gray-200 shadow-xl rounded-xl overflow-hidden min-w-[220px]"
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                >
                    {/* Toggle Header */}
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex justify-between items-center px-5 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                        <div className="flex flex-col">
                            <span className="font-bold text-sm tracking-wide text-gray-900">HEMACHANDIRAN</span>
                            <span className="text-[10px] text-gray-400 font-mono tracking-wider">FULL STACK DEV</span>
                        </div>

                        <motion.div
                            variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}
                            className="text-gray-400"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </motion.div>
                    </div>

                    {/* Dropdown Links */}
                    <motion.div
                        variants={{
                            open: { height: "auto", opacity: 1 },
                            closed: { height: 0, opacity: 0 }
                        }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-gray-100"
                    >
                        <div className="flex flex-col p-2 gap-1">
                            {menuItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }: { isActive: boolean }) => `
                                    block px-4 py-3 rounded-lg text-sm font-medium transition-colors
                                    ${isActive
                                            ? 'bg-gray-100 text-black'
                                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}
                                `}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </nav>
    );
}
