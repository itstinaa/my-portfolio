import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: "HTML",
    description: "Semantic and accessible page structure",
    icon: SiHtml5,
  },
  {
    name: "CSS",
    description: "Responsive layouts and modern styling",
    icon: SiCss,
  },
  {
    name: "JavaScript",
    description: "Interactive and dynamic interfaces",
    icon: SiJavascript,
  },
  {
    name: "React",
    description: "Reusable component-based applications",
    icon: SiReact,
  },
  {
    name: "Git",
    description: "Source control and project history",
    icon: SiGit,
  },
  {
    name: "GitHub",
    description: "Code hosting and collaboration",
    icon: SiGithub,
  },
  {
    name: "Next.js",
    description: "Server-side rendering and static site generation",
    icon: SiNextdotjs,
  },
  {
    name: "MongoDB",
    description: "Database management and querying",
    icon: SiMongodb,
  },
];

function Skills() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const sliderTween = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !trackRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      timeline
        .fromTo(
          ".skills-heading-text",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
        )

        .fromTo(
          ".skills-heading-title",
          {
            autoAlpha: 0,
            y: 60,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3",
        )

        .fromTo(
          ".skills-slider",
          {
            autoAlpha: 0,
            y: 50,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        );

      /*
        We duplicate the cards in JSX.

        Moving the track by 50% creates the illusion
        that the cards continue forever.
      */
      sliderTween.current = gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 25,
        ease: "none",
        repeat: -1,
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      if (sliderTween.current) {
        sliderTween.current.kill();
      }

      ctx.revert();
    };
  }, []);

  const pauseSlider = () => {
    sliderTween.current?.pause();
  };

  const resumeSlider = () => {
    sliderTween.current?.resume();
  };

  const handleMouseEnter = (event) => {
    const card = event.currentTarget;
    const icon = card.querySelector(".skill-icon");
    const number = card.querySelector(".skill-number");

    gsap.to(card, {
      y: -12,
      scale: 1.03,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(icon, {
      y: -5,
      scale: 1.18,
      rotation: 8,
      duration: 0.35,
      ease: "back.out(2)",
    });

    gsap.to(number, {
      x: 5,
      opacity: 1,
      duration: 0.3,
    });
  };

  const handleMouseLeave = (event) => {
    const card = event.currentTarget;
    const icon = card.querySelector(".skill-icon");
    const number = card.querySelector(".skill-number");

    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: "power2.out",
    });

    gsap.to(icon, {
      y: 0,
      scale: 1,
      rotation: 0,
      duration: 0.35,
      ease: "power2.out",
    });

    gsap.to(number, {
      x: 0,
      opacity: 0.5,
      duration: 0.3,
    });
  };

  const sliderSkills = [...skills, ...skills];

  return (
    <section
      id="skills"
      className="section section-dark"
      ref={sectionRef}
    >
      <div className="section-container">
        <div className="section-heading light">
          <p className="skills-heading-text">
            Technologies I use
          </p>

          <h2 className="skills-heading-title">
            My Skills
          </h2>
        </div>
      </div>

      <div
        className="skills-slider"
        onMouseEnter={pauseSlider}
        onMouseLeave={resumeSlider}
      >
        <div className="skills-slider-fade skills-slider-fade-left"></div>

        <div
          className="skills-track"
          ref={trackRef}
        >
          {sliderSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <article
                className="skill-card slider-skill-card"
                key={`${skill.name}-${index}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="skill-card-top">
                  <div className="skill-icon-wrapper">
                    <Icon className="skill-icon" />
                  </div>

                  <span className="skill-number">
                    {String(
                      (index % skills.length) + 1,
                    ).padStart(2, "0")}
                  </span>
                </div>

                <h3>{skill.name}</h3>

                <p>{skill.description}</p>

                <div className="skill-line"></div>
              </article>
            );
          })}
        </div>

        <div className="skills-slider-fade skills-slider-fade-right"></div>
      </div>
    </section>
  );
}

export default Skills;