import { Link } from "wouter";

const FOOTER_LINKS = [
  { label: "ホーム", href: "/" },
  { label: "協会情報", href: "/company-info" },
  { label: "資格・認定講座", href: "/course" },
  { label: "協会員一覧", href: "/member" },
  { label: "お問い合わせ", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container-inner flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl font-display font-black tracking-widest mb-1">JGAIA</h2>
          <p className="text-sm text-primary-foreground/80 font-medium tracking-wider mb-4">
            一般社団法人 日本生成AI協会
          </p>
          <p className="text-xs text-primary-foreground/60 max-w-xs">
            生成AI技術の普及と発展をリードし、日本の産業や学術界における革新的な成長を促進します。
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-end">
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 mb-8">
            {FOOTER_LINKS.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-sm font-medium text-primary-foreground/80 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="container-inner mt-12 pt-8 border-t border-primary-foreground/10 text-center">
        <p className="text-xs text-primary-foreground/50 font-display">
          © {new Date().getFullYear()} JGAIA All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
