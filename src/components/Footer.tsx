import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="w-full py-8 border-t border-gray-100 bg-white mt-auto">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-400 font-mono">
                    © {new Date().getFullYear()} Hemachandiran. All rights reserved.
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/cjchandru798" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://linkedin.com/in/hemachandiran-a-242527300" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://wa.me/9962098084" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                        <FaWhatsapp size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
