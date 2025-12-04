import Navbar from "@/components/Navbar";
import mapImage from "@assets/generated_images/vintage_1825_map_of_java_island..png";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const locations = [
    { id: 1, name: "Tegalrejo", x: "45%", y: "60%", desc: "Awal mula pecahnya perang (1825)" },
    { id: 2, name: "Magelang", x: "40%", y: "55%", desc: "Lokasi penangkapan Diponegoro (1830)" },
    { id: 3, name: "Gua Selarong", x: "42%", y: "65%", desc: "Markas gerilya pasukan Diponegoro" },
    { id: 4, name: "Ungaran", x: "50%", y: "40%", desc: "Benteng pertahanan Belanda" },
];

export default function Peta() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 font-heading text-4xl font-bold text-primary text-center">Peta Konflik</h1>
        
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border-8 border-[#5D4037] bg-[#F5F5F0] shadow-2xl">
            <img src={mapImage} alt="Peta Jawa 1825" className="w-full object-cover opacity-80 sepia-[.5]" />
            
            {/* Interactive Points */}
            <TooltipProvider>
                {locations.map((loc) => (
                    <Tooltip key={loc.id}>
                        <TooltipTrigger asChild>
                            <button 
                                className="absolute h-4 w-4 -ml-2 -mt-2 rounded-full bg-destructive border-2 border-white shadow-lg animate-pulse hover:scale-150 transition-transform cursor-help"
                                style={{ left: loc.x, top: loc.y }}
                            />
                        </TooltipTrigger>
                        <TooltipContent>
                            <div className="text-center">
                                <p className="font-bold font-heading">{loc.name}</p>
                                <p className="text-xs text-muted-foreground">{loc.desc}</p>
                            </div>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </TooltipProvider>

            <div className="absolute bottom-4 right-4 bg-white/90 p-4 rounded shadow-lg border border-primary/20 max-w-xs">
                <h4 className="font-bold font-heading mb-2 text-primary">Legenda</h4>
                <div className="flex items-center gap-2 text-sm">
                    <span className="h-3 w-3 rounded-full bg-destructive"></span>
                    <span>Titik Pertempuran Utama</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
