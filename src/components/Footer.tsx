import { Linkedin, GraduationCap, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ankita Nayak. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/nayak-ankita/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=aksRSh0AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Google Scholar Profile"
            >
              <GraduationCap className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Last Updated: January 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
