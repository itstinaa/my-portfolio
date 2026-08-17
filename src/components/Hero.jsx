import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    if (!heroRef.current) return undefined;

    const ctx = gsap.context(() => {
      gsap.set(".code-window", {
        rotation: 2,
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .fromTo(
          ".availability",
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
        )

        .fromTo(
          ".hero-intro",
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
          },
          "-=0.2",
        )

        .fromTo(
          ".hero-title",
          {
            opacity: 0,
            x: -80,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
          },
          "-=0.3",
        )

        .fromTo(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.4",
        )

        .fromTo(
          ".hero-description",
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.3",
        )

        .fromTo(
          ".hero-buttons .button",
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.15,
          },
          "-=0.25",
        )

        .fromTo(
          ".hero-technologies span",
          {
            opacity: 0,
            y: 20,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.08,
          },
          "-=0.2",
        )

        .fromTo(
          ".code-window",
          {
            opacity: 0,
            x: 80,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
          },
          0.4,
        );

      gsap.to(".code-window", {
        y: -15,
        rotation: -1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });

      gsap.to(".hero-glow-one", {
        x: 40,
        y: -25,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-glow-two", {
        x: -35,
        y: 30,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-glow-three", {
        x: -50,
        y: 40,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".aurora-one", {
        x: 120,
        y: 60,
        scale: 1.15,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".aurora-two", {
        x: -100,
        y: -80,
        scale: 1.25,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".aurora-three", {
        x: 80,
        y: -40,
        scale: 1.1,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  

  <div className="hero-aurora">
    <div className="aurora aurora-one"></div>
    <div className="aurora aurora-two"></div>
    <div className="aurora aurora-three"></div>
  </div>

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>
      <div className="hero-glow hero-glow-three"></div>

      <div className="hero-content">
        <div className="availability">
          <span className="availability-dot"></span>
          Available for opportunities
        </div>

        <p className="hero-intro">Hello, I am</p>

        <h1 className="hero-title">
          Christine <span>Hampton</span>
        </h1>

        <h2 className="hero-subtitle">
          Full-Stack Developer
        </h2>

        <p className="hero-description">
          I create modern, responsive, and user-friendly websites using React,
          JavaScript, HTML, CSS, and modern web technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button">
            View Projects
          </a>

          <a href="#contact" className="button button-secondary">
            Contact Me
          </a>
        </div>

        <div className="hero-technologies">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="code-window">
          <div className="window-top">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span className="window-title">portfolio.js</span>
          </div>

          <div className="code-content">
            <pre>
              <code>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span> = {"{"}
                {"\n"}
                {"  "}name:{" "}
                <span className="code-green">
                  &quot;Christine Hampton&quot;
                </span>
                ,
                {"\n"}
                {"  "}role:{" "}
                <span className="code-green">
                  &quot;Full-Stack Developer&quot;
                </span>
                ,
                {"\n"}
                {"  "}skills: [
                {"\n"}
                {"    "}
                <span className="code-green">&quot;React&quot;</span>,
                {"\n"}
                {"    "}
                <span className="code-green">&quot;JavaScript&quot;</span>,
                {"\n"}
                {"    "}
                <span className="code-green">&quot;CSS&quot;</span>
                {"\n"}
                {"  "}],
                {"\n"}
                {"  "}creative:{" "}
                <span className="code-purple">true</span>
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;