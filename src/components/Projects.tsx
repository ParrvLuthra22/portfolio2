"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "TuneMate",
        description: "Music-based dating application that matches users based on Spotify listening habits and suggests concert dates. Features real-time chat with Socket.io and collaborative playlist creation.",
        tags: ["Nov-Dec 2024", "React", "Node.js", "Socket.io", "Spotify API"],
        links: { demo: "https://music-match-bay.vercel.app/", github: "https://github.com/ParrvLuthra22/musicMatch" }
    },
    {
        title: "Aayrish AI",
        description: "Cross-platform AI assistant for automating system and web tasks. Integrated voice interface, PyQt6 GUI, and NLP models for conversational interactions using asynchronous programming.",
        tags: ["May 2025", "Python", "PyQt6", "NLP", "AsyncIO"],
        links: { demo: "https://drive.google.com/file/d/1C74ye46t0seS3kq8oCgCTmahsE79RGgb/view?usp=sharing", github: "https://github.com/ParrvLuthra22/AayrishAI" }
    },
    {
        title: "UpSosh",
        description: "Full-stack event booking platform with complete authentication, real-time management dashboard, and DodoPayments integration. Features RESTful API with PostgreSQL optimization.",
        tags: ["Dec 2025", "PostgreSQL", "Next.js", "Auth"],
        links: { demo: "https://www.upsosh.app/", github: "https://github.com/ParrvLuthra22/upSosh" }
    },
    {
        title: "FoodKhoj",
        description: "Responsive food delivery frontend with real-time order tracking and interactive map-based UI using Leaflet. Visualization of delivery routes.",
        tags: ["April 2025", "React", "Leaflet", "Real-time"],
        links: { demo: "https://food-khoj.vercel.app/", github: "https://github.com/ParrvLuthra22/FoodKhoj" }
    },
];

export default function Projects() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 text-left">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight"
            >
                Selected Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-colors duration-300 overflow-hidden flex flex-col justify-between"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-orange-200 transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-3">
                                    {project.links.github && project.links.github !== "#" && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-neutral-400 hover:text-white transition-colors"
                                            aria-label="View Source Code"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.links.demo && project.links.demo !== "#" && (
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-neutral-400 hover:text-white transition-colors"
                                            aria-label="View Live Demo"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-neutral-400 mb-6 leading-relaxed text-sm">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/70 border border-white/5"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
