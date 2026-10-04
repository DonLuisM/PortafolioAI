import LogoLoop from "../components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiMysql,
  SiDocker,
  SiGit,
  SiLangchain,
  SiOllama,
  SiStreamlit,
  SiLanggraph,
  SiFastapi,
} from "react-icons/si";

const techLogos = [
  {
    node: <SiReact />,
    title: "React",
  },
  {
    node: <SiNextdotjs />,
    title: "Next.js",
  },
  {
    node: <SiPython />,
    title: "Python",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
  },
  {
    node: <SiMysql />,
    title: "MySQL",
  },
  {
    node: <SiDocker />,
    title: "Docker",
  },

  {
    node: <SiGit />,
    title: "Git",
  },
  {
    node: <SiLangchain />,
    title: "Langchain",
  },
  {
    node: <SiOllama />,
    title: "Ollama",
  },
  {
    node: <SiStreamlit />,
    title: "Streamlit",
  },
  {
    node: <SiLanggraph />,
    title: "Langgraph",
  },
  {
    node: <SiFastapi />,
    title: "FastAPI",
  },
];

function LogoCarrousel() {
  return (
    <div className="text-[#f9fafb] area items-center justify-center w-full py-10">
      <LogoLoop
        logos={techLogos}
        speed={60}
        direction="left"
        logoHeight={60}
        gap={70}
        hoverSpeed={20}
        scaleOnHover
        fadeOut
        fadeOutColor="#030b11"
        ariaLabel="Tech Skills"
      />
    </div>
  );
}

export default LogoCarrousel;
