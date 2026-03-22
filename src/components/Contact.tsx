"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [resultMsg, setResultMsg] = useState("");

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-elem", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");
        setResultMsg("");

        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", "71b1f18b-22b8-45ef-b842-bd5dab0911f0");
        formData.append("subject", "New Inquiry from No Norms Media Website");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                setResultMsg("Message sent successfully. We'll be in touch soon.");
                form.reset();
                setTimeout(() => {
                    setStatus("idle");
                    setResultMsg("");
                }, 5000);
            } else {
                setStatus("error");
                setResultMsg(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setResultMsg("Failed to send message. Please try again.");
        }
    };

    return (
        <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-background relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
                <div className="lg:w-1/2 contact-elem">
                    <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-6 leading-[0.9]">
                        Let's Build Something <br /><span className="text-accent">Unbreakable</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-md">
                        Whether you're an artist ready to shift culture or a brand looking to align with the new vanguard—we want to hear from you.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <p className="text-sm uppercase tracking-widest text-gray-500 font-medium mb-2">Location</p>
                            <p className="text-xl font-display uppercase tracking-wide">Noida, Uttar Pradesh<br />India</p>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-widest text-gray-500 font-medium mb-2">General Inquiries</p>
                            <a href="mailto:asmit@nonormsmedia.com" className="text-xl font-display uppercase tracking-wide hover:text-accent transition-colors cursor-none">asmit@nonormsmedia.com</a>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 contact-elem">
                    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                        <div className="flex gap-6 border-b border-white/20 pb-4">
                            <label className="flex items-center gap-3 cursor-none group">
                                <input type="radio" name="Identity" value="Artist" defaultChecked className="hidden peer" />
                                <div className="w-4 h-4 rounded-full border border-gray-500 peer-checked:border-accent peer-checked:border-[5px] transition-all group-hover:border-white"></div>
                                <span className="text-sm uppercase tracking-wider font-medium text-gray-500 peer-checked:text-white transition-colors">I'm an Artist</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-none group">
                                <input type="radio" name="Identity" value="Brand" className="hidden peer" />
                                <div className="w-4 h-4 rounded-full border border-gray-500 peer-checked:border-accent peer-checked:border-[5px] transition-all group-hover:border-white"></div>
                                <span className="text-sm uppercase tracking-wider font-medium text-gray-500 peer-checked:text-white transition-colors">I'm a Brand</span>
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="Name"
                                placeholder="YOUR NAME"
                                className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg font-display uppercase tracking-wider focus:outline-none focus:border-accent transition-colors peer placeholder-transparent cursor-none"
                                required
                            />
                            <label htmlFor="name" className="absolute left-0 -top-2 text-xs font-medium uppercase tracking-widest text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-600 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-accent cursor-text">Your Name</label>
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="Email"
                                placeholder="YOUR EMAIL"
                                className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg font-display uppercase tracking-wider focus:outline-none focus:border-accent transition-colors peer placeholder-transparent cursor-none"
                                required
                            />
                            <label htmlFor="email" className="absolute left-0 -top-2 text-xs font-medium uppercase tracking-widest text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-600 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-accent cursor-text">Your Email</label>
                        </div>

                        <div className="relative">
                            <textarea
                                id="message"
                                name="Message"
                                placeholder="YOUR MESSAGE"
                                rows={4}
                                className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg font-display uppercase tracking-wider focus:outline-none focus:border-accent transition-colors resize-none peer placeholder-transparent cursor-none"
                                required
                            />
                            <label htmlFor="message" className="absolute left-0 -top-2 text-xs font-medium uppercase tracking-widest text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-600 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-accent cursor-text">Your Message</label>
                        </div>

                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
                            <MagneticButton>
                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="bg-accent text-[#0A0A0A] font-display font-bold uppercase tracking-widest px-10 py-5 hover:bg-white transition-colors cursor-none w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === "submitting" ? "Sending..." : "Submit Message"}
                                </button>
                            </MagneticButton>

                            {resultMsg && (
                                <span className={`text-sm font-medium tracking-wide ${status === "success" ? "text-green-400" : "text-red-400"}`}>
                                    {resultMsg}
                                </span>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
