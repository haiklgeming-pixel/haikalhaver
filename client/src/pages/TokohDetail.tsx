import Navbar from "@/components/Navbar";
import { useRoute } from "wouter";
import tokohData from "@/data/tokoh.json";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Shield, Scroll, Swords } from "lucide-react";
import { Link } from "wouter";
import NotFound from "@/pages/not-found";
import { Badge } from "@/components/ui/badge";
import parchmentTexture from "@assets/generated_images/aged_parchment_paper_texture..png";

export default function TokohDetail() {
  const [match, params] = useRoute("/tokoh/:id");
  
  if (!match) return <NotFound />;
  
  const tokoh = tokohData.find((t) => t.id === parseInt(params.id));
  
  if (!tokoh) return <NotFound />;

  return (
    <div 
        className="min-h-screen bg-background relative"
        style={{
            backgroundImage: `url(${parchmentTexture})`,
            backgroundBlendMode: "multiply",
            backgroundSize: "cover"
        }}
    >
      <div className="absolute inset-0 bg-background/60 pointer-events-none z-0" />
      <Navbar />
      
      <main className="relative z-10 container mx-auto max-w-6xl px-4 py-16">
         <Link href="/tokoh">
          <Button variant="ghost" className="mb-8 pl-0 text-muted-foreground hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Daftar Tokoh
          </Button>
        </Link>

        <div className="grid gap-12 lg:grid-cols-[400px_1fr]">
            {/* Left Column: Profile Card */}
            <div className="space-y-8">
                <div className="relative overflow-hidden rounded-xl border-4 border-white bg-card shadow-2xl">
                    <div className="aspect-[3/4] w-full bg-neutral-200 flex items-center justify-center text-muted-foreground bg-gradient-to-b from-neutral-300 to-neutral-400">
                        <span className="font-heading text-2xl italic text-neutral-600">Potret {tokoh.name}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-24 text-white">
                         <div className="flex items-center gap-2 mb-2">
                            <Badge variant={tokoh.side === "Jawa" ? "default" : "destructive"} className="uppercase tracking-widest text-[10px]">
                                Pihak {tokoh.side}
                            </Badge>
                         </div>
                         <h2 className="font-heading text-3xl font-bold">{tokoh.name}</h2>
                         <p className="text-secondary font-serif italic">{tokoh.title}</p>
                    </div>
                </div>

                <div className="rounded-lg border border-primary/10 bg-card/50 p-6 backdrop-blur-sm">
                    <h3 className="font-heading text-lg font-bold text-primary mb-4 border-b border-primary/10 pb-2">
                        Data Singkat
                    </h3>
                    <dl className="space-y-4 text-sm">
                        <div>
                            <dt className="text-muted-foreground mb-1 flex items-center gap-2">
                                <Shield className="h-4 w-4" /> Peran
                            </dt>
                            <dd className="font-medium text-foreground pl-6">{tokoh.role}</dd>
                        </div>
                        <div>
                            <dt className="text-muted-foreground mb-1 flex items-center gap-2">
                                <MapPin className="h-4 w-4" /> Basis Operasi
                            </dt>
                            <dd className="font-medium text-foreground pl-6">{tokoh.location}</dd>
                        </div>
                    </dl>
                </div>
            </div>

            {/* Right Column: Detailed Content */}
            <div className="space-y-10">
                
                {/* Quote Section */}
                {tokoh.quote && (
                    <blockquote className="border-l-4 border-secondary pl-6 py-2 italic text-2xl font-heading text-muted-foreground">
                        "{tokoh.quote}"
                    </blockquote>
                )}

                {/* Biography */}
                <section className="prose prose-lg prose-stone max-w-none">
                    <h3 className="font-heading text-2xl font-bold text-primary flex items-center gap-3">
                        <Scroll className="h-6 w-6 text-secondary" />
                        Biografi
                    </h3>
                    <p className="font-history leading-loose text-foreground/90">
                        {tokoh.bio}
                    </p>
                </section>

                {/* Traits Grid */}
                <section>
                    <h3 className="font-heading text-xl font-bold text-primary mb-6">Karakteristik Utama</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {tokoh.key_traits?.map((trait, idx) => (
                            <div key={idx} className="flex items-center justify-center rounded-lg border border-primary/20 bg-primary/5 p-4 text-center font-bold text-primary transition-colors hover:bg-primary/10">
                                {trait}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Battles Timeline */}
                <section className="rounded-xl bg-muted/30 p-8 border border-border">
                    <h3 className="font-heading text-xl font-bold text-primary mb-6 flex items-center gap-3">
                        <Swords className="h-6 w-6 text-destructive" />
                        Keterlibatan Pertempuran
                    </h3>
                    <div className="space-y-4">
                        {tokoh.battles?.map((battle, idx) => (
                            <div key={idx} className="flex items-center gap-4 group">
                                <div className="h-2 w-2 rounded-full bg-secondary group-hover:scale-150 transition-transform" />
                                <span className="font-history font-medium text-foreground group-hover:text-primary transition-colors">
                                    {battle}
                                </span>
                                <div className="h-px flex-1 bg-border/50 border-t border-dashed" />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
      </main>
    </div>
  );
}
