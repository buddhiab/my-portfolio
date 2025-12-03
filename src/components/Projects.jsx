import { ExternalLink, Github } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import portfolioConfig from "@/portfolio.config";

const Projects = () => {
    return (
        <section id="projects" className="py-20 container mx-auto px-4 bg-muted/50">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioConfig.projects.map((project, index) => (
                    <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" className="text-xs">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <CardDescription className="text-base">
                                {project.description}
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="flex gap-4">
                            {project.repoLink && (
                                <Button variant="outline" size="sm" asChild className="w-full">
                                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4" /> Code
                                    </a>
                                </Button>
                            )}
                            {project.liveLink && (
                                <Button size="sm" asChild className="w-full">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                    </a>
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Projects;
