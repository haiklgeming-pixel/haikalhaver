import Navbar from "@/components/Navbar";
import mapImage from "@assets/generated_images/vintage_1825_map_of_java_island..png";
import peristiwaData from "@/data/peristiwa.json"; // Using SSOT
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

export default function Peta() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
             <h1 className="mb-4 font-heading text-4xl font-bold text-primary">Peta Konflik Jawa</h1>
             <p className="text-muted-foreground font-history">Sebaran lokasi pertempuran dan peristiwa penting (1825-1830)</p>
        </div>
       
        
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border-[12px] border-[#5D4037] bg-[#F5F5F0] shadow-2xl">
            {/* Map Layer */}
            <img 
                src={mapImage} 
                alt="Peta Jawa 1825" 
                className="w-full object-cover opacity-80 sepia-[.6] contrast-125" 
            />
            
            {/* Overlay Vignette */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#5D4037]/20 to-transparent pointer-events-none" />

            {/* Interactive Points */}
            <TooltipProvider>
                {peristiwaData.filter(p => p.coordinates).map((event) => (
                    <Tooltip key={event.id}>
                        <TooltipTrigger asChild>
                            <motion.button 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute group cursor-pointer"
                                style={{ left: event.coordinates?.x, top: event.coordinates?.y }}
                            >
                                <div className="relative flex items-center justify-center">
                                    <span className="absolute h-8 w-8 rounded-full bg-destructive/30 animate-ping" />
                                    <span className="relative h-4 w-4 rounded-full bg-destructive border-2 border-white shadow-lg transition-transform group-hover:scale-125" />
                                </div>
                            </motion.button>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="bg-card border-primary/20 p-4 shadow-xl">
                            <div className="text-center max-w-[200px]">
                                <p className="font-bold font-heading text-primary mb-1">{event.location}</p>
                                <p className="text-xs font-bold text-secondary mb-2">{event.year}</p>
                                <p className="text-xs text-muted-foreground line-clamp-2">{event.title}</p>
                            </div>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </TooltipProvider>

            {/* Legend Box */}
            <div className="absolute bottom-6 right-6 bg-white/95 p-4 rounded-lg shadow-xl border border-primary/20 backdrop-blur-sm">
                <h4 className="font-bold font-heading mb-3 text-primary border-b border-primary/10 pb-2">Legenda Peta</h4>
                <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm font-sans text-muted-foreground">
                        <div className="flex items-center justify-center h-4 w-4">
                            <span className="h-3 w-3 rounded-full bg-destructive border border-white shadow-sm"></span>
                        </div>
                        <span>Lokasi Pertempuran</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-sans text-muted-foreground">
                         <div className="flex items-center justify-center h-4 w-4">
                            <span className="h-4 w-4 border-2 border-dashed border-primary/50 rounded-sm"></span>
                        </div>
                        <span>Wilayah Kekuasaan</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
