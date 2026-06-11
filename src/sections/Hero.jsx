import { useEffect, useState } from "react";
import IntroName from "../components/IntroName";
import TerminalWindow from "../components/TerminalWindow";

function Hero() {
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTerminal(true);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        px-4
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.03]
          blur-3xl
        "
      />

      <IntroName showTerminal={showTerminal} />

      <div className="relative z-10 w-full max-w-5xl">
        <TerminalWindow show={showTerminal} />
      </div>
    </section>
  );
}

export default Hero;