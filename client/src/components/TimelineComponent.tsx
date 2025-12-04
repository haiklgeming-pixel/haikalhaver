import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import peristiwaData from "@/data/peristiwa.json"; // Switched to SSOT
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function TimelineComponent() {
  // Sort by year/id just in case, though json is ordered
  const events = peristiwaData; 

  return (
    <div className="w-full overflow-x-auto py-12 hide-scrollbar">
      <div className="flex min-w-max gap-8 px-4 md:px-12">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative w-[300px] flex-shrink-0 md:w-[400px]"
          >
            {/* Timeline Line */}
            <div className="absolute top-0 left-4 h-full w-0.5 bg-primary/20 md:left-1/2 md:-ml-[1px] hidden md:block"></div>
            
            {/* Date Marker on Line */}
            <div className="absolute top-0 md:left-1/2 md:-ml-2 hidden md:block h-4 w-4 rounded-full bg-secondary shadow border-2 border-background z-10" />

            <Link href={`/peristiwa/${event.slug}`}>
              <Card className="cursor-pointer transition-all hover:border-secondary hover:shadow-xl hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-primary/10 group">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between border-b border-border pb-2">
                    <span className="font-heading text-sm font-bold text-secondary uppercase tracking-wider">
                      {event.year}
                    </span>
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-bold text-primary leading-tight">
                    {event.title}
                  </h3>
                  <p className="font-history text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {event.narrative}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
