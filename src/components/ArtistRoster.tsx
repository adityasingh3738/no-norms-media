"use client";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, Music } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const artists = [
    {
        id: 1,
        name: "SarpDansh",
        bio: "SarpDansh is a new age rap artist, mostly known for his melo-rap and melody tracks, his popular works include metamorphosis., sabr, pills on my mind. He has worked with artists like Ikka, Fotty Seven & shares credits with AR Rahman.",
        image: "/sarpdansh.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&auto=format&fit=crop&q=60",
        spotify: "https://open.spotify.com/artist/2EnfibPipqcjvyRiNrbHTN",
        instagram: "https://www.instagram.com/sarpdansh/",
        stats: ["200K+ Monthly Listeners"]
    },
    {
        id: 2,
        name: "Parv",
        bio: "Parv is an young rapper from Moradabad, Uttar Pradesh. He is one of the earliest members of the No Norms roaster, he has worked with artists like Karma, Badshah, Fotty Seven and is a top contestant in MTV Hustle season 5.",
        image: "/parv.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
        spotify: "https://open.spotify.com/artist/350WWIB7gR7evrXTWmc1pj",
        instagram: "https://www.instagram.com/parv_music/",
        stats: ["500K+ Monthly Listeners"]
    },
    {
        id: 3,
        name: "SickLot",
        bio: "SickLot is an young rapper from Noida, Uttar Pradesh. He initially got popular by his track 'Dhaaga' which was in top virals songs India at 2nd place in 2023, he later collaborated with Badshah on his track Gustakhi. He ia also the first wildcard contestant in the history of MTV Hustle.",
        image: "/sicklot.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60",
        spotify: "https://open.spotify.com/artist/2NYWuAn8LPsebNkudbSLA6",
        instagram: "https://www.instagram.com/sicklotmusic/",
        stats: ["500K+ Monthly Listeners"]
    },
    {
        id: 5,
        name: "2Raw",
        bio: "2Raw is a rap duo based in Dwarka, Delhi. They represent street style rap in different genres of HipHop. The duo consists of Bhaskar Mishra (Dflacko) and Yuvraj Dharia (Yuvrxj).",
        image: "/2raw.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
        spotify: "https://open.spotify.com/artist/5oUQFkXemNEsbIdmZmwWmW",
        instagram: "https://www.instagram.com/2rraaww/",
        stats: ["100K+ Monthly Listeners"]
    },
    {
        id: 6,
        name: "Navyug",
        bio: "Navyug is a multi-genre record producer and DJ. He shares credits with artists like MC Square, Ikka.",
        image: "/navyug.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&auto=format&fit=crop&q=60",
        spotify: "https://open.spotify.com/artist/4adwj9Z1zcgF7Os33tzs4Q",
        instagram: "https://www.instagram.com/navyugmusic/",
        stats: ["100K+ Monthly Listeners"]
    },
    {
        id: 7,
        name: "Dflacko",
        bio: "Dflacko aka Bhaskar Mishra is a part of the rap duo 2Raw based in Dwarka, Delhi. He has been a top contestant in MTV Hustle 5 and has made hits like 'Dwarka Mor', 'No Replay Value'.",
        image: "/dflacko.jpg",
        fallbackImage: "/dflacko.jpg",
        spotify: "#",
        instagram: "#",
        stats: ["500K+ Monthly Listeners"]
    },
    {
        id: 8,
        name: "Dhadkan",
        bio: "Dhadkan from Haryana is the winner of SpitDope Standout Season 1 and one of the top contesetants in MTV Hustle 5. He has made hits like 'Fan Ho Gayi' & 'Culture'.",
        image: "/dhadkan.jpg",
        fallbackImage: "/dhadkan.jpg",
        spotify: "#",
        instagram: "#",
        stats: ["500K+ Monthly Listeners"]
    },
    {
        id: 9,
        name: "HighBorn",
        bio: "HighBorn is a melo-rapper/singer from Jammu, he has worked with King on 'Tera Hua Na Mai Kabhi'.",
        image: "/highborn.jpg",
        fallbackImage: "/highborn.jpg",
        spotify: "#",
        instagram: "#",
        stats: ["100K+ Monthly Listeners"]
    },
    {
        id: 10,
        name: "Y2G",
        bio: "Y2G (Yahan Do Gham) is a rap artist from Ludhiana, Punjab. He has been making music since 2021 and recently had his viral hit 'Barsati'.",
        image: "/y2g.jpg",
        fallbackImage: "/y2g.jpg",
        spotify: "#",
        instagram: "#",
        stats: ["100K+ Monthly Listeners"]
    },
    {
        id: 11,
        name: "Big Scratch",
        bio: "Big Scratch is a rapper from Kolkata, West Bengal who has been popular for his tracks like Pills On My Mind, Chalte Raho, Khaad and Akela. He had also been a popular creator in the Desi HipHop community before he left content creation to make music.",
        image: "/bigscratch.jpg",
        fallbackImage: "/bigscratch.jpg",
        spotify: "#",
        instagram: "#",
        stats: ["150K+ Monthly Listeners"]
    }
];

const rosterOrder = ["Parv", "SickLot", "Dflacko", "Dhadkan", "SarpDansh", "2Raw", "Big Scratch", "Y2G", "Navyug", "HighBorn"];

export default function ArtistRoster() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const [selectedArtist, setSelectedArtist] = useState<(typeof artists)[number] | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".artist-card", {
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            });

            gsap.from(".roster-header", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
            });

            // 3D Tilt Effect Setup
            const cards = gsap.utils.toArray(".artist-card") as HTMLElement[];
            cards.forEach((card) => {
                card.addEventListener("mousemove", (e: MouseEvent) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    const rotateX = ((y - centerY) / centerY) * -15;
                    const rotateY = ((x - centerX) / centerX) * 15;

                    gsap.to(card, {
                        rotateX,
                        rotateY,
                        transformPerspective: 1000,
                        duration: 0.4,
                        ease: "power2.out",
                    });
                });

                card.addEventListener("mouseleave", () => {
                    gsap.to(card, {
                        rotateX: 0,
                        rotateY: 0,
                        duration: 0.7,
                        ease: "elastic.out(1, 0.3)",
                    });
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (!selectedArtist) return;

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setSelectedArtist(null);
        };

        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    }, [selectedArtist]);

    return (
        <section id="roster" ref={sectionRef} className="py-24 md:py-32 bg-[#0b0c0b] text-[#f4f0e8] relative z-10" style={{ perspective: "1500px" }}>
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="roster-header mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div>
                        <p className="section-kicker mb-4">01 / The people</p>
                        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter">The <span className="text-[#f06a3d]">Roster</span></h2>
                        <p className="text-[#f4f0e8]/60 mt-4 max-w-md text-lg">Our handpicked selection of visionaries who refuse to blend in.</p>
                    </div>
                    <button className="text-sm uppercase tracking-wider font-bold border-b border-[#f4f0e8] pb-1 hover:text-[#f06a3d] hover:border-[#f06a3d] transition-colors cursor-none">View All Artists</button>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {artists.slice().sort((first, second) => rosterOrder.indexOf(first.name) - rosterOrder.indexOf(second.name)).map((artist) => (
                        <div key={artist.id} role="button" tabIndex={0} onClick={() => setSelectedArtist(artist)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedArtist(artist); } }} className="artist-card group relative aspect-[4/5] overflow-hidden bg-[#111] cursor-none rounded-none border border-white/20 text-left" style={{ transformStyle: "preserve-3d" }} aria-label={`Open full description for ${artist.name}`}>
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={artist.image}
                                    onError={(e) => { e.currentTarget.src = artist.fallbackImage; }}
                                    alt={artist.name}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-30 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                                />
                            </div>

                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 transition-transform duration-500 group-hover:-translate-y-full transform-gpu" style={{ transform: "translateZ(50px)" }}>
                                <h3 className="text-4xl font-display font-bold uppercase tracking-wide text-[#65745a] group-hover:text-[#f4f0e8] transition-colors">{artist.name}</h3>
                            </div>

                            <div className="absolute inset-x-0 -bottom-full h-full bg-[#f06a3d]/95 backdrop-blur-md p-8 flex flex-col justify-end z-20 transition-transform duration-500 group-hover:-translate-y-full text-[#1b1b18] transform-gpu">
                                <h3 className="text-4xl font-display font-bold uppercase tracking-wide mb-2">{artist.name}</h3>

                                <div className="flex flex-col gap-1 mb-6">
                                    {artist.stats.map((stat, i) => (
                                        <span key={i} className="text-sm font-bold uppercase tracking-widest text-black/60">{stat}</span>
                                    ))}
                                </div>

                                <p className="text-base font-medium mb-8 leading-relaxed line-clamp-4">{artist.bio}</p>

                                <div className="flex gap-4 focus:opacity-100">
                                    <a href={artist.spotify === "#" ? undefined : artist.spotify} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className="p-3 bg-[#1b1b18] text-[#f06a3d] rounded-none hover:bg-white hover:scale-110 transition-all cursor-none pointer-events-auto shadow-lg">
                                        <Music className="w-5 h-5" />
                                    </a>
                                    <a href={artist.instagram === "#" ? undefined : artist.instagram} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className="p-3 bg-[#1b1b18] text-[#f06a3d] rounded-none hover:bg-white hover:scale-110 transition-all cursor-none pointer-events-auto shadow-lg">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedArtist && typeof document !== "undefined" && createPortal(
                <div className="artist-dialog fixed inset-0 z-[100] flex items-center justify-center bg-[#1b1b18]/75 p-6" role="dialog" aria-modal="true" aria-label={`${selectedArtist.name} full description`} onClick={() => setSelectedArtist(null)}>
                    <div className="relative max-w-2xl border-2 border-[#f06a3d] bg-[#141714] p-8 md:p-12 text-[#f4f0e8]" onClick={(event) => event.stopPropagation()}>
                        <button type="button" className="absolute right-4 top-3 text-2xl font-bold text-[#65745a] hover:text-[#f06a3d]" onClick={() => setSelectedArtist(null)} aria-label="Close artist description">×</button>
                        <p className="section-kicker mb-3">Artist profile</p>
                        <h3 className="mb-5 font-display text-4xl font-bold uppercase tracking-tight text-[#65745a] md:text-6xl">{selectedArtist.name}</h3>
                        <p className="mb-8 text-lg leading-relaxed text-[#f4f0e8]/75">{selectedArtist.bio}</p>
                        <div className="flex flex-wrap gap-3">
                            {selectedArtist.stats.map((stat) => <span key={stat} className="bg-[#f06a3d] px-3 py-2 text-xs font-bold uppercase tracking-wider">{stat}</span>)}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
}
