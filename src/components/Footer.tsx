"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 px-4 md:px-12">
            <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-2">Parrv Luthra</h2>
                <p className="text-neutral-400">Full Stack Developer & AI Engineer</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left">
                <div>
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">Contact</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="mailto:parrv.luthra2024@nst.rishihood.edu.in" className="text-neutral-300 hover:text-white transition-colors">
                                parrv.luthra2024@nst.rishihood.edu.in
                            </a>
                        </li>
                        <li>
                            <a href="tel:+919625789901" className="text-neutral-300 hover:text-white transition-colors">
                                +91 9625789901
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">Social</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-neutral-300 hover:text-white transition-colors">LinkedIn</a>
                        </li>
                        <li>
                            <a href="#" className="text-neutral-300 hover:text-white transition-colors">GitHub</a>
                        </li>
                        <li>
                            <a href="#" className="text-neutral-300 hover:text-white transition-colors">Codeforces</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="absolute bottom-4 left-0 w-full text-center text-neutral-600 text-sm">
                © {new Date().getFullYear()} Parrv Luthra. All rights reserved.
            </div>
        </div>
    );
}
