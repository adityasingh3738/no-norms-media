"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MagneticButton({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const px = 24;
        const py = 24;

        const onMouseMove = (e: MouseEvent) => {
            const { left, top, width, height } = button.getBoundingClientRect();
            const cx = left + width / 2;
            const cy = top + height / 2;
            const dx = (e.clientX - cx) / (width / 2);
            const dy = (e.clientY - cy) / (height / 2);

            gsap.to(button, {
                x: dx * px,
                y: dy * py,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const onMouseLeave = () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: "elastic.out(1, 0.3)",
            });
        };

        button.addEventListener("mousemove", onMouseMove);
        button.addEventListener("mouseleave", onMouseLeave);

        return () => {
            button.removeEventListener("mousemove", onMouseMove);
            button.removeEventListener("mouseleave", onMouseLeave);
        };
    }, []);

    return (
        <div ref={buttonRef} className={`inline-block ${className}`}>
            {children}
        </div>
    );
}
