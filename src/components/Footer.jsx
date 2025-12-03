import portfolioConfig from "@/portfolio.config";

const Footer = () => {
    return (
        <footer className="py-8 border-t bg-background">
            <div className="container mx-auto px-4 text-center text-muted-foreground">
                <p>
                    &copy; {new Date().getFullYear()} {portfolioConfig.name}. All rights reserved.
                </p>
                <p className="text-sm mt-2">
                    Built with React, Tailwind CSS, and shadcn/ui.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
