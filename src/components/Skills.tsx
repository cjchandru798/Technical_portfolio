
import { motion } from 'framer-motion';
import {
    SiPython, SiJavascript, SiHtml5, SiCss3, SiTypescript,
    SiReact, SiNodedotjs, SiMongodb, SiMysql, SiDocker, SiGit,
    SiPostman, SiGooglecloud, SiRender, SiVercel, SiNetlify,
    SiPostgresql, SiSwagger, SiFirebase, SiSpringboot
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skillMap = {
    Frontend: [
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: SiCss3, color: "text-blue-600" },
    ],
    Backend: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Java", icon: FaJava, color: "text-red-500" },
        { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
        { name: "Python", icon: SiPython, color: "text-yellow-500" },
    ],
    Database: [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
        { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
    ],
    Deployment: [
        { name: "Google Cloud", icon: SiGooglecloud, color: "text-blue-500" },
        { name: "Vercel", icon: SiVercel, color: "text-black" },
        { name: "Netlify", icon: SiNetlify, color: "text-cyan-500" },
        { name: "Render", icon: SiRender, color: "text-purple-500" },
    ],
    Tools: [
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        { name: "Docker", icon: SiDocker, color: "text-blue-500" },
        { name: "Postman", icon: SiPostman, color: "text-orange-500" },
        { name: "Swagger", icon: SiSwagger, color: "text-green-600" },
    ]
};

export default function Skills() {
    return (
        <motion.div
            className="page-transition min-h-screen py-20 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
                    >
                        Technical <span className="text-blue-600">Ecosystem</span>
                    </motion.h1>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        A curated stack of technologies I use to build scalable, performant, and accessible applications.
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Core Stack: Frontend + Backend */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {['Frontend', 'Backend'].map((category, idx) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl"
                            >
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                                    {category}
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                    {skillMap[category as keyof typeof skillMap].map((skill) => (
                                        <div key={skill.name} className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-slate-50 transition-colors group">
                                            <div className={`text-4xl ${skill.color} transform group-hover:scale-110 transition-transform duration-300`}>
                                                <skill.icon />
                                            </div>
                                            <span className="font-semibold text-slate-700 text-sm">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Deployment Pipeline - Redesigned Light Theme */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white p-10 rounded-3xl shadow-lg border border-white relative overflow-hidden"
                    >
                        {/* Soft Background Blobs */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -mr-32 -mt-32 opacity-60"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl -ml-32 -mb-32 opacity-60"></div>

                        <h3 className="text-2xl font-bold text-slate-800 mb-12 flex items-center justify-center md:justify-start gap-3 relative z-10">
                            <span className="text-2xl">☁️</span> Deployment & Cloud
                        </h3>

                        <div className="relative z-10">
                            {/* Dotted Connection Line */}
                            <div className="hidden md:block absolute top-[45%] left-10 right-10 h-0.5 border-t-2 border-dashed border-slate-300 -z-10"></div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {skillMap.Deployment.map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: i * 0.5
                                        }}
                                        className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-4 group hover:shadow-md transition-shadow"
                                    >
                                        <div className={`text-5xl ${skill.color} transform group-hover:scale-110 transition-transform duration-300`}>
                                            <skill.icon />
                                        </div>
                                        <span className="text-slate-600 font-bold text-sm">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Database & Tools */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Database */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg md:col-span-1"
                        >
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="text-2xl">🗄️</span> Database
                            </h3>
                            <div className="space-y-4">
                                {skillMap.Database.map((skill) => (
                                    <div key={skill.name} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                                        <div className={`text-2xl ${skill.color}`}>
                                            <skill.icon />
                                        </div>
                                        <span className="font-bold text-slate-700">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tools Badge Cloud */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-slate-50 p-8 rounded-3xl border border-slate-200/50 shadow-inner md:col-span-2"
                        >
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="text-2xl">🛠️</span> Tools & Workflow
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {skillMap.Tools.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 cursor-default"
                                    >
                                        <span className={`text-xl ${skill.color}`}>
                                            <skill.icon />
                                        </span>
                                        <span className="font-bold text-slate-600">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}
