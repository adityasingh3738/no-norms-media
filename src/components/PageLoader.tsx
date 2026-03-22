"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";

export default function PageLoader() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        // Ensure scroll is locked during load
        document.body.style.overflow = "hidden";

        const tl = gsap.timeline({
            onComplete: () => {
                document.body.style.overflow = "";
            }
        });

        tl.fromTo(
            ".loader-text",
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.1 }
        );

        tl.to(".loader-text", { opacity: 0, duration: 0.5, delay: 0.5, ease: "power2.inOut" });

        tl.to(".loader-overlay", {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut",
        });

    }, [mounted]);

    if (!mounted) return null;

    return (
        <div className="loader-overlay fixed inset-0 z-[9998] bg-background flex flex-col items-center justify-center text-foreground font-display font-bold">
            <div className="overflow-hidden">
                <h1 className="loader-text text-5xl md:text-7xl uppercase tracking-tighter">No Norms</h1>
            </div>
            <div className="overflow-hidden">
                <h1 className="loader-text text-5xl md:text-7xl uppercase tracking-tighter text-accent mt-2">Media</h1>
            </div>
        </div>
    );
}
