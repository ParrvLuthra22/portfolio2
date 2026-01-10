"use client";

import { motion } from "framer-motion";

export default function Experience() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 text-left">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight"
            >
                Experience
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-white/10 pl-8 ml-4 md:ml-0 space-y-12"
            >
                <div className="relative">
                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-white ring-4 ring-[#121212]" />
                    <h3 className="text-2xl font-bold text-white">Frontend & Automation Engineer Intern</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                        <span className="text-white font-medium">Hecta</span>
                        <span className="hidden md:inline text-neutral-600">•</span>
                        <span className="text-neutral-500">Noida, Uttar Pradesh</span>
                        <span className="hidden md:inline text-neutral-600">•</span>
                        <span className="text-neutral-500">May 2025 - July 2025</span>
                    </div>

                    <ul className="space-y-3 text-neutral-300 list-disc list-outside ml-4">
                        <li>
                            Automated the newspaper upload workflow, reducing manual effort by <span className="text-white font-semibold">80%</span>.
                        </li>
                        <li>
                            Implemented web scraping tools and OCR scripts for content extraction and categorization.
                        </li>
                        <li>
                            Enhanced website UI and analytics dashboards, improving data accuracy and responsiveness.
                        </li>
                        <li>
                            <span className="text-neutral-400 font-medium">Tech Stack:</span> Python, React, Selenium, OCR
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}
