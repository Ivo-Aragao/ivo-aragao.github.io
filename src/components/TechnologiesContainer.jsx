import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiJava,
    DiReact,
    DiPython 
} from "react-icons/di";

import '../styles/components/technologiescontainer.sass';

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Linguagem de marcação para estruturação de páginas web." },
    { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Estilização e design para páginas web." },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "Linguagem de programação para interatividade em páginas web." },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: "Ambiente de execução JavaScript no lado do servidor." },
    { id: "java", name: "Java", icon: <DiJava />, description: "Linguagem de programação de propósito geral." },
    { id: "react", name: "React", icon: <DiReact />, description: "Biblioteca JavaScript para construção de interfaces de usuário." },
    { id: "python", name: "Python", icon: <DiPython />, description: "Linguagem de programação versátil, utilizada como desenvolvimento web, automação e inteligência artificial." },
];

const TechnologiesContainer = () => {
    return (
        <section className='technologies-container'>
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnologiesContainer;
