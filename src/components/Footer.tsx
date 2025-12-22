import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="w-full py-8 border-t border-gray-100 bg-white mt-auto">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-400 font-mono">
                    © {new Date().getFullYear()} Hemachandiran. All rights reserved.
                </div>

                <div className="flex gap-6">
                    {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
                        <a key={i} href="#" className="text-gray-400 hover:text-black transition-colors">
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
