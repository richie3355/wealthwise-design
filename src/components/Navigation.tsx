import { Home, BarChart2, History, Settings, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: BarChart2, label: "Portfolio", path: "/portfolio" },
    { icon: History, label: "Transactions", path: "/transactions" },
    { icon: Settings, label: "Services", path: "/services" },
    { icon: User, label: "Profile", path: "/profile" }
  ];

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
      </div>
    </nav>
  );
};

export default Navigation;