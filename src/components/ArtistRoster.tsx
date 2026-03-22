"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, Music } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const artists = [
    {
        id: 1,
        name: "SarpDansh",
        genre: "Melodic / Hip-Hop",
        bio: "A 21-year-old melodic artist from Rajasthan with over 20M+ streams. Known for hits like 'Pills on my mind' and collaborations with Ikka & Fotty Seven.",
        image: "/sarpdansh.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&auto=format&fit=crop&q=60",
        spotify: "https://open.spotify.com/artist/2EnfibPipqcjvyRiNrbHTN",
        instagram: "https://www.instagram.com/sarpdansh/",
        stats: ["200K+ Monthly Listeners", "25K+ Spotify Followers"]
    },
    {
        id: 2,
        name: "Parv",
        genre: "Desi Hip Hop",
        bio: "A 21-year-old artist from Moradabad who broke through charting on Spotify's Viral 50. Blends multiple genres with projects like 'From Me To Me'.",
        image: "/parv.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
        spotify: "https://open.spotify.com/artist/350WWIB7gR7evrXTWmc1pj",
        instagram: "https://www.instagram.com/parv_music/",
        stats: ["150K+ Monthly Listeners", "12K+ IG Followers"]
    },
    {
        id: 3,
        name: "SickLot",
        genre: "Rap / Singer",
        bio: "A 19-year-old artist bridging raw emotion and sharp lyricism. His breakout 'Dhaaga' charted #2 on Spotify Viral 50. Collaborator with Badshah & Panther.",
        image: "/sicklot.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60",
        spotify: "https://open.spotify.com/artist/2NYWuAn8LPsebNkudbSLA6",
        instagram: "https://www.instagram.com/sicklotmusic/",
        stats: ["100K+ Monthly Listeners", "10K+ IG Followers"]
    },
    {
        id: 4,
        name: "Dhruv Sthetick",
        genre: "Melodic DHH",
        bio: "A well known artist in the melodic scene with his breakthrough track 'Tu Nasha'. He is a prominent and rising name in underground Desi Hip Hop.",
        image: "/dhruvsthetick.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=800&auto=format&fit=crop&q=60",
        spotify: "https://open.spotify.com/artist/4g8Z4if0DrwN5H83ZGpZ44",
        instagram: "https://www.instagram.com/dhruv_sthetick/",
        stats: ["100K+ Spotify Listeners", "15K+ IG Followers"]
    },
    {
        id: 5,
        name: "2Raw",
        genre: "Rap Duo",
        bio: "Based in Dwarka, this rap duo strives to bring the edge of West Delhi to the world. Known for their versatility and unpretentious, blunt artistic vision.",
        image: "/2raw.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
        spotify: "https://open.spotify.com/artist/5oUQFkXemNEsbIdmZmwWmW",
        instagram: "https://www.instagram.com/2rraaww/",
        stats: ["20K+ Spotify Listeners", "5K+ YouTube Subs"]
    },
    {
        id: 6,
        name: "Navyug",
        genre: "Record Producer",
        bio: "A 20-year-old multi-genre record producer recognized highly in the underground hip-hop scene. Has worked with industry heavyweights like Ikka & MC Square.",
        image: "/navyug.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&auto=format&fit=crop&q=60",
        spotify: "https://open.spotify.com/artist/4adwj9Z1zcgF7Os33tzs4Q",
        instagram: "https://www.instagram.com/navyugmusic/",
        stats: ["110K+ Spotify Listeners", "Collabs: Ikka, MC Sq."]
    }
];

export default function ArtistRoster() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

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

    return (
        <section id="roster" ref={sectionRef} className="py-24 md:py-32 bg-background relative z-10" style={{ perspective: "1500px" }}>
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="roster-header mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter">The <span className="text-accent">Roster</span></h2>
                        <p className="text-gray-400 mt-4 max-w-md text-lg">Our handpicked selection of visionaries who refuse to blend in.</p>
                    </div>
                    <button className="text-sm uppercase tracking-wider font-medium border-b border-white pb-1 hover:text-accent hover:border-accent transition-colors cursor-none">View All Artists</button>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {artists.map((artist) => (
                        <div key={artist.id} className="artist-card group relative aspect-[4/5] overflow-hidden bg-[#111] cursor-none rounded-md" style={{ transformStyle: "preserve-3d" }}>
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={artist.image}
                                    onError={(e) => { e.currentTarget.src = artist.fallbackImage; }}
                                    alt={artist.name}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-30 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                                />
                            </div>

                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 transition-transform duration-500 group-hover:-translate-y-full transform-gpu" style={{ transform: "translateZ(50px)" }}>
                                <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2 block">{artist.genre}</span>
                                <h3 className="text-4xl font-display font-bold uppercase tracking-wide">{artist.name}</h3>
                            </div>

                            <div className="absolute inset-x-0 -bottom-full h-full bg-accent/95 backdrop-blur-md p-8 flex flex-col justify-end z-20 transition-transform duration-500 group-hover:-translate-y-full text-[#0A0A0A] transform-gpu">
                                <h3 className="text-4xl font-display font-bold uppercase tracking-wide mb-2">{artist.name}</h3>

                                <div className="flex flex-col gap-1 mb-6">
                                    {artist.stats.map((stat, i) => (
                                        <span key={i} className="text-sm font-bold uppercase tracking-widest text-black/60">{stat}</span>
                                    ))}
                                </div>

                                <p className="text-base font-medium mb-8 leading-relaxed line-clamp-4">{artist.bio}</p>

                                <div className="flex gap-4 focus:opacity-100">
                                    <a href={artist.spotify} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#0A0A0A] text-accent rounded-full hover:bg-white hover:scale-110 transition-all cursor-none pointer-events-auto shadow-lg">
                                        <Music className="w-5 h-5" />
                                    </a>
                                    <a href={artist.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#0A0A0A] text-accent rounded-full hover:bg-white hover:scale-110 transition-all cursor-none pointer-events-auto shadow-lg">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
