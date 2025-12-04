import Navbar from "@/components/Navbar";
import { useRoute } from "wouter";
import tokohData from "@/data/tokoh.json";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin } from "lucide-react";
import { Link } from "wouter";
import NotFound from "@/pages/not-found";

export default function TokohDetail() {
  const [match, params] = useRoute("/tokoh/:id");
  
  if (!match) return <NotFound />;
  
  const tokoh = tokohData.find((t) => t.id === parseInt(params.id));
  
  if (!tokoh) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto max-w-5xl px-4 py-16">
         <Link href="/tokoh">
          <Button variant="ghost" className="mb-8 pl-0 text-muted-foreground hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Daftar Tokoh
          </Button>
        </Link>

        <div className="grid gap-12 md:grid-cols-[300px_1fr]">
            <div>
                <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-neutral-200 shadow-lg mb-6 flex items-center justify-center text-muted-foreground">
                    <span className="font-serif italic">Foto {tokoh.name}</span>
                </div>
                
                <div className="rounded-lg bg-muted p-4 text-sm font-history">
                    <div className="mb-2 font-bold text-primary">Basis Operasi:</div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" /> {tokoh.location}
                    </div>
                </div>
            </div>

            <div>
                <h1 className="font-heading text-4xl font-bold text-primary mb-2">{tokoh.name}</h1>
                <div className="text-xl text-secondary font-serif italic mb-8">{tokoh.role}</div>

                <div className="prose prose-lg prose-stone max-w-none">
                    <h3 className="font-heading text-xl font-bold mb-4">Biografi Singkat</h3>
                    <p className="font-history leading-relaxed text-muted-foreground">
                        {tokoh.bio}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
