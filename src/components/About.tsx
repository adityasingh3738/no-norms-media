"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-text", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            countersRef.current.forEach((counter) => {
                if (!counter) return;
                const target = parseInt(counter.getAttribute("data-target") || "0", 10);

                gsap.to(counter, {
                    scrollTrigger: {
                        trigger: counter,
                        start: "top 90%",
                    },
                    innerHTML: target,
                    duration: 2,
                    snap: { innerHTML: 1 },
                    ease: "power2.out",
                    onUpdate: function () {
                        counter.innerHTML = Math.ceil(Number(this.targets()[0].innerHTML)).toString();
                    }
                });
            });

            gsap.to(".marquee-inner", {
                xPercent: -50,
                ease: "none",
                duration: 15,
                repeat: -1,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" className="py-24 md:py-32 bg-[#65745a] text-[#f4f0e8] border-y border-[#1b1b18]/10 overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="about-text">
                        <p className="section-kicker !text-[#f06a3d] mb-4">02 / The point of view</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tighter leading-tight mb-8">
                            We <span className="text-[#f06a3d]">break</span> the mold.<br />
                            Then we <span className="text-[#f4f0e8]" style={{ WebkitTextStroke: '1px #f4f0e8', color: 'transparent' }}>redefine</span> it.
                        </h2>
                        <p className="text-[#f4f0e8]/75 text-lg md:text-xl leading-relaxed mb-6">
                            No Norms Media is a management and marketing company founded by <a href="https://www.instagram.com/asmitonweb/" target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:text-white underline decoration-accent/50 underline-offset-4 transition-colors cursor-none pointer-events-auto">Asmit</a> (Aditya Singh) in 2024. Our vision is to bring the best talent under one roof and build a platform where artists can create, grow, and shape the future of Indian Hip Hop.
                        </p>
                        <p className="text-[#f4f0e8]/75 text-lg md:text-xl leading-relaxed mb-6">
                            We represent a diverse roster of genre-breaking artists, working across artist management, music marketing, creative strategy, campaigns, and artist development.
                        </p>
                        <p className="text-[#f4f0e8]/75 text-lg md:text-xl leading-relaxed mb-6">
                            Our roster includes <strong className="text-white">Parv, SickLot, Dflacko, Dhadkan, SarpDansh, 2Raw, Big Scratch, Y2G, HighBorn, and Navyug.</strong>
                        </p>
                        <p className="text-[#f4f0e8]/75 text-lg md:text-xl leading-relaxed mb-6">
                            We also curated <strong className="text-white">‘The Takeover Tape’</strong> — a pioneering project that brought together explosive underground talent with established names including <strong className="text-white">Badshah, Ikka, Karma, Panther, Yungsta, Bella, Frappe Ash, Bharg, and MC Square.</strong>
                        </p>
                        <p className="text-[#f4f0e8]/90 text-lg md:text-xl leading-relaxed font-medium">
                            At No Norms, we work at the intersection of <strong className="text-white">artists, music, culture, and marketing</strong>—building careers, campaigns, and projects designed to leave a lasting impact.
                        </p>
                    </div>

                    <div className="flex flex-col gap-8 md:gap-12 pl-0 lg:pl-12">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <div className="text-5xl md:text-7xl font-display font-bold text-[#f06a3d] mb-2">
                                    <span ref={(el) => { if (el) countersRef.current[0] = el; }} data-target="100">0</span>+
                                </div>
                                <p className="text-sm uppercase tracking-widest text-[#f4f0e8]/60 font-medium">Songs Executed</p>
                            </div>
                            <div>
                                <div className="text-5xl md:text-7xl font-display font-bold text-[#f06a3d] mb-2">
                                    <span ref={(el) => { if (el) countersRef.current[1] = el; }} data-target="50">0</span>+
                                </div>
                                <p className="text-sm uppercase tracking-widest text-[#f4f0e8]/60 font-medium">Songs Marketed</p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-[#f4f0e8]/20 mt-4">
                            <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 uppercase tracking-wide">
                                India Wide
                            </div>
                            <div className="text-4xl md:text-5xl font-display font-bold text-[#f06a3d] mb-4 uppercase tracking-wide">
                                Reach
                            </div>
                            <p className="text-sm md:text-base uppercase tracking-widest text-[#f4f0e8]/60 font-medium">Delivering impact from coast to coast.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-[110%] -ml-[5%] overflow-visible bg-[#f06a3d] text-[#1b1b18] py-6 shadow-2xl -rotate-2">
                <div className="marquee-inner flex whitespace-nowrap font-display font-bold text-4xl md:text-6xl uppercase tracking-tighter w-fit">
                    {[...Array(10)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span className="mx-8">We Don't Follow Norms</span>
                            <span className="mx-8 text-black/40">✦</span>
                            <span className="mx-8" style={{ WebkitTextStroke: '1px #0A0A0A', color: 'transparent' }}>We Build Them</span>
                            <span className="mx-8 text-black/40">✦</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
