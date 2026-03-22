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
        <section id="about" className="py-24 md:py-32 bg-[#111] border-y border-white/5 overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="about-text">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tighter leading-tight mb-8">
                            We <span className="text-gray-500">break</span> the mold.<br />
                            Then we <span className="text-accent max-md:text-accent" style={{ WebkitTextStroke: '1px var(--color-accent)', color: 'transparent' }}>redefine</span> it.
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            No Norms Media isn't just a management agency. We are a cultural powerhouse dedicated to amplifying the voices of those who dare to be different.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            Founded on the belief that true art cannot be confined, we provide the infrastructure, strategy, and creative direction for artists to build legacy, not just hype.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed font-medium">
                            We proudly collaborate and have worked with prominent artists like <span className="text-white font-bold">Badshah, Karma, Panther, Ikka, and Bella.</span>
                        </p>
                    </div>

                    <div className="flex flex-col gap-8 md:gap-12 pl-0 lg:pl-12">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <div className="text-5xl md:text-7xl font-display font-bold text-accent mb-2">
                                    <span ref={(el) => { if (el) countersRef.current[0] = el; }} data-target="100">0</span>+
                                </div>
                                <p className="text-sm uppercase tracking-widest text-gray-400 font-medium">Songs Executed</p>
                            </div>
                            <div>
                                <div className="text-5xl md:text-7xl font-display font-bold text-accent mb-2">
                                    <span ref={(el) => { if (el) countersRef.current[1] = el; }} data-target="50">0</span>+
                                </div>
                                <p className="text-sm uppercase tracking-widest text-gray-400 font-medium">Songs Marketed</p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/10 mt-4">
                            <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 uppercase tracking-wide">
                                India Wide
                            </div>
                            <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-4 uppercase tracking-wide">
                                Reach
                            </div>
                            <p className="text-sm md:text-base uppercase tracking-widest text-gray-400 font-medium">Delivering impact from coast to coast.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-[110%] -ml-[5%] overflow-visible bg-accent text-[#0A0A0A] py-6 shadow-2xl -rotate-2">
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
