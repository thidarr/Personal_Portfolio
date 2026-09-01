import { useInView } from "react-intersection-observer";
import image from "../assets/selfphoto.jpg"

function About() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.15,
    });

    return (
        <section
            ref={ref}
            id="about"
            className={`md:px-8 px-4 md:text-left text-center transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            <div className="border-b border-line md:py-8 py-7">
                <p className="font-mono text-accent mb-4">02. Get to know me</p>
                <h2 className="text-4xl sm:text-5xl font-display text-white mb-5">About</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-5">
                    <div className="order-2 md:order-1 md:col-span-2 text-text leading-relaxed space-y-5">
                        <p>
                            I'm a recent ICT graduate from Rangsit University, where I completed a
                            4-month internship as a Front-End Developer at Sprouting Tech, building
                            responsive interfaces with React and Next.js across three client projects
                            under an Agile workflow.
                        </p>
                        <p>
                            Alongside development, I've worked on data-driven research, from
                            predicting tourist spending patterns with machine learning to simulating
                            how lifestyle habits affect student well-being. I like that both sides,
                            building interfaces and working with data, solve the same core problem:
                            making complex things clear and usable.
                        </p>
                        <p>
                            I'm currently looking for roles across web development, data, or ML/AI
                            where I can keep building and learning.
                        </p>

                        <div className="mt-5">
                            <h3 className="font-mono text-2xl font-medium text-text-h mb-4">Education</h3>
                            <p className="text-text leading-relaxed">
                                B.Sc. in Information and Communication Technology, Faculty of Information Technology
                            </p>
                            <p className="text-text leading-relaxed">Rangsit University · GPA 3.85</p>
                        </div>

                        <div className="mt-5">
                            <h3 className="font-mono text-2xl font-medium text-text-h mb-4">Skills</h3>
                            <ul className="font-mono text-sm space-y-3">
                                <li className="flex justify-between gap-4 border-b border-border pb-2">
                                    <span className="text-text shrink-0">Languages</span>
                                    <span className="text-text-h text-right"> Python, JavaScript</span>
                                </li>
                                <li className="flex justify-between gap-4 border-b border-border pb-2">
                                    <span className="text-text shrink-0">Frontend</span>
                                    <span className="text-text-h text-right">React, Next.js, Tailwind CSS</span>
                                </li>
                                <li className="flex justify-between gap-4 border-b border-border pb-2">
                                    <span className="text-text shrink-0">Data</span>
                                    <span className="text-text-h text-right">Scikit-learn, Pandas, Numpy, SQL, Power BI, Excel</span>
                                </li>
                                <li className="flex justify-between gap-4 border-b border-border pb-2">
                                    <span className="text-text shrink-0">Tools</span>
                                    <span className="text-text-h text-right">Git & GitHub, Figma, VS Code</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 relative w-full h-64 md:h-full">
                        <img
                            src={image}
                            alt="Portrait of me"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg border border-border"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;