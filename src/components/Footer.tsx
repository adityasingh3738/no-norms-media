import React from "react";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#050505] text-foreground py-16 overflow-hidden">
            <div
                className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
                }}
            />

            <div className="container relative z-10 mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h2 className="text-3xl font-display font-bold uppercase tracking-widest mb-2">No Norms <span className="text-accent">Media</span></h2>
                        <p className="text-gray-400 text-sm">We Don't Follow Norms. We Build Them.</p>
                    </div>
                    <div className="flex gap-6 relative z-20">
                        <a href="https://instagram.com/nonorms.media" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors cursor-none"><Instagram className="w-6 h-6" /></a>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <p>&copy; {new Date().getFullYear()} No Norms Media. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
