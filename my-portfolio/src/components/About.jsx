import image from "../assets/selfphoto.png"
function About() {
    return (
        <section id="about" className="border-t border-line sm:px-8 sm:py-8 px-4 py-4">
            <p className="font-mono text-accent mb-2">02. Get to know me</p>
            <h2 className="text-3xl font-bold text-white mb-8">About</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="order-2 md:order-1 md:col-span-2 text-text leading-relaxed space-y-4">
                    <p>
                        I'm a recent graduate who completed an internship as a web developer,
                        where I [mention something specific you built or learned].
                    </p>
                    <p>
                        Since then, I've been exploring data and machine learning, drawn to
                        [why — e.g. "the process of turning raw numbers into decisions"].
                        I like that both sides—building interfaces and understanding data—
                        solve the same core problem: making complex things usable.
                    </p>
                    <p>
                        I'm currently looking for roles across web development, data, or ML/AI
                        where I can keep building and learning.
                    </p>

                    <div className="mt-6">
                        <p className="font-mono text-sm text-text-h mb-1">Education</p>
                        <p className="text-text text-sm">
                            B.Sc. in Information and Communication Technology, Faculty of Information Technology
                        </p>
                        <p className="text-text text-sm">Rangsit University</p>
                    </div>

                    <ul className="font-mono text-sm space-y-3">
                        <li className="flex justify-between border-b border-border pb-2">
                            <span className="text-text">Languages</span>
                            <span className="text-text-h">JavaScript, Python, SQL</span>
                        </li>
                        <li className="flex justify-between border-b border-border pb-2">
                            <span className="text-text">Frontend</span>
                            <span className="text-text-h">React, Tailwind</span>
                        </li>
                        <li className="flex justify-between border-b border-border pb-2">
                            <span className="text-text">Data</span>
                            <span className="text-text-h">pandas, SQL</span>
                        </li>
                        <li className="flex justify-between border-b border-border pb-2">
                            <span className="text-text">Tools</span>
                            <span className="text-text-h">Git, VS Code</span>
                        </li>
                    </ul>
                </div>
                <div className="order-1 md:order-2 relative w-full h-64 md:h-full">
                    <img
                        src={image}
                        alt="Portrait of me"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg border border-border"
                    />
                </div>

            </div>
        </section>
    );
}

export default About;