function ProjectCard({ project }) {
    return (
        <div className="border border-border rounded-lg p-6 hover:-translate-y-1 transition-transform duration-200">
            <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
            <p className="text-text mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-accent border border-accent rounded-full px-2 py-1">
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex gap-4">
                <a href={project.demoLink} className="font-mono text-sm text-accent hover:underline">
                    Live Demo →
                </a>
                <a href={project.githubLink} className="font-mono text-sm text-text-h hover:text-accent hover:underline">
                    GitHub →
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;