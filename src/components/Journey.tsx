
import { motion } from 'framer-motion';

const journeyData = [
    {
        year: "Dec 2025 – Present",
        title: "Software Developer Intern",
        company: "Flipflex LLP, Kanchipuram",
        description: "Working on real-world software development tasks. Contributing to application development and system improvements in the Development Department.",
        type: "work",
        icon: "💼"
    },
    {
        year: "Jun 2025 – Jul 2025",
        title: "Full Stack Developer Intern",
        company: "Conprg Technologies OPC Pvt. Ltd., Chennai",
        description: "Built and integrated full-stack features. Worked with frontend and backend technologies in a production environment.",
        type: "work",
        icon: "💻"
    },
    {
        year: "2022 – 2026",
        title: "B.Tech – Information Technology",
        company: "Alpha College of Engineering, Tirumazhisai",
        description: "Current CGPA: 8.37. Focusing on core computer science subjects and advanced technology electives.",
        type: "education",
        icon: "🎓"
    },
    {
        year: "2020 – 2022",
        title: "Higher Secondary Education (HSC)",
        company: "Sri S.B. Vijaya Reddiar Matric Hr. Sec. School",
        description: "Specialized in Computer Science & Mathematics. Scored 73%.",
        type: "education",
        icon: "🏫"
    },
    {
        year: "2020",
        title: "Secondary School Leaving Certificate (SSLC)",
        company: "Sri S.B. Vijaya Reddiar Matric Hr. Sec. School",
        description: "Completed secondary education with 83%.",
        type: "education",
        icon: "📚"
    }
];

export default function Journey() {
    return (
        <motion.div
            className="page-transition min-h-screen py-20 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
                    >
                        My <span className="text-blue-600">Journey</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-slate-500 max-w-2xl mx-auto"
                    >
                        A timeline of my professional growth and educational milestones.
                    </motion.p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-100 via-purple-100 to-slate-100 rounded-full"></div>

                    <div className="space-y-12">
                        {journeyData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Spacer for desktop alternating layout */}
                                <div className="hidden md:block flex-1"></div>

                                {/* Timeline Node */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-blue-50 z-10 shadow-sm">
                                    <span className="text-xl">{item.icon}</span>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 ml-16 md:ml-0">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className={`bg-white p-6 rounded-2xl border border-slate-100 shadow-xl relative group ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                                            }`}
                                    >
                                        <div className={`absolute top-6 ${index % 2 === 0
                                            ? "left-0 md:right-auto md:-left-2 md:rotate-45 hidden md:block"
                                            : "left-0 md:-left-2 rotate-45"
                                            } w-4 h-4 bg-white border-b border-l border-slate-100`}>
                                        </div>

                                        <span className="inline-block px-3 py-1 bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                                            {item.year}
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-800 mb-1">
                                            {item.title}
                                        </h3>
                                        <div className="text-blue-600 font-medium mb-4 text-sm">
                                            {item.company}
                                        </div>
                                        <p className="text-slate-500 leading-relaxed text-sm">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
