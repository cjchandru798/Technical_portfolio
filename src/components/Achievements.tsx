
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'Technical' | 'Leadership' | 'Academic';

const achievements = [
    // Technical
    {
        title: "Participant – Smart India Hackathon",
        org: "Government of India",
        desc: "Proposed and developed the idea “Palm Vein Biometric Voting System”, focusing on secure and tamper-resistant digital voting.",
        category: "Technical",
        icon: "🚀"
    },
    {
        title: "Winner – Code Debugging Competition",
        org: "SIMATS Engineering",
        desc: "Recognized for problem-solving speed and debugging accuracy.",
        category: "Technical",
        icon: "🏆"
    },
    {
        title: "Runner-Up – Naan Mudhalvan Hackathon",
        org: "Spring Boot – Level 2",
        desc: "Secured runner-up position and earned an internship opportunity.",
        category: "Technical",
        icon: "🥈"
    },
    {
        title: "Runner-Up – Naan Mudhalvan Hackathon",
        org: "Spring Boot – Level 1",
        desc: "Recognized for backend development skills and awarded an internship opportunity.",
        category: "Technical",
        icon: "🥉"
    },

    // Leadership
    {
        title: "Project and Innovation Cell Coordinator",
        org: "Student Forum",
        desc: "Coordinated innovative projects and led student initiatives within the college technical forum.",
        category: "Leadership",
        icon: "🤝"
    },
    {
        title: "HP LIFE Ambassador",
        org: "HP LIFE",
        desc: "Actively represented and promoted digital skills and entrepreneurship initiatives.",
        category: "Leadership",
        icon: "🌍"
    },

    // Academic & Extracurricular
    {
        title: "National Level Yoga Competition",
        org: "Participant",
        desc: "Represented at the national level, demonstrating discipline and consistency.",
        category: "Academic",
        icon: "🧘"
    },
    {
        title: "National Level Spell Bee Competition",
        org: "Participant",
        desc: "Competed at the national level, showcasing language proficiency.",
        category: "Academic",
        icon: "🔤"
    },
    {
        title: "Hindi Language Certifications",
        org: "Dakshina Bharat Hindi Prachar Sabha",
        desc: "Completed Parichay, Prathmic, Madhyama, and Rashtrabasha certifications.",
        category: "Academic",
        icon: "📜"
    }
];

export default function Achievements() {
    const [activeTab, setActiveTab] = useState<Category>('Technical');

    const filteredAchievements = achievements.filter(a => a.category === activeTab);

    return (
        <motion.div
            className="page-transition min-h-screen py-20 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
                    >
                        Achievements & <span className="text-yellow-500">Recognition</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-slate-500 max-w-2xl mx-auto"
                    >
                        Celebrating milestones in technology, leadership, and personal growth.
                    </motion.p>
                </div>

                {/* Sliding Tabs */}
                <div className="flex justify-center mb-16">
                    <div className="bg-slate-100 p-1.5 rounded-full flex gap-2 relative">
                        {(['Technical', 'Leadership', 'Academic'] as Category[]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative px-6 py-2.5 rounded-full text-sm font-bold z-10 transition-colors duration-300 ${activeTab === tab ? "text-slate-900" : "text-slate-500 hover:text-slate-700"
                                    }`}
                            >
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-white rounded-full shadow-sm"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{tab}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Staggered Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 gap-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredAchievements.map((item, index) => (
                            <motion.div
                                key={item.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1, // Stagger effect
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-slate-800 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 bg-slate-50 inline-block px-2 py-1 rounded-md">
                                            {item.org}
                                        </div>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.div>
    );
}
