"use client";
import IDE from "@/components/ide";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface StudyZoneProps {
  chapno: int;
  qno: int;
  background: string;
}

const StudyZone = (props: StudyZoneProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${props.background})` }}
    >
      {!loading && (
        <div className="flex h-screen w-screen items-center justify-start px-10">
          <IDE
            script={{
              content: "#include <iostream>\nint main(){ std::cout << 123; }",
            }}
            correctOutput={"123"}
          />
        </div>
      )}
      {loading && (
        <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900/50 to-red-900/50">
          {/* Dragon */}
          <motion.div
            className="absolute bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 transform bg-contain bg-no-repeat"
            style={{ backgroundImage: "url('/icons/loading.png')" }} // add your dragon sprite
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          {/* Fire animation */}
          <motion.div
            className="absolute bottom-32 left-1/2 h-32 w-32 -translate-x-1/2 transform"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          >
            <div className="h-full w-full rounded-full bg-orange-500 opacity-80 blur-xl" />
          </motion.div>

          {/* Loading Text */}
          <motion.h1
            className="z-10 text-3xl font-extrabold text-yellow-400 drop-shadow-lg"
            animate={{ y: [0, -10, 0], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            Forging Your Quest…
          </motion.h1>
        </div>
      )}
    </div>
  );
};

export default StudyZone;
