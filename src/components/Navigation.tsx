import { Home, BarChart2, History, Settings, MoreHorizontal, Rss, Trophy, Vault, Bell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: BarChart2, label: "Portfolio", path: "/portfolio" },
    { icon: History, label: "Transactions", path: "/transactions" },
    { icon: Settings, label: "Services", path: "/services" }
  ];

  const moreOptions = [
    { icon: Rss, label: "Feed", path: "/feed" },
    { icon: Trophy, label: "Gamification", path: "/gamification" },
    { icon: Vault, label: "Vault", path: "/vault" },
    { icon: Bell, label: "Notifications", path: "/notifications" }
  ];

  // Keep sheet open if we're on a more options page
  useEffect(() => {
    const isMorePage = moreOptions.some(option => option.path === location.pathname);
    setIsMoreOpen(isMorePage);
  }, [location.pathname]);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 px-6 py-2 z-50">
      <div className="max-w-md mx-auto flex justify-between items-center">
        {navItems.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center p-2 transition-all duration-200 ease-in-out ${
              location.pathname === path
                ? "text-primary"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-xs mt-1">{label}</span>
          </Link>
        ))}
        
        <Sheet open={isMoreOpen} onOpenChange={setIsMoreOpen}>
          <SheetTrigger className="flex flex-col items-center p-2 text-gray-400 hover:text-gray-600">
            <MoreHorizontal className="w-5 h-5" />
            <span className="text-xs mt-1">More</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <SheetHeader>
              <SheetTitle>More Options</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-4">
              {moreOptions.map(({ icon: Icon, label, path }) => (
                <Link
                  key={label}
                  to={path}
                  className={`w-full flex items-center gap-3 p-3 text-left text-sm hover:bg-gray-100 rounded-lg transition-colors ${
                    location.pathname === path ? "text-primary bg-primary/10" : ""
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
