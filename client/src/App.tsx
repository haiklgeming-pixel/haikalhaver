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

function Router() {
  return (
    <>
      <Intro />
      <Switch>
        <Route path="/" component={Home} /> {/* Intro will redirect to /home actually, but initial load handles / */}
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
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
