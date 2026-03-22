import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "ホーム", href: "/" },
  { label: "協会情報", href: "/company-info" },
  { label: "資格・認定講座", href: "/course" },
  { label: "協会員一覧", href: "/member" },
  { label: "お問い合わせ", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "glass-nav py-3" : "bg-white py-5 border-b border-transparent"
      )}
    >
      <div className="container-inner flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start group">
          <span className="text-2xl md:text-3xl font-display font-black text-primary tracking-wider group-hover:text-accent transition-colors">
            JGAIA
          </span>
          <span className="text-[10px] md:text-xs font-bold text-muted-foreground tracking-widest mt-0.5">
            一般社団法人 日本生成AI協会
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent relative py-2",
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                  {location === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://connpass.com/user/jgaia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
              >
                イベント情報 <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>

          <div className="h-6 w-px bg-border mx-2"></div>

          <a
            href="https://www.jgaia.org/login.php"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-bold rounded-lg shadow-md hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            ログイン
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-white overflow-hidden"
          >
            <nav className="container-inner py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block py-2 text-base font-medium",
                    location === link.href ? "text-primary font-bold" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://connpass.com/user/jgaia/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-base font-medium text-muted-foreground flex items-center gap-2"
              >
                イベント情報 <ExternalLink className="w-4 h-4" />
              </a>
              <div className="pt-4 border-t border-border mt-2">
                <a
                  href="https://www.jgaia.org/login.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full justify-center px-5 py-3 bg-primary text-primary-foreground text-sm font-bold rounded-lg"
                >
                  ログイン
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
