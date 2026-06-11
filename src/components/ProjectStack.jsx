import {
  useEffect,
  useState,
} from "react";

import ProjectCard from "./ProjectCard";

function ProjectStack({ projects }) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  useEffect(() => {
    let locked = false;

    const handleWheel = (e) => {
      if (locked) return;

      locked = true;

      if (
        e.deltaY > 0 &&
        activeIndex < projects.length - 1
      ) {
        setActiveIndex((prev) => prev + 1);
      }

      if (
        e.deltaY < 0 &&
        activeIndex > 0
      ) {
        setActiveIndex((prev) => prev - 1);
      }

      setTimeout(() => {
        locked = false;
      }, 700);
    };

    window.addEventListener(
      "wheel",
      handleWheel,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "wheel",
        handleWheel
      );
  }, [activeIndex, projects.length]);

  return (
    <div
      className="
        relative
        mt-20
        mx-auto
        max-w-5xl

        h-[320px]
        sm:h-[420px]
        md:h-[620px]
      "
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          activeIndex={activeIndex}
        />
      ))}
    </div>
  );
}

export default ProjectStack;