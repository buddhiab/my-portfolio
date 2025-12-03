import { Badge } from "@/components/ui/badge";
import portfolioConfig from "@/portfolio.config";

const Skills = () => {
    return (
        <section id="skills" className="py-20 container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Languages */}
                <div className="flex flex-col gap-4 p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                        {portfolioConfig.skills.languages.map((skill) => (
                            <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                    </div>
                </div>

                {/* Frameworks */}
                <div className="flex flex-col gap-4 p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                        {portfolioConfig.skills.frameworks.map((skill) => (
                            <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                    </div>
                </div>

                {/* Tools */}
                <div className="flex flex-col gap-4 p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                        {portfolioConfig.skills.tools.map((skill) => (
                            <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
