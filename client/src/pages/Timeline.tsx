import Navbar from "@/components/Navbar";
import TimelineComponent from "@/components/TimelineComponent";

export default function Timeline() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold text-primary md:text-5xl">
            Garis Waktu Perang
          </h1>
          <p className="mx-auto max-w-2xl font-history text-lg text-muted-foreground">
            Runtutan peristiwa penting selama 5 tahun peperangan yang melelahkan (1825-1830).
          </p>
        </header>
        
        <div className="rounded-lg bg-muted/30 p-8 border border-border/50 shadow-inner">
          <TimelineComponent />
        </div>
      </div>
    </div>
  );
}
