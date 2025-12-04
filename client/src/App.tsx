import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Intro from "@/components/Intro";
import Home from "@/pages/Home";
import Timeline from "@/pages/Timeline";
import PeristiwaList from "@/pages/PeristiwaList";
import PeristiwaDetail from "@/pages/PeristiwaDetail";
import TokohList from "@/pages/TokohList";
import TokohDetail from "@/pages/TokohDetail";
import Peta from "@/pages/Peta";
import Galeri from "@/pages/Galeri";
import Tentang from "@/pages/Tentang";
import parchmentTexture from "@assets/generated_images/aged_parchment_paper_texture..png";

function Router() {
  return (
    <>
      <Intro />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/peristiwa" component={PeristiwaList} />
        <Route path="/peristiwa/:slug" component={PeristiwaDetail} />
        <Route path="/tokoh" component={TokohList} />
        <Route path="/tokoh/:id" component={TokohDetail} />
        <Route path="/peta" component={Peta} />
        <Route path="/galeri" component={Galeri} />
        <Route path="/tentang" component={Tentang} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div 
            className="min-h-screen w-full bg-background font-body text-foreground antialiased"
            style={{
                // Global Texture Application
                backgroundImage: `url(${parchmentTexture})`,
                backgroundRepeat: "repeat",
                backgroundSize: "500px", // Tile it
                backgroundBlendMode: "multiply",
            }}
        >
            {/* Global Overlay to soften the texture */}
            <div className="fixed inset-0 bg-background/80 pointer-events-none z-[-1]" />
            
            <Toaster />
            <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
