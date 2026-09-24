import React from "react";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#141714] text-[#f4f0e8] py-16 overflow-hidden border-t border-white/10">
            <div
                className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
                }}
            />

            <div className="container relative z-10 mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h2 className="text-3xl font-display font-bold uppercase tracking-widest mb-2">No Norms <span className="text-[#f06a3d]">Media</span></h2>
                        <p className="text-[#f2eee5]/60 text-sm">We Don't Follow Norms. We Build Them.</p>
                    </div>
                    <div className="flex gap-6 relative z-20">
                        <a href="https://instagram.com/nonorms.media" target="_blank" rel="noopener noreferrer" className="hover:text-[#f06a3d] transition-colors cursor-none"><Instagram className="w-6 h-6" /></a>
                    </div>
                </div>
                <div className="border-t border-[#f2eee5]/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#f2eee5]/50 gap-4">
                    <p>&copy; {new Date().getFullYear()} No Norms Media. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-[#f06a3d] transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-[#f06a3d] transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
