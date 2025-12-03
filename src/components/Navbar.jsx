

export function Navbar() {
    const navItems = [
        { label: "Home", href: "#home" },
        { label: "Skills", href: "#skills" },
        { label: "Project", href: "#projects" },
        { label: "Contact Me", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-background/80 backdrop-blur-sm border-b border-border/40">
            <div className="flex-1" /> {/* Spacer for centering */}

            <div className="flex items-center gap-8">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {item.label}
                    </a>
                ))}
            </div>

            <div className="flex-1 flex justify-end gap-4">
            </div>
        </nav>
    );
}
