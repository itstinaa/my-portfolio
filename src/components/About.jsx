import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return undefined;

    const ctx = gsap.context(() => {
      // Make sure everything is visible before animation setup
      gsap.set(
        [
          ".about-heading-label",
          ".about-heading-title",
          ".about-text h3",
          ".about-paragraph",
          ".about-details > div",
          ".about-button",
        ],
        {
          autoAlpha: 1,
        },
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".about-heading-label",
        {
          autoAlpha: 0,
          y: 30,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
      )

        .fromTo(
          ".about-heading-title",
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
          "-=0.3",
        )

        .fromTo(
          ".about-text h3",
          {
            autoAlpha: 0,
            x: 50,
          },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )

        .fromTo(
          ".about-paragraph",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4",
        )

        .fromTo(
          ".about-details > div",
          {
            autoAlpha: 0,
            y: 30,
            scale: 0.95,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.25",
        )

        .fromTo(
          ".about-button",
          {
            autoAlpha: 0,
            y: 25,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.2",
        );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="about" className="section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-heading">
          <p className="about-heading-label">
            Get to know me
          </p>

          <h2 className="about-heading-title">
            About Me
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>
              I build engaging digital experiences.
            </h3>

            <p className="about-paragraph">
              I am a full-stack developer who enjoys turning ideas into clean,
              responsive, and accessible websites.
            </p>

            <p className="about-paragraph">
              I am currently developing my skills in React, JavaScript, HTML,
              CSS, Git, and modern web-development tools.
            </p>

            <div className="about-details">
              <div>
                <strong>Location</strong>
                <span>Your Location</span>
              </div>

              <div>
                <strong>Focus</strong>
                <span>Front-End Development</span>
              </div>

              <div>
                <strong>Experience</strong>
                <span>Personal Projects</span>
              </div>

              <div>
                <strong>Availability</strong>
                <span>Open to Opportunities</span>
              </div>
            </div>

            <a
              href="#contact"
              className="button about-button"
            >
              Let&apos;s Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;