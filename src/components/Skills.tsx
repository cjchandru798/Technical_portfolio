import { motion } from 'framer-motion';
import {
    SiPython, SiCplusplus, SiMysql, SiMongodb,
    SiJavascript, SiHtml5, SiCss3, SiDotnet, SiTypescript
} from 'react-icons/si';
import { FaJava, FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa';

const skillCategories = [
    {
        title: "Frontend Stack",
        skills: [
            { name: "React", icon: FaReact },
            { name: "JavaScript", icon: SiJavascript },
            { name: "TypeScript", icon: SiTypescript },
            { name: "HTML5", icon: SiHtml5 },
            { name: "CSS3", icon: SiCss3 },
        ]
    },
    {
        title: "Backend Services",
        skills: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "Java", icon: FaJava },
            { name: "Python", icon: SiPython },
            { name: ".NET", icon: SiDotnet },
            { name: "C++", icon: SiCplusplus },
        ]
    },
    {
        title: "DevOps & Data",
        skills: [
            { name: "MySQL", icon: SiMysql },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Docker", icon: FaDocker },
            { name: "Git", icon: FaGitAlt },
        ]
    }
];

export default function Skills() {
    return (
        <motion.section
            className="section-container pt-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="border-l-2 border-gray-900 pl-6 mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Technical Proficiency</h1>
                <p className="text-gray-500 font-mono text-sm">System capabilities & libraries</p>
            </div>

            <div className="space-y-12">
                {skillCategories.map((group, i) => (
                    <div key={i}>
                        <h3 className="font-bold text-lg text-gray-900 mb-6 uppercase tracking-wider">{group.title}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                            {group.skills.map((skill, s) => {
                                const Icon = skill.icon;
                                return (
                                    <div key={s} className="flex items-center gap-3 p-3 border border-gray-100 rounded bg-white hover:border-gray-300 transition-colors">
                                        <Icon className="text-gray-600" />
                                        <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>

        </motion.section>
    );
}
