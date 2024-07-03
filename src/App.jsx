import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import LoadingOverlay from "./components/LoadingOverlay";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Calendar, Building, Users, BookOpen, FileText } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import Events from "./pages/Events.jsx"; // Import the new Events page
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "События",
    to: "/events",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    title: "Объекты",
    to: "/objects",
    icon: <Building className="h-4 w-4" />,
  },
  {
    title: "Компании",
    to: "/companies",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Персонал",
    to: "/staff",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Системный журнал",
    to: "/system-log",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Справочники",
    to: "/directories",
    icon: <BookOpen className="h-4 w-4" />,
  },
];

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {loading && <LoadingOverlay />}
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="events" element={<Events />} />
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
