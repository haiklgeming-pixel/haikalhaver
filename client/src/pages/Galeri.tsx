import Navbar from "@/components/Navbar";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

const galleryImages = [
    { id: 1, title: "Penangkapan Diponegoro", artist: "Nicolaas Pieneman", year: "1830" },
    { id: 2, title: "Penyerahan Pangeran Diponegoro", artist: "Raden Saleh", year: "1857" },
    { id: 3, title: "Pasukan Jawa", artist: "Unknown", year: "1825" },
    { id: 4, title: "Benteng Vredeburg", artist: "Historical Archive", year: "1828" },
    { id: 5, title: "Peta Strategi", artist: "Military Map", year: "1827" },
    { id: 6, title: "Lansekap Magelang", artist: "Sketch", year: "1830" },
];

export default function Galeri() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 font-heading text-4xl font-bold text-primary">Galeri Sejarah</h1>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((img) => (
                <Dialog key={img.id}>
                    <DialogTrigger asChild>
                        <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-neutral-200">
                            <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                                {/* Placeholder */}
                                <span className="text-xs">Img {img.id}</span>
                            </div>
                            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                             <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                                <p className="text-sm font-bold">{img.title}</p>
                            </div>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none text-white">
                        <div className="relative h-[80vh] w-full flex flex-col items-center justify-center">
                             <div className="relative h-full w-full bg-black/90 rounded-lg flex items-center justify-center overflow-hidden p-4">
                                 {/* Actual Image would go here */}
                                 <div className="text-center">
                                    <div className="text-2xl font-heading mb-2">{img.title}</div>
                                    <div className="text-sm text-gray-400 italic">{img.artist}, {img.year}</div>
                                 </div>
                             </div>
                        </div>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
      </div>
    </div>
  );
}
