import { motion } from 'framer-motion';
import {
    SiPython, SiJavascript, SiHtml5, SiCss3, SiTypescript,
    SiReact, SiNodedotjs, SiMongodb, SiMysql, SiDocker, SiGit
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skills = [
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Python", icon: SiPython, color: "text-yellow-500" },
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-600" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "Git", icon: SiGit, color: "text-orange-600" },
];

export default function Skills() {
    return (
        <motion.div
            className="page-transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="mb-12 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4">
                    <span className="text-gray-400">import</span> <span className="text-blue-600">Skills</span> <span className="text-gray-400">from</span> <span className="text-green-600">'./brain'</span>;
                </h1>
                <p className="text-gray-500 font-mono text-sm">Tech stack and tools I work with.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skills.map((skill, i) => {
                    const Icon = skill.icon;
                    return (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05, borderColor: "rgba(0,0,0,0.1)" }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all cursor-default"
                        >
                            <div className={`text-4xl mb-4 ${skill.color}`}>
                                <Icon />
                            </div>
                            <span className="font-medium text-gray-700">{skill.name}</span>
                        </motion.div>
                    )
                })}
            </div>
        </motion.div>
    );
}
