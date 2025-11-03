import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/research", label: "Research" },
    { path: "/publications", label: "Publications" },
    { path: "/patents", label: "Patents" },
    { path: "/teaching", label: "Teaching" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto max-w-6xl px-6">
        <nav className="flex h-16 items-center justify-between">
          <Link 
            to="/" 
            className="font-heading text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Ankita Nayak
          </Link>
          
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === item.path
                      ? "text-primary font-semibold"
                      : "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
