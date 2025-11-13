import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import logoUrl from "@assets/strimdex-logo_1762971356023.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home">
            <img src={logoUrl} alt="Strimdex" className="h-8" />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/#features" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-features">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-how-it-works">
              How It Works
            </Link>
            <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-services">
              Services
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="default" data-testid="button-login">
              Login
            </Button>
            <Button size="default" data-testid="button-signup">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
