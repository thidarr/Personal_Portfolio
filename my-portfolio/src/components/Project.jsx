import { projects } from '../data/project';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <section id="projects" className="border-t border-line px-4 py-4 sm:px-8 sm:py-8">
            <p className="font-mono text-accent mb-3">01. What I've built</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;