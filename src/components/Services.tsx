"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Megaphone, Calendar, Users, PenTool, Music } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
    { id: 1, title: "Talent Management", icon: <Users size={24} />, desc: "Full-service career roadmap, strategy, and daily operations for artists and creators." },
    { id: 2, title: "Brand Partnerships", icon: <Briefcase size={24} />, desc: "Securing and negotiating high-impact collaborations with global brands." },
    { id: 3, title: "Tour & Event Booking", icon: <Calendar size={24} />, desc: "Global touring strategies, festival routing, and custom live event production." },
    { id: 4, title: "PR & Media", icon: <Megaphone size={24} />, desc: "Narrative building, press campaigns, and crisis management across all media." },
    { id: 5, title: "Song Marketing", icon: <Music size={24} />, desc: "Strategic music release campaigns, digital ad strategies, playlisting, and algorithmic growth." },
    { id: 6, title: "Creative Direction", icon: <PenTool size={24} />, desc: "Visual identity, content strategy, and artistic vision alignment." },
];

export default function Services() {
    const [activeId, setActiveId] = useState<number | null>(1);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".service-item", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-background text-foreground relative z-10">
            <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/3">
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6">What We <span className="text-accent">Do</span></h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        We don't offer standard packages. Every artist receives a bespoke blueprint designed to break through the noise and build sustainable cultural impact.
                    </p>
                </div>

                <div className="lg:w-2/3 flex flex-col gap-4">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`service-item border-b border-white/10 overflow-hidden transition-all duration-500 ${activeId === service.id ? 'pb-8' : 'pb-4'}`}
                        >
                            <button
                                className="w-full flex items-center justify-between text-left py-4 focus:outline-none group cursor-none"
                                onClick={() => setActiveId(activeId === service.id ? null : service.id)}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`p-4 rounded-full transition-colors duration-300 ${activeId === service.id ? 'bg-accent text-[#0A0A0A]' : 'bg-[#111] text-gray-400 group-hover:text-white group-hover:bg-[#222]'}`}>
                                        {service.icon}
                                    </div>
                                    <h3 className={`text-2xl md:text-3xl font-display font-bold uppercase transition-colors duration-300 ${activeId === service.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                                        {service.title}
                                    </h3>
                                </div>
                                <div className={`text-accent transform transition-transform duration-300 text-xl ${activeId === service.id ? 'rotate-180' : ''}`}>
                                    ▼
                                </div>
                            </button>

                            <div
                                className={`grid transition-all duration-500 ease-in-out pl-[72px] md:pl-[88px] ${activeId === service.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <p className="text-gray-400 text-lg leading-relaxed pt-2">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
