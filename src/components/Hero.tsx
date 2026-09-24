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

    const collageImages = [
        "/sarpdansh.jpg",
        "/parv.jpg",
        "/sicklot.jpg",
        "/dflacko.jpg",
        "/dhadkan.jpg",
        "/2raw.jpg",
        "/bigscratch.jpg",
        "/y2g.jpg",
        "/navyug.jpg",
        "/highborn.jpg"
    ];

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0c0b]"
        >
            <div className="hero-bg absolute inset-0 z-0 transform scale-[1.15]">
                <div className="absolute inset-0 flex flex-col justify-center gap-3 overflow-hidden bg-[#0b0c0b] opacity-65">
                    {[collageImages, [...collageImages].reverse()].map((row, rowIndex) => (
                        <div key={rowIndex} className={`hero-filmstrip flex w-max gap-3 ${rowIndex === 1 ? "hero-filmstrip-reverse" : ""}`}>
                            {[...row, ...row].map((src, imageIndex) => (
                                <div key={`${rowIndex}-${imageIndex}`} className="relative h-[30vh] w-[28vw] min-w-[220px] overflow-hidden border border-white/10 md:h-[34vh] md:w-[21vw]">
                                    <img src={src} alt="Artist background" className="h-full w-full object-cover grayscale contrast-125" />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Overlays to ensure text pops deeply */}
                <div className="absolute inset-0 bg-[#0b0c0b]/45 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0b] via-[#0b0c0b]/35 to-transparent z-10" />
            </div>

            <div className="container relative z-20 px-6 mx-auto flex flex-col items-center justify-center text-center mt-20">
                <h1 ref={textRef} className="font-display font-bold uppercase tracking-[-0.07em] text-5xl md:text-8xl lg:text-9xl leading-[0.82] flex flex-col items-center text-[#f4f0e8]">
                    <div className="overflow-hidden">
                        <span className="hero-line block">We Don't Follow</span>
                    </div>
                    <div className="overflow-hidden">
                        <span className="hero-line block text-[#f06a3d] mt-2">Norms.</span>
                    </div>
                    <div className="overflow-hidden">
                        <span className="hero-line block mt-4 text-3xl md:text-6xl lg:text-7xl">We Build Them.</span>
                    </div>
                </h1>
                <p ref={subRef} className="mt-8 text-lg md:text-xl text-[#f4f0e8]/75 max-w-2xl mx-auto tracking-wide">
                    An artist management company that represents bold, boundary-pushing creatives.
                </p>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce flex flex-col items-center opacity-50">
                <span className="text-xs uppercase tracking-widest mb-2 font-medium text-[#65745a]">Scroll to explore</span>
                <div className="w-[1px] h-12 bg-[#65745a]" />
            </div>
        </section>
    );
}
