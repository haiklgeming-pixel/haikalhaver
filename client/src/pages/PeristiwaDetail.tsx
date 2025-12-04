import Navbar from "@/components/Navbar";
import { useRoute } from "wouter";
import peristiwaData from "@/data/peristiwa.json";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, User } from "lucide-react";
import { Link } from "wouter";
import NotFound from "@/pages/not-found";

export default function PeristiwaDetail() {
  const [match, params] = useRoute("/peristiwa/:slug");
  
  if (!match) return <NotFound />;
  
  const event = peristiwaData.find((p) => p.slug === params.slug);
  
  if (!event) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="container mx-auto max-w-4xl px-4 py-16">
        <Link href="/peristiwa">
          <Button variant="ghost" className="mb-8 pl-0 text-muted-foreground hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Daftar
          </Button>
        </Link>

        <div className="mb-8">
            <span className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary-foreground mb-4">
                Tahun {event.year}
            </span>
            <h1 className="font-heading text-4xl font-bold text-primary md:text-5xl lg:text-6xl leading-tight mb-6">
            {event.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-muted-foreground font-sans text-sm">
                <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                </div>
                <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Tokoh: {event.figures.join(", ")}
                </div>
            </div>
        </div>

        <div className="mb-10 aspect-video w-full overflow-hidden rounded-lg bg-muted flex items-center justify-center text-muted-foreground bg-neutral-200">
             <span className="font-serif text-lg italic">Ilustrasi Visual: {event.title}</span>
        </div>

        <div className="prose prose-lg prose-stone max-w-none">
          <p className="font-history text-lg leading-loose text-foreground/90 drop-cap">
            {event.narrative}
          </p>
        </div>

        <div className="mt-12 border-t border-border pt-8">
            <h3 className="font-heading text-lg font-bold mb-4">Referensi</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground font-history">
                {event.references.map((ref, idx) => (
                    <li key={idx}>{ref}</li>
                ))}
            </ul>
        </div>
      </article>
    </div>
  );
}
