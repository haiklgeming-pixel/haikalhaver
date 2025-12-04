import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import peristiwaData from "@/data/peristiwa.json";
import { Calendar, MapPin } from "lucide-react";

export default function PeristiwaList() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 font-heading text-4xl font-bold text-primary">Daftar Peristiwa</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {peristiwaData.map((item) => (
            <Link key={item.id} href={`/peristiwa/${item.slug}`}>
              <Card className="group h-full cursor-pointer overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
                <div className="h-48 w-full bg-muted flex items-center justify-center text-muted-foreground bg-neutral-200">
                    {/* Placeholder for image */}
                    <span className="font-serif italic">Ilustrasi: {item.title}</span>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {item.year}
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {item.location}
                    </div>
                  </div>
                  <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 font-history text-sm text-muted-foreground">
                    {item.narrative}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
