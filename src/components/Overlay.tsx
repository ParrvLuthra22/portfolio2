"use client";

import { MotionValue, motion, useTransform, useMotionValue } from "framer-motion";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";

interface OverlayProps {
    scrollYProgress?: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    const defaultProgress = useMotionValue(0);
    const progress = scrollYProgress || defaultProgress;

    // 1. Hero Title [0 - 0.15]
    const opacityHero = useTransform(progress, [0, 0.15], [1, 0]);
    const scaleHero = useTransform(progress, [0, 0.15], [1, 0.8]);
    const pointerHero = useTransform(progress, (v) => v < 0.15 ? "auto" : "none");

    // 2. Hero Bio 1 [0.15 - 0.25]
    const opacityBio1 = useTransform(progress, [0.15, 0.20, 0.25], [0, 1, 0]);
    const yBio1 = useTransform(progress, [0.15, 0.20, 0.25], [50, 0, -50]);

    // 3. Hero Bio 2 [0.25 - 0.35]
    const opacityBio2 = useTransform(progress, [0.25, 0.30, 0.35], [0, 1, 0]);
    const yBio2 = useTransform(progress, [0.25, 0.30, 0.35], [50, 0, -50]);

    // 4. About (Education) [0.35 - 0.50]
    const opacityAbout = useTransform(progress, [0.35, 0.42, 0.50], [0, 1, 0]);
    const pointerAbout = useTransform(progress, (v) => (v >= 0.35 && v <= 0.50) ? "auto" : "none");

    // 5. Experience [0.50 - 0.65]
    const opacityExp = useTransform(progress, [0.50, 0.57, 0.65], [0, 1, 0]);
    const pointerExp = useTransform(progress, (v) => (v >= 0.50 && v <= 0.65) ? "auto" : "none");

    // 6. Projects [0.65 - 0.85]
    const opacityProj = useTransform(progress, [0.65, 0.70, 0.80, 0.85], [0, 1, 1, 0]);
    const pointerProj = useTransform(progress, (v) => (v >= 0.65 && v <= 0.85) ? "auto" : "none");

    // 7. Footer [0.85 - 1.0]
    const opacityFooter = useTransform(progress, [0.85, 0.90, 1.0], [0, 1, 1]);
    const pointerFooter = useTransform(progress, (v) => v >= 0.85 ? "auto" : "none");


    return (
        <div className="absolute inset-0 w-full h-full z-10">
            {/* 1. Hero Title */}
            <motion.div
                style={{ opacity: opacityHero, scale: scaleHero, pointerEvents: pointerHero }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-4"
            >
                <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 mb-4 tracking-tighter">
                    Parrv Luthra
                </h1>
                <p className="text-xl md:text-2xl text-neutral-400">Full Stack Developer & AI Engineer.</p>
            </motion.div>

            {/* 2. Hero Bio 1 */}
            <motion.div
                style={{ opacity: opacityBio1, y: yBio1 }}
                className="absolute inset-0 flex items-center justify-start p-12 md:p-24 pointer-events-none"
            >
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Full Stack <span className="text-orange-500">Engineer</span>.
                    </h2>
                    <p className="text-lg text-neutral-300">
                        Aspiring Full Stack Developer skilled in building scalable web applications with React, Express.js, and RESTful APIs.
                    </p>
                </div>
            </motion.div>

            {/* 3. Hero Bio 2 */}
            <motion.div
                style={{ opacity: opacityBio2, y: yBio2 }}
                className="absolute inset-0 flex items-center justify-end p-12 md:p-24 text-right pointer-events-none"
            >
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        AI/ML <span className="text-orange-500">Enthusiast</span>.
                    </h2>
                    <p className="text-lg text-neutral-300">
                        Actively experimenting with artificial intelligence.
                    </p>
                </div>
            </motion.div>

            {/* 4. About */}
            <motion.div
                style={{ opacity: opacityAbout, pointerEvents: pointerAbout }}
                className="absolute inset-0 flex items-center justify-center pt-20"
            >
                <About />
            </motion.div>

            {/* 5. Experience */}
            <motion.div
                style={{ opacity: opacityExp, pointerEvents: pointerExp }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Experience />
            </motion.div>

            {/* 6. Projects */}
            <motion.div
                style={{ opacity: opacityProj, pointerEvents: pointerProj }}
                className="absolute inset-0 flex items-center justify-center pt-12"
            >
                <Projects />
            </motion.div>

            {/* 7. Footer */}
            <motion.div
                style={{ opacity: opacityFooter, pointerEvents: pointerFooter }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Footer />
            </motion.div>
        </div>
    );
}
