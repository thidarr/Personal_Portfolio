function ProjectCard({ project }) {
    return (
        <div className="border border-border rounded-lg md:text-left text-center p-6 hover:-translate-y-1 transition-transform duration-200">
            <h3 className="md:text-xl text-lg font-medium text-white mb-4">{project.title}</h3>
            <p className="text-text text-sm mb-5 leading-relaxed ">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-5 md:justify-start justify-center">
                {project.stack.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-accent border border-accent rounded-full px-2 py-1">
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex gap-4 md:justify-start justify-center">
                {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-text-h hover:text-accent hover:underline">
                        {project.demoLabel} →
                    </a>
                )}
                <a href={project.githubLink} target="_blank" rel="nopener noreferrer" className="font-mono text-sm text-text-h hover:text-accent hover:underline">
                    GitHub →
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;