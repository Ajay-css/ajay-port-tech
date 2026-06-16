import CreditCard from "../components/CreditCard";

import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import javascript from "../assets/icons/javascript.svg";
import react from "../assets/icons/react.svg";

import node from "../assets/icons/nodejs.svg";
import express from "../assets/icons/expressjs.svg";
import mongodb from "../assets/icons/mongodb.svg";
import mysql from "../assets/icons/mysql.svg";

import flutter from "../assets/icons/flutter.svg";

import python from "../assets/icons/python.svg";
import excel from "../assets/icons/excel.svg";
import powerbi from "../assets/icons/powerbi.svg";
import chip from "../assets/images/chip.png";

import SBW from "../assets/images/SBW.png";
import UB from "../assets/images/UB.png";
import RB from "../assets/images/RB.png";

const skillGroups = [
  {
    title: "SBWD",
    img: SBW,
    subtitle: "State Bank of Web Development",
    skills: [
      {
        skill: "HTML",
        icon: html,
        bank: "SBWD",
        division: "Frontend Division",
        number: "1991 0220 1991 0001",
      },
      {
        skill: "CSS",
        icon: css,
        bank: "SBWD",
        division: "Frontend Division",
        number: "1991 0220 1991 0002",
      },
      {
        skill: "JavaScript",
        icon: javascript,
        bank: "SBWD",
        division: "Frontend Division",
        number: "1991 0220 1991 0003",
      },
      {
        skill: "React",
        icon: react,
        bank: "SBWD",
        division: "Frontend Division",
        number: "1991 0220 1991 0004",
      },
    ],
  },

  {
    title: "UBBD",
    img: UB,
    subtitle: "Union Bank of Backend Development",
    skills: [
      {
        skill: "Node.js",
        icon: node,
        bank: "UBDA",
        division: "Backend Systems",
        number: "1991 0220 1991 0005",
      },
      {
        skill: "Express",
        icon: express,
        bank: "UBDA",
        division: "Backend Systems",
        number: "1991 0220 1991 0006",
      },
      {
        skill: "MongoDB",
        icon: mongodb,
        bank: "UBDA",
        division: "Backend Systems",
        number: "1991 0220 1991 0007",
      },
      {
        skill: "MySQL",
        icon: mysql,
        bank: "UBDA",
        division: "Backend Systems",
        number: "1991 0220 1991 0008",
      },
    ],
  },

  {
    title: "RBD",
    img: RB,
    subtitle: "Reserve Bank of Data Analytics",
    skills: [
      {
        skill: "Python",
        icon: python,
        bank: "RMD",
        division: "Analytics Division",
        number: "1991 0220 1991 0009",
      },
      {
        skill: "Excel",
        icon: excel,
        bank: "RMD",
        division: "Analytics Division",
        number: "1991 0220 1991 0010",
      },
      {
        skill: "Power BI",
        icon: powerbi,
        bank: "RMD",
        division: "Analytics Division",
        number: "1991 0220 1991 0011",
      },
    ],
  },
];

function Skills() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs tracking-[0.35em] text-zinc-500">
          TECHNOLOGY ASSETS
        </p>

        <h2 className="mt-4 text-5xl font-semibold text-white">
          My Skills Bank
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Verified technology assets categorized across development,
          backend systems, mobile engineering and analytics.
        </p>

        {skillGroups.map((group) => (
          <div key={group.title} className="mt-16">
            {/* Bank Header */}
            <div className="mb-8">
              <h3 className="text-3xl font-semibold text-white">
                <img src={group.img} alt="img" className="inline-block h-8 w-8 mr-2 mb-2" />
                {group.title}
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                {group.subtitle}
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {group.skills.map((skill) => (
                <CreditCard
                  key={skill.skill}
                  {...skill}
                  chip={chip}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>
        {`

  @keyframes cardshine {
    from {
      transform: translateX(-100%) rotate(18deg);
    }

    to {
      transform: translateX(250%) rotate(18deg);
    }
  }

  @keyframes borderLightning {

    0% {
      transform: translateX(-120%);
      opacity: 0;
    }

    2% {
      opacity: 1;
    }

    8% {
      transform: translateX(120%);
      opacity: 1;
    }

    10% {
      opacity: 0;
    }

    100% {
      transform: translateX(120%);
      opacity: 0;
    }
  }

  .premium-border{
    position:absolute;
    inset:0;
    border-radius:10px;
    pointer-events:none;
    overflow:hidden;
}

.border-light{
    position:absolute;
    top:0;
    left:-30%;

    width:30%;
    height:2px;

    background:linear-gradient(
      90deg,
      transparent,
      #fbbf24,
      #fff2b0,
      transparent
    );

    animation:borderTravel 8s linear infinite;
}
  `}
      </style>
    </section>
  );
}

export default Skills;