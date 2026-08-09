import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import pharmaImage from "../assets/pharma_crm.png";
import travelImage from "../assets/travelrecommendation.png";
import financeImage from "../assets/wallet_vision.png";
import gymImage from "../assets/ironforge.png";
import cafeImage from "../assets/cafe brew.png";

const projects = [
  {
  id: 1,
  number: "01",
  title: "Pharmaceutical CRM",
  description:
    "A modern and responsive CRM application for managing pharmaceutical sales and customer relationships.",
  technologies: ["React", "CSS", "Vite"],
  image: pharmaImage,
  liveUrl: "#",
  githubUrl: "#",
  },

  {
    id: 2,
    number: "02",
    title: "Travel Recommendation Application",
    description:
      "A travel recommendation application that suggests destinations based on user preferences and real-time data.",
    technologies: ["JavaScript", "API", "CSS"],
    image: travelImage,
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    id: 3,
    number: "03",
    title: "Finance Dashboard",
    description:
      "A comprehensive finance dashboard for tracking and analyzing financial data.",
    technologies: ["React", "JavaScript", "CSS"],
    image: financeImage,
    liveUrl: "https://wallet-vision.netlify.app/",
    githubUrl: "#",
  },

  {
    id: 4,
    number: "04",
    title: "Gym Website",
    description:
      "A modern and responsive website for a fitness center.",
    technologies: ["React", "JavaScript", "CSS"],
    image: gymImage,
    liveUrl: "https://gymironforgee.netlify.app/",
    githubUrl: "#",
  },

  {
    id: 5,
    number: "05",
    title: "Cafe Brew Website",
    description:
      "A modern and responsive website for a coffee shop.",
    technologies: ["Astro", "HTML", "CSS"],
    image: cafeImage,
    liveUrl: "https://brewi.netlify.app/",
    githubUrl: "#",
  },

  {
    id: 6,
    number: "06",
    title: "SAAS Dashboard",
    description:
      "A comprehensive dashboard for managing and analyzing SaaS metrics.",
    technologies: ["React", "JavaScript", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },



];

function Projects() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !sectionRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.from(
        ".section-heading, .project-card",
        {
          opacity: 0,
          y: 35,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.from(
        ".project-number",
        {
          opacity: 0,
          x: -20,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="projects" className="section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-heading">
          <p>Some things I have built</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-image">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                  />
                ) : (
                  <div className="project-placeholder">
                    <span>Project Preview</span>
                  </div>
                )}

                <span className="project-number">
                  {project.number}
                </span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;