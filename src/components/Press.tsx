"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pressLogos = [
    "Rolling Stone", "Billboard", "Pitchfork", "NME", "Complex", "FADER", "Vogue", "GQ",
];

export default function Press() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(sectionRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                opacity: 0,
                duration: 1,
            });

            gsap.to(".logo-strip-inner", {
                xPercent: -50,
                ease: "none",
                duration: 20,
                repeat: -1,
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-[#0A0A0A] border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">As Featured In</p>
            </div>

            <div className="relative w-full overflow-hidden flex">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

                <div className="logo-strip-inner flex items-center w-max opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-none">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center">
                            {pressLogos.map((logo, index) => (
                                <div key={`${i}-${index}`} className="mx-12 text-3xl md:text-5xl font-display font-bold uppercase tracking-widest text-white">
                                    {logo}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
