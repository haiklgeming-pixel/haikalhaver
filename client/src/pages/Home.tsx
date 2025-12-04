import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Map, BookOpen, Users, Clock, Image as ImageIcon } from "lucide-react";
import diponegoroImage from "@assets/generated_images/dramatic_oil_painting_of_prince_diponegoro_in_the_java_war..png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={diponegoroImage} 
            alt="Perang Jawa" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="mb-4 block font-sans text-sm font-bold uppercase tracking-widest text-secondary">
              Sejarah Indonesia
            </span>
            <h1 className="mb-6 font-heading text-5xl font-bold leading-none text-white md:text-7xl lg:text-8xl">
              Perang Jawa
            </h1>
            <p className="mb-8 max-w-xl font-history text-lg text-gray-200 md:text-xl">
              Konflik terbesar di Pulau Jawa yang mengguncang kekuasaan kolonial Belanda dan mengubah sejarah Nusantara selamanya.
            </p>
            
            <Link href="/timeline">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Mulai Penjelajahan
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="container mx-auto py-24 px-4">
        <h2 className="mb-12 text-center font-heading text-3xl font-bold text-primary">
          Jelajahi Sejarah
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <NavCard 
            href="/timeline" 
            title="Timeline" 
            desc="Garis waktu peristiwa penting dari 1825 hingga 1830."
            icon={<Clock className="h-8 w-8" />}
          />
          <NavCard 
            href="/peristiwa" 
            title="Peristiwa" 
            desc="Detail pertempuran dan momen bersejarah."
            icon={<BookOpen className="h-8 w-8" />}
          />
          <NavCard 
            href="/tokoh" 
            title="Tokoh" 
            desc="Biografi pahlawan dan tokoh kunci."
            icon={<Users className="h-8 w-8" />}
          />
          <NavCard 
            href="/peta" 
            title="Peta Konflik" 
            desc="Sebaran lokasi pertempuran di tanah Jawa."
            icon={<Map className="h-8 w-8" />}
          />
        </div>
        
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
           <NavCard 
            href="/galeri" 
            title="Galeri Visual" 
            desc="Koleksi ilustrasi dan lukisan sejarah."
            icon={<ImageIcon className="h-8 w-8" />}
            className="lg:col-span-2"
          />
        </div>
      </section>
    </div>
  );
}

function NavCard({ href, title, desc, icon, className }: { href: string, title: string, desc: string, icon: React.ReactNode, className?: string }) {
  return (
    <Link href={href}>
      <Card className={`group h-full cursor-pointer transition-all hover:border-primary/50 hover:bg-accent/5 hover:shadow-md ${className}`}>
        <CardContent className="flex flex-col items-center p-8 text-center">
          <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            {icon}
          </div>
          <h3 className="mb-2 font-heading text-xl font-bold text-foreground">{title}</h3>
          <p className="font-history text-sm text-muted-foreground">{desc}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
