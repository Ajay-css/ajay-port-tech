import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project6 from "../assets/projects/project6.jpg";

const projects = [
  {
    id: 1,
    category: "Web Development",
    title: "Xaviers Writer",
    image: project1,
    description:
      "AI-powered writing platform with intelligent content generation and modern editor experience.",
    tech: ["React", "Node.js", "MongoDB"],
  },

  {
    id: 2,
    category: "Web Development",
    title: "Eventra",
    image: project2,
    description:
      "Event management and ticket booking platform with premium user experience.",
    tech: ["React", "Express", "MongoDB"],
  },

  {
    id: 3,
    category: "Web Development",
    title: "Duo Stack",
    image: project3,
    description:
      "Freelancing brand website built for showcasing services and projects.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },

  {
    id: 4,
    category: "Data Analysis",
    title: "IPL Analytics",
    image: project4,
    description:
      "Interactive IPL dashboard with player insights and team analytics.",
    tech: ["Python", "Plotly", "Pandas"],
  },

  {
    id: 6,
    category: "Mobile Development",
    title: "Duo Lists",
    image: project6,
    description:
      "Cross-platform task management application built using React Native.",
    tech: ["React Native", "Expo", "Async Storage"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Grid Background */}

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.02]
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <p className="text-xs tracking-[0.35em] text-zinc-500">
          SELECTED WORKS
        </p>

        <h2 className="mt-4 text-5xl font-semibold text-white">
          Project Showcase
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          A collection of web applications,
          mobile experiences and analytics projects.
        </p>

        <div className="mt-20 space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`
                grid
                items-center
                gap-10
                lg:grid-cols-2
                ${index % 2 === 1
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
                }
              `}
            >
              {/* Browser Window */}

              <div
                className="
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/10
                  bg-[#070707]
                  shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
              >
                {/* Browser Header */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    border-b
                    border-white/10
                    px-5
                    py-3
                  "
                >
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />

                  <div
                    className="
                      ml-3
                      h-6
                      w-full
                      max-w-[250px]
                      rounded-full
                      bg-white/5
                    "
                  >
                    <span className="ml-3 mb-1 text-xs text-zinc-400">
                      {project.title}
                    </span>
                  </div>
                </div>

                <div
                  className="
    overflow-hidden
  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
      w-full

      h-[260px]
      sm:h-[380px]
      md:h-[300px]

      object-cover
      object-top

      transition-all
      duration-700

      hover:scale-[1.02]
    "
                  />
                </div>
              </div>

              {/* Details */}

              <div>
                <p
                  className="
                    text-xs
                    tracking-[0.35em]
                    text-zinc-500
                  "
                >
                  {project.category}
                </p>

                <h3
                  className="
                    mt-4
                    text-4xl
                    font-semibold
                    text-white
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-5
                    leading-relaxed
                    text-zinc-400
                  "
                >
                  {project.description}
                </p>

                <div
                  className="
                    mt-8
                    flex
                    flex-wrap
                    gap-3
                  "
                >
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-white/10
                        px-4
                        py-2
                        text-sm
                        text-zinc-300
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <button
                  className="
                    mt-10
                    rounded-full
                    border
                    border-white/10
                    px-6
                    py-3
                    text-white
                    transition-all
                    duration-300
                    hover:border-white/30
                    hover:bg-white/5
                  "
                >
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;