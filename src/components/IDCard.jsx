import { useEffect, useState } from "react";
import {
  motion,
  useAnimation,
} from "framer-motion";

import profile from "../assets/images/profile.webp";

function IDCard({
  strap,
  logo,
  unlocked,
  setUnlocked,
}) {
  const strapControls = useAnimation();
  const cardControls = useAnimation();

  const [isMobile, setIsMobile] =
    useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkDevice();

    window.addEventListener(
      "resize",
      checkDevice
    );

    return () =>
      window.removeEventListener(
        "resize",
        checkDevice
      );
  }, []);

  useEffect(() => {
    const runAnimation = async () => {
      await strapControls.start({
        y: -120,
        transition: {
          duration: 0.3,
        },
      });

      await cardControls.start({
        rotateY: unlocked ? 180 : 0,
        transition: {
          duration: 0.7,
        },
      });

      await strapControls.start({
        y: 0,
        transition: {
          duration: 0.3,
        },
      });
    };

    runAnimation();
  }, [
    unlocked,
    strapControls,
    cardControls,
  ]);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (!isMobile)
          setUnlocked(true);
      }}
      onMouseLeave={() => {
        if (!isMobile)
          setUnlocked(false);
      }}
      onClick={() => {
        if (isMobile)
          setUnlocked(!unlocked);
      }}
    >

      {/* Strap */}
      <motion.img
        src={strap}
        alt="strap"
        animate={strapControls}
        className="
          absolute
          left-1/2
          -top-[240px]
          z-0
          h-[330px]
          w-auto
          -translate-x-1/2
          select-none
          pointer-events-none
        "
      />

      {/* Protector */}
      <div
        className="
          absolute
          -inset-2
          rounded-[5px]
          border
          border-white/10
          bg-white/[0.02]
        "
      />

      {/* Card */}
      <motion.div
        animate={cardControls}
        style={{
          transformStyle:
            "preserve-3d",
        }}
        className="
          relative
          z-20
          h-[370px]
          w-[280px]
        "
      >

        {/* BACK SIDE */}
        <div
          style={{
            backfaceVisibility:
              "hidden",
          }}
          className="
            absolute
            inset-0
            flex
            flex-col
            items-center
            justify-center
            rounded-[5px]
            bg-white
          "
        >
          <img
            src={logo}
            alt="logo"
            className="w-150"
          />

          <p className="mt-4 text-xs tracking-[0.4em] text-zinc-500">
            ACCESS CARD
          </p>
        </div>

        {/* FRONT SIDE */}
        <div
          style={{
            transform:
              "rotateY(180deg)",
            backfaceVisibility:
              "hidden",
          }}
          className="
            absolute
            inset-0
            overflow-hidden
            rounded-[5px]
            bg-white
            text-black
          "
        >

          <div className="h-[62%]">
            <img
              src={profile}
              alt="profile"
              className="
                h-full
                w-full
                object-cover
                object-[center_10%]
              "
            />
          </div>

          <div className="p-4">

            {/* <p className="text-[10px] tracking-[0.3em] text-zinc-500">
              EMPLOYEE PROFILE
            </p> */}

            <h3 className="mt-1 text-lg font-semibold">
              AJAY ARUMUGAM
            </h3>

            <div className="mt-2 space-y-2 text-sm text-zinc-600">
              <p>Web Developer</p>
              <p>Mobile App Developer</p>
              <p>Data Analyst</p>
            </div>

          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default IDCard;