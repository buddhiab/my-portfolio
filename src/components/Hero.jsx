import portfolioConfig from "@/portfolio.config";

export function Hero() {
    return (
        <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-24 md:py-32 max-w-6xl mx-auto px-6">
            <div className="flex-1 space-y-8">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                    {portfolioConfig.name}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                    {portfolioConfig.aboutMe}
                </p>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
                <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-secondary/50 shadow-2xl">
                    {/* Placeholder for profile image */}
                    <img
                        src={portfolioConfig.profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </div>
            </div>
        </section>
    );
}
