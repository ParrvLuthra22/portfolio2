"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="relative z-10 bg-[#121212] py-24 px-4 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Education Column */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight"
                    >
                        Education
                    </motion.h2>

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-white">Bachelor of Technology (AI)</h3>
                                <span className="text-sm text-neutral-500">2024 - 2028</span>
                            </div>
                            <p className="text-neutral-200 mb-2">Newton School of Technology, Rishihood University</p>

                        </motion.div>


                    </div>
                </div>

                {/* Skills Column */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight"
                    >
                        Skills & Certifications
                    </motion.h2>

                    <div className="space-y-8">
                        <motion.div className="space-y-4">
                            <h3 className="text-lg font-semibold text-neutral-300 uppercase tracking-wider">Languages & Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {["C++", "JavaScript", "Python", "SQL", "HTML/CSS", "PostgreSQL", "React", "Node.js", "Express", "Tailwind"].map(skill => (
                                    <span key={skill} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div className="space-y-4">
                            <h3 className="text-lg font-semibold text-neutral-300 uppercase tracking-wider">Achievements</h3>
                            <ul className="space-y-3 text-neutral-400">

                                <li className="flex gap-3">
                                    <span className="text-yellow-500">★</span>
                                    <span>Rank 1, National French Olympiad (2017)</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-yellow-500">★</span>
                                    <span>Solved 313+ LeetCode problems</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
