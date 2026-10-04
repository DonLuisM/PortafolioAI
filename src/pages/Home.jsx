import ShinyText from "../components/ShinyText";
import LogoCarrousel from "./LogoCarrousel";
import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <main className="pt-28">
      <section className="flex items-end gap-2 mb-4">
        <div className="flex flex-col gap-2">
          <ShinyText
            className="text-6xl font-bold"
            text="Luis Fernando Muñoz"
            speed={2.5}
            delay={0.2}
            color="#6775a6"
            shineColor="#acb4d1"
            spread={100}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
          <ShinyText
            className="text-6xl font-bold"
            text="Full Stack AI Developer"
            speed={2.5}
            delay={0.2}
            color="#6775a6"
            shineColor="#acb4d1"
            spread={100}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </div>

        <a
          href="https://github.com/DonLuisM"
          title="GitHub"
          target="_blank"
          className="mx-3 shadow-2xl transition-transform duration-300 hover:scale-110 focus-visible:scale-110"
        >
          <FaGithub className="text-4xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/luisf-munozb"
          title="LinkedIn"
          target="_blank"
          className="mx-3 shadow-2xl transition-transform duration-300 hover:scale-110 focus-visible:scale-110"
        >
          <FaLinkedin className="text-4xl" />
        </a>
        <a
          href="mailto:lfmb03@outlook.com"
          title="Contact Me"
          className="mx-3 shadow-2xl transition-transform duration-300 hover:scale-110 focus-visible:scale-110"
        >
          <FaEnvelope className="text-4xl" />
        </a>
        <a
          // href="lfmb03@outlook.com"
          title="Download CV"
          target="_blank"
          className="mx-3 shadow-2xl transition-transform duration-300 hover:scale-110 focus-visible:scale-110"
        >
          <FaFilePdf className="text-4xl" />
        </a>
      </section>

      <section className="w-[70%] text-xl text-[#f9fafb]">
        <p>
          I specialize in building end-to-end intelligent applications,
          seamlessly integrating advanced Machine Learning architectures with
          scalable software engineering. My focus centers on designing
          production-ready systems—from fine-tuning NLP, Computer Vision, and
          local LLM/RAG pipelines to building high-performance backend APIs and
          interactive frontend experiences. With a strong analytical foundation
          in Biomedical Engineering, I solve complex data and architectural
          challenges by building fast, reliable, and user-centric software
          solutions tailored for real-world execution.
        </p>
      </section>

      <section>
        <LogoCarrousel />
      </section>
    </main>
  );
}

export default Home;
