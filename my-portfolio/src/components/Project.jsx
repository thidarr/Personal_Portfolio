import { useInView } from "react-intersection-observer";
import { projects } from '../data/project';
import ProjectCard from './ProjectCard';

function Projects() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section
            ref={ref}
            id="projects"
            className={`px-4 md:px-8 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            <div className='border-t border-b border-line md:py-8 py-7'>
                <p className="font-mono text-accent mb-3 md:text-left text-center">01. What I've built</p>
                <h2 className="text-4xl md:text-5xl font-display text-white mb-5 md:text-left text-center">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;