import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div
            className="page-transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
        >
            <div className="grid md:grid-cols-2 gap-16 items-start">

                {/* Bio Section */}
                <div>
                    <h1 className="text-4xl font-bold mb-6 leading-tight">
                        <span className="text-purple-600">class</span>{" "}
                        <span className="text-yellow-600">Developer</span>{" "}
                        <span className="text-gray-400">extends</span>{" "}
                        <span className="text-blue-600">Human</span>
                    </h1>

                    <div className="space-y-8">
                        <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                            <p className="text-lg text-slate-700 leading-relaxed">
                                I'm <span className="font-bold text-slate-900">Hemachandiran</span>, a software engineer who builds with purpose.
                                I merge <span className="text-indigo-600 font-medium">technical robustness</span> with <span className="text-pink-600 font-medium">creative design</span> to craft applications that are as powerful as they are beautiful.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-lg text-slate-600 leading-relaxed">
                                My philosophy is simple: write clean code, solve real problems, and never stop learning.
                                I believe technology should simplify complexity, scale gracefully, and leave a positive impact on the people who use it.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Driven by curiosity and craftsmanship, I enjoy turning ideas into reliable systems—where performance, usability, and clarity work together seamlessly.
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-10 mt-12 bg-slate-50 p-6 rounded-2xl border border-slate-100 w-fit">
                        <div>
                            <div className="text-4xl font-black text-slate-800 tracking-tight">04<span className="text-blue-500 text-2xl">+</span></div>
                            <div className="text-xs font-bold text-slate-400 mt-1 tracking-wider uppercase">Years Exp</div>
                        </div>
                        <div className="w-px h-10 bg-slate-200"></div>
                        <div>
                            <div className="text-4xl font-black text-slate-800 tracking-tight">10<span className="text-purple-500 text-2xl">+</span></div>
                            <div className="text-xs font-bold text-slate-400 mt-1 tracking-wider uppercase">Projects</div>
                        </div>
                    </div>
                </div>

                {/* Technical ID Card */}
                <div className="relative flex justify-center">
                    <motion.div
                        whileHover={{ y: -5, rotate: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-full max-w-sm bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden relative"
                    >
                        {/* Decorative Top Bar */}
                        <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

                        <div className="p-6 relative z-10">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xs font-mono text-slate-400 tracking-wider">
                                    DEV_ID_2025
                                </span>
                                <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-green-50 border border-green-100">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    <span className="text-[10px] font-bold text-green-700 uppercase tracking-wide">
                                        Online
                                    </span>
                                </div>
                            </div>

                            {/* Profile Info */}
                            <div className="flex items-center gap-5 mb-8">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-2xl text-white font-bold shadow-lg ring-4 ring-slate-50">
                                        H
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white text-[10px] p-1 rounded-md border-2 border-white shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-5.5a.75.75 0 011.1-1.02l3.898 4.763 7.427-9.76a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-800 tracking-tight">
                                        Hemachandiran
                                    </h2>
                                    <p className="text-sm font-medium text-slate-500 bg-slate-100 inline-block px-2 py-0.5 rounded-md mt-1">
                                        Full Stack Engineer
                                    </p>
                                </div>
                            </div>

                            {/* Tech Specs */}
                            <div className="space-y-4 mb-8">
                                <motion.div
                                    whileHover={{ x: 5, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 transition-colors cursor-default"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="p-2 rounded-lg bg-white text-blue-600 shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                            </svg>
                                        </span>
                                        <span className="text-sm font-medium text-slate-600">Code</span>
                                    </div>
                                    <span className="text-xs font-mono text-slate-400">React • Spring • Flask</span>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 5, backgroundColor: "rgba(168, 85, 247, 0.05)" }}
                                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 transition-colors cursor-default"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="p-2 rounded-lg bg-white text-purple-600 shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l-9 5.25m0-9v9" />
                                            </svg>
                                        </span>
                                        <span className="text-sm font-medium text-slate-600">Focus</span>
                                    </div>
                                    <span className="text-xs font-mono text-slate-400">Systems & Scalability</span>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 5, backgroundColor: "rgba(236, 72, 153, 0.05)" }}
                                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 transition-colors cursor-default"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="p-2 rounded-lg bg-white text-pink-500 shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                        </span>
                                        <span className="text-sm font-medium text-slate-600">Location</span>
                                    </div>
                                    <span className="text-xs font-mono text-slate-400">Remote • Chennai</span>
                                </motion.div>
                            </div>

                            {/* Barcode Footer */}
                            <div className="flex items-end justify-between border-t border-dashed border-slate-200 pt-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-bold text-slate-300 uppercase">Authenticated</span>
                                    <div className="h-6 w-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzM3NDE1MSIvPjxyZWN0IHg9IjQiIHdpZHRoPSIxIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzM3NDE1MSIvPjxyZWN0IHg9IjYiIHdpZHRoPSIzIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzM3NDE1MSIvPjxyZWN0IHg9IjEwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMzNzQxNTEiLz48cmVjdCB4PSIxMyIgd2lkdGg9IjIiIGhlaWdodD0iMTAwIiBmaWxsPSIjMzc0MTUxIi8+PC9zdmc+')] opacity-40"></div>
                                </div>
                                <span className="text-2xl">⚡️</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </motion.div>
    );
}
