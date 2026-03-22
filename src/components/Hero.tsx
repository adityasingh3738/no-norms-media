"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 1.5 });
            tl.from(".hero-line", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power4.out",
            }).from(
                subRef.current,
                {
                    opacity: 0,
                    y: 20,
                    duration: 1,
                    ease: "power2.out",
                },
                "-=0.8"
            );

            gsap.to(".hero-bg", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            gsap.to([textRef.current, subRef.current], {
                opacity: 0,
                y: -50,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "center top",
                    scrub: true,
                }
            });

            // Mouse Parallax Effect
            const bg = document.querySelector(".hero-bg");
            const text = textRef.current;

            const mouseMove = (e: MouseEvent) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 30;
                const y = (e.clientY / window.innerHeight - 0.5) * 30;

                gsap.to(bg, {
                    x: -x * 1.5,
                    y: -y * 1.5,
                    duration: 1.5,
                    ease: "power2.out",
                });

                gsap.to(text, {
                    x: x,
                    y: y,
                    duration: 1.5,
                    ease: "power2.out",
                });
            };

            window.addEventListener("mousemove", mouseMove);
            return () => {
                window.removeEventListener("mousemove", mouseMove);
            };

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <div
                className="hero-bg absolute inset-0 z-0 bg-cover bg-center transform scale-[1.15]"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?q=80&w=2678&auto=format&fit=crop')",
                }}
            >
                <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            <div className="container relative z-10 px-6 mx-auto flex flex-col items-center justify-center text-center mt-20">
                <h1 ref={textRef} className="font-display font-bold uppercase tracking-tighter text-5xl md:text-8xl lg:text-9xl leading-[0.9] flex flex-col items-center">
                    <div className="overflow-hidden">
                        <span className="hero-line block">We Don't Follow</span>
                    </div>
                    <div className="overflow-hidden">
                        <span className="hero-line block text-accent mt-2">Norms.</span>
                    </div>
                    <div className="overflow-hidden">
                        <span className="hero-line block mt-4 text-3xl md:text-6xl lg:text-7xl">We Build Them.</span>
                    </div>
                </h1>
                <p ref={subRef} className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto tracking-wide">
                    An artist management company that represents bold, boundary-pushing creatives.
                </p>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce flex flex-col items-center opacity-50">
                <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
                <div className="w-[1px] h-12 bg-white" />
            </div>
        </section>
    );
}
