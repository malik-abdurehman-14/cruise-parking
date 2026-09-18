"use client";

import { useEffect, useState } from "react";

function Preloader() {
  const [loading, setLoading] = useState(true);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setZoom(true);

      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 700);

      return () => clearTimeout(removeTimer);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[99999]

        flex
        items-center
        justify-center

        overflow-hidden

        bg-white
      "
    >
      <img
        src="/logo.gif"
        alt="Loading..."
        className={`
          w-auto
          sm:h-[200px]
          h-[100px]

          transition-all
          duration-700
          ease-in

          ${zoom ? "scale-[10] opacity-0" : "scale-100 opacity-100"}
        `}
      />
    </div>
  );
}

export default Preloader;
