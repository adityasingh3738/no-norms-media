"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const cursorDot = document.getElementById("cursor-dot");
        const cursorRing = document.getElementById("cursor-ring");
        if (!cursorDot || !cursorRing) return;

        gsap.set([cursorDot, cursorRing], { xPercent: -50, yPercent: -50 });

        const xToDot = gsap.quickTo(cursorDot, "x", { duration: 0.15, ease: "power3" });
        const yToDot = gsap.quickTo(cursorDot, "y", { duration: 0.15, ease: "power3" });

        const xToRing = gsap.quickTo(cursorRing, "x", { duration: 0.5, ease: "power3" });
        const yToRing = gsap.quickTo(cursorRing, "y", { duration: 0.5, ease: "power3" });

        const moveCursor = (e: MouseEvent) => {
            xToDot(e.clientX);
            yToDot(e.clientY);
            xToRing(e.clientX);
            yToRing(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("a, button, input-[type='submit'], [role='button'], .cursor-pointer")) {
                gsap.to(cursorRing, {
                    scale: 2.5,
                    backgroundColor: "var(--color-accent)",
                    borderColor: "transparent",
                    mixBlendMode: "normal",
                    duration: 0.3
                });
                gsap.to(cursorDot, { scale: 0, opacity: 0, duration: 0.3 });
            } else {
                gsap.to(cursorRing, {
                    scale: 1,
                    backgroundColor: "transparent",
                    borderColor: "#ffffff",
                    mixBlendMode: "difference",
                    duration: 0.3
                });
                gsap.to(cursorDot, { scale: 1, opacity: 1, duration: 0.3 });
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        document.body.classList.add("hide-cursor");

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            document.body.classList.remove("hide-cursor");
        };
    }, [mounted]);

    if (!mounted) return null;

    return (
        <>
            <div
                id="cursor-dot"
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999] hidden lg:block"
            />
            <div
                id="cursor-ring"
                className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/50 mix-blend-difference pointer-events-none z-[9998] hidden lg:block"
            />
        </>
    );
}
