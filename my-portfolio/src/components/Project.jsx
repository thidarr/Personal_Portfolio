import { projects } from '../data/project';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <section id="projects" className="px-4 md:px-8 ">
            <div className='border-t border-b border-line md:py-8 py-7'>
            <p className="font-mono text-accent mb-3  md:text-left text-center ">01. What I've built</p>
            <h2 className="text-4xl sm:text-5xl font-display text-white mb-5 md:text-left text-center">Projects</h2>

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