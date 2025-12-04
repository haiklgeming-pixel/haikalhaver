import Navbar from "@/components/Navbar";
import { useRoute } from "wouter";
import peristiwaData from "@/data/peristiwa.json";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, User, Swords, Lightbulb, Quote } from "lucide-react";
import { Link } from "wouter";
import NotFound from "@/pages/not-found";
import parchmentTexture from "@assets/generated_images/aged_parchment_paper_texture..png";

export default function PeristiwaDetail() {
  const [match, params] = useRoute("/peristiwa/:slug");
  
  if (!match) return <NotFound />;
  
  const event = peristiwaData.find((p) => p.slug === params.slug);
  
  if (!event) return <NotFound />;

  return (
    <div 
        className="min-h-screen bg-background font-body relative"
        style={{
            backgroundImage: `url(${parchmentTexture})`,
            backgroundBlendMode: "multiply",
            backgroundSize: "cover"
        }}
    >
      <Navbar />
      <div className="absolute inset-0 bg-background/50 pointer-events-none z-0" />

      <article className="relative z-10 container mx-auto max-w-5xl px-4 py-16">
        <Link href="/peristiwa">
          <Button variant="link" className="mb-8 pl-0 text-muted-foreground hover:text-primary group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Kembali ke Daftar Peristiwa
          </Button>
        </Link>

        {/* Header Section */}
        <header className="mb-12 text-center">
            <span className="mb-4 inline-block border-b-2 border-secondary px-4 py-1 font-heading text-lg font-bold text-secondary">
                {event.year}
            </span>
            <h1 className="font-heading text-5xl font-bold leading-tight text-primary md:text-6xl lg:text-7xl">
                {event.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-muted-foreground font-sans font-medium">
                <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-secondary" />
                    {event.location}
                </div>
                <div className="hidden h-4 w-px bg-border md:block" />
                <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-secondary" />
                    Tokoh Kunci: {event.figures.slice(0, 2).join(", ")}
                </div>
            </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-12">
            
            {/* Sidebar / Meta Info */}
            <aside className="lg:col-span-4 space-y-8">
                <div className="rounded-xl bg-card/80 p-6 shadow-sm border border-border/50 backdrop-blur-sm">
                    <h3 className="font-heading text-xl font-bold text-primary mb-4 flex items-center gap-2">
                        <Swords className="h-5 w-5" /> Strategi & Taktik
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {event.tactics}
                    </p>
                </div>

                <div className="rounded-xl bg-card/80 p-6 shadow-sm border border-border/50 backdrop-blur-sm">
                    <h3 className="font-heading text-xl font-bold text-primary mb-4 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5" /> Dampak Peristiwa
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {event.impact}
                    </p>
                </div>

                {event.quote && (
                    <div className="relative rounded-xl bg-secondary/10 p-8 italic text-primary-foreground/80">
                        <Quote className="absolute top-4 left-4 h-8 w-8 text-secondary/20" />
                        <p className="font-heading text-lg leading-relaxed text-center text-foreground">
                            "{event.quote}"
                        </p>
                    </div>
                )}
            </aside>

            {/* Main Narrative */}
            <div className="lg:col-span-8">
                <div className="mb-10 overflow-hidden rounded-xl border-4 border-white bg-neutral-200 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                     <div className="aspect-video w-full bg-neutral-800 flex flex-col items-center justify-center text-neutral-400 p-12 text-center">
                        <span className="font-heading text-2xl italic mb-2">Visualisasi Sejarah</span>
                        <span className="text-sm font-sans opacity-70">{event.image_caption}</span>
                     </div>
                </div>

                <div className="prose prose-lg prose-stone max-w-none">
                    <p className="font-history text-xl leading-9 text-foreground/90 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-secondary first-letter:leading-[0.8]">
                        {event.narrative}
                    </p>
                    
                    <p className="text-muted-foreground">
                        Peristiwa ini menjadi salah satu titik krusial dalam rentang waktu 1825-1830, memperlihatkan dinamika kekuatan antara pasukan Pangeran Diponegoro dan pemerintah kolonial Hindia Belanda.
                    </p>
                </div>

                <div className="mt-16 border-t border-border/50 pt-8">
                    <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Referensi Sejarah</h4>
                    <div className="flex flex-wrap gap-3">
                        {event.references.map((ref, idx) => (
                            <span key={idx} className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                                {ref}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </article>
    </div>
  );
}
