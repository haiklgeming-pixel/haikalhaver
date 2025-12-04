import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import timelineData from "@/data/timeline.json";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function TimelineComponent() {
  const [events, setEvents] = useState(timelineData);

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
            <div className="absolute top-0 left-4 h-full w-0.5 bg-border/50 md:left-1/2 md:-ml-[1px] hidden md:block"></div>
            
            <Link href={`/peristiwa/${event.slug}`}>
              <Card className="cursor-pointer transition-all hover:border-secondary hover:shadow-lg hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-heading text-3xl font-bold text-primary/20">
                      {event.year}
                    </span>
                    <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-semibold text-primary">
                    {event.title}
                  </h3>
                  <p className="font-history text-sm text-muted-foreground line-clamp-3">
                    {event.description}
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
