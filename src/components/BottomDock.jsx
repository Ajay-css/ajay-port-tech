import { NavLink } from "react-router-dom";

import HomeIcon from "../assets/icons/Home.png";
import UserIcon from "../assets/icons/User.png";
import AlbumIcon from "../assets/icons/Album.png";
import SkillsIcon from "../assets/icons/Skills.png";
import ContactIcon from "../assets/icons/Contact.png";

const navItems = [
  { icon: HomeIcon, path: "/" },
  { icon: UserIcon, path: "/about" },
  { icon: SkillsIcon, path: "/skills" },
  { icon: AlbumIcon, path: "/projects" },
  { icon: ContactIcon, path: "/contact" },
];

function BottomDock() {
  return (
    <div
      className="
        fixed
        bottom-5
        left-1/2
        z-[999]
        -translate-x-1/2
      "
    >
      <div
        className="
          flex
          items-center
          gap-2

          rounded-full

          border
          border-white/10

          bg-black/45
          backdrop-blur-2xl

          px-3
          py-2

          shadow-[0_10px_40px_rgba(0,0,0,0.45)]
        "
      >
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
          >
            {({ isActive }) => (
              <div
                className={`
                  flex
                  items-center
                  justify-center

                  h-11
                  w-11

                  md:h-12
                  md:w-12

                  rounded-full

                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        bg-white/12
                        border
                        border-white/15
                        scale-110
                      `
                      : `
                        hover:bg-white/5
                        hover:scale-105
                      `
                  }
                `}
              >
                <img
                  src={item.icon}
                  alt="dock icon"
                  className={`
                    object-contain

                    w-5
                    h-5

                    md:w-6
                    md:h-6

                    brightness-0
                    invert

                    transition-all
                    duration-300

                    ${
                      isActive
                        ? ""
                        : "brightness-0 invert"
                    }
                  `}
                />
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default BottomDock;