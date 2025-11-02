import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SideNavProps {
  items: Array<{ id: string; label: string }>;
}

const SideNav = ({ items }: SideNavProps) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-24 hidden lg:block w-64 h-fit">
      <div className="border-l-2 border-border pl-4">
        <p className="text-sm font-semibold text-foreground mb-4">On this page</p>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-sm text-left w-full transition-colors hover:text-primary",
                  activeSection === item.id
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;

