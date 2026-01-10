"use client";

import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState, ReactNode, cloneElement, ReactElement } from "react";

interface ScrollyCanvasProps {
    children?: ReactNode;
}

export default function ScrollyCanvas({ children }: ScrollyCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const frameCount = 75; // 0 to 74

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgs: HTMLImageElement[] = [];

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = `/sequence/${i.toString().padStart(3, "0")}.webp`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setIsLoaded(true);
                }
            };
            imgs.push(img);
        }
        setImages(imgs);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

    const render = useCallback(
        (index: number) => {
            if (images[index]) {
                const canvas = canvasRef.current;
                const ctx = canvas?.getContext("2d");
                if (canvas && ctx) {
                    // Set canvas dimensions to match window (or container) high DPI
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;

                    const img = images[index];

                    // Object-fit: cover logic
                    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
                    const x = (canvas.width / 2) - (img.width / 2) * scale;
                    const y = (canvas.height / 2) - (img.height / 2) * scale;

                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
                }
            }
        },
        [images]
    );

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded) render(0);
    }, [isLoaded, render])

    useMotionValueEvent(currentIndex, "change", (latest) => {
        const floorIndex = Math.floor(latest);
        if (isLoaded) requestAnimationFrame(() => render(floorIndex));
    });

    return (
        <div ref={containerRef} className="h-[2000vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
                <canvas ref={canvasRef} className="block w-full h-full object-cover" />
                {children && cloneElement(children as ReactElement, { scrollYProgress })}
            </div>
        </div>
    );
}
