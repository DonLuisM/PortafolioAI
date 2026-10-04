import { SiPython, SiReact, SiTailwindcss } from "react-icons/si";

const projects = [
  {
    title: "CortexiRag-Bot",
    description:
      "Desarrollé un sistema RAG para procesar manuales técnicos utilizando LLMs open-source locales (LLaMA, Qwen) y técnicas avanzadas de segmentación para optimizar la precisión de las respuestas.",
    image: "src/assets/interfaz_function.jpg",
    stacks: [<SiPython />, "LangChain", "Ollama", "Streamlit", "LangSmith"],
    githubLink: "https://github.com/DonLuisM/CORTEXiRAG-BOT.git",
    demoLink: "http",
  },
  {
    title: "Project 2",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam quos tenetur pariatur obcaecati expedita temporibus corporis",
    image: "IMG",
    stacks: [<SiReact />, <SiTailwindcss />, "Python"],
    githubLink: "http",
    demoLink: "http",
  },
  {
    title: "Project 3",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam quos tenetur pariatur obcaecati expedita temporibus corporis",
    image: "IMG",
    stacks: ["Docker", "CSS", "Python"],
    githubLink: "http",
    demoLink: "http",
  },
  {
    title: "Project 4",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam quos tenetur pariatur obcaecati expedita temporibus corporis",
    image: "IMG",
    stacks: ["Docker", "CSS", "Cursor"],
    githubLink: "http",
    demoLink: "http",
  },
  {
    title: "Project 5",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam quos tenetur pariatur obcaecati expedita temporibus corporis",
    image: "IMG",
    stacks: ["Docker", "CSS", "Cursor"],
    githubLink: "http",
    demoLink: "http",
  },
  {
    title: "Project 6",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam quos tenetur pariatur obcaecati expedita temporibus corporis",
    image: "IMG",
    stacks: ["Docker", "Tailwind", "Python"],
    githubLink: "http",
    demoLink: "http",
  },
];

function Projects() {
  return (
    <section className="mt-7 ">
      <h2 className="text-2xl font-medium">Projects</h2>
      <ul className="grid grid-cols-3 gap-4 mt-5">
        {projects.map((project, index) => (
          <li
            key={index}
            className="bg-[hsla(227,26%,47%,5%)] flex flex-col gap-2 px-4 py-5 shadow text-[#f9fafb]"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p>{project.description}</p>
            <img
              src={project.image}
              alt={project.title}
              className="my-3 rounded-md"
            />
            <div className="flex items-center justify-center flex-wrap gap-2 mt-3">
              {project.stacks.map((stack, i) => (
                <span
                  key={i}
                  className="bg-[hsl(225,32%,38%)] px-2 py-2 rounded-md text-sm hover:-translate-y-1 transition-transform duration-200"
                >
                  {stack}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-center gap-4 mt-3">
              <a href={project.githubLink} target="_blank">
                GitHub
              </a>
              <a href={project.demoLink} target="_blank">
                Demo
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
