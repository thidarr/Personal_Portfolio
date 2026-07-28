function Contact() {
    return (
        <footer id="contact" className="px-4 sm:px-8 md:text-left  text-center md:py-8 py-7">
            <p className="font-mono text-accent mb-4">03. Contact</p>
            <h2 className="text-4xl sm:text-5xl font-display text-white mb-6">Get In Touch</h2>
            <p className="text-text mb-8 leading-relaxed">
                I'm currently looking for opportunities across web development, data,
                and ML/AI roles. Feel free to reach out — I'd love to hear from you.
            </p>

            <div className="flex flex-col items-center md:items-start">
                <a
                    href="mailto:thidaraung00iii@gmail.com"
                    className="inline-block px-7 py-3 font-mono text-sm border hover:border-accent hover:text-accent rounded-2xl transition-all duration-200 hover:bg-accent-bg hover:shadow-lg hover:shadow-accent/20 hover:scale-105 mb-8"
                >
                    Say Hello →
                </a>

                <div className="flex gap-6 font-mono text-sm">
                    <a href="https://github.com/thidarr" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent transition-colors">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent transition-colors">
                        LinkedIn
                    </a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent transition-colors">
                        Resume ↓
                    </a>
                </div>
            </div>

            <p className="border-t border-line font-mono text-xs text-text md:mt-7 mt-5 py-6">
                Built with React & Tailwind CSS.
            </p>
        </footer>
    );
}

export default Contact;