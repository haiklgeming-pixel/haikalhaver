import Navbar from "@/components/Navbar";
import tokohData from "@/data/tokoh.json";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function TokohList() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-4 font-heading text-4xl font-bold text-primary">Tokoh Sejarah</h1>
        <p className="mb-12 max-w-2xl font-history text-muted-foreground">
            Mengenal para pelaku sejarah yang terlibat dalam konflik besar Perang Jawa, baik dari sisi Keraton maupun Kolonial.
        </p>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tokohData.map((tokoh) => (
            <Link key={tokoh.id} href={`/tokoh/${tokoh.id}`}>
                <Card className="group cursor-pointer overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl bg-card">
                    <div className="aspect-[4/5] w-full bg-muted overflow-hidden relative">
                         {/* Placeholder for portrait */}
                        <div className="absolute inset-0 flex items-center justify-center bg-neutral-300 text-neutral-500 font-serif">
                            Portrait
                        </div>
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                         <div className="absolute bottom-0 left-0 p-6 text-white">
                             <h3 className="font-heading text-xl font-bold leading-tight mb-1">{tokoh.name}</h3>
                             <p className="text-xs font-sans opacity-80 uppercase tracking-wider">{tokoh.role}</p>
                         </div>
                    </div>
                </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
