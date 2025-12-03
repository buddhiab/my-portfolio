export function Logos() {
    const logos = [
        { name: "ClickUp", width: 100 },
        { name: "Dropbox", width: 110 },
        { name: "Paychex", width: 120 },
        { name: "Elastic", width: 90 },
        { name: "Stripe", width: 80 },
    ];

    return (
        <section className="py-12 max-w-6xl mx-auto px-6">
            <p className="text-sm font-mono text-muted-foreground mb-6">Worked with</p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {logos.map((logo) => (
                    <div
                        key={logo.name}
                        className="h-16 flex items-center justify-center bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group cursor-default"
                    >
                        <span className="text-xl font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                            {logo.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
