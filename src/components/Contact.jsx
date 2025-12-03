import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import portfolioConfig from "@/portfolio.config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Contact Me</h2>
                    <p className="text-muted-foreground text-lg">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Get in Touch</CardTitle>
                                <CardDescription>
                                    Feel free to reach out through any of these platforms.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <a
                                    href={portfolioConfig.socialLinks.email}
                                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <div className="bg-primary/10 p-2 rounded-full">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <span>{portfolioConfig.socialLinks.email.replace("mailto:", "")}</span>
                                </a>

                                <div className="flex gap-4 mt-6">
                                    <a
                                        href={portfolioConfig.socialLinks.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-background p-3 rounded-full border hover:border-primary hover:text-primary transition-all shadow-sm"
                                        aria-label="GitHub"
                                    >
                                        <Github className="h-5 w-5" />
                                    </a>
                                    <a
                                        href={portfolioConfig.socialLinks.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-background p-3 rounded-full border hover:border-primary hover:text-primary transition-all shadow-sm"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                    <a
                                        href={portfolioConfig.socialLinks.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-background p-3 rounded-full border hover:border-primary hover:text-primary transition-all shadow-sm"
                                        aria-label="Twitter"
                                    >
                                        <Twitter className="h-5 w-5" />
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Send a Message</CardTitle>
                            <CardDescription>
                                I'll get back to you as soon as possible.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                                        <Input id="name" placeholder="John Doe" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                                        <Input id="email" type="email" placeholder="john@example.com" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                                    <Textarea
                                        id="message"
                                        placeholder="Your message here..."
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full">
                                    <Send className="mr-2 h-4 w-4" /> Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export { Contact };
