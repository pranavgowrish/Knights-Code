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
        }, 5000); // Simulate loading time
        
        return () => clearTimeout(timer);
    }, []);



  return (
    <>
    {!loading && (
        <div className="flex h-screen w-screen items-center justify-center">
      <IDE
        script={{
          content: "#include <iostream>\nint main(){ std::cout << 123; }",
        }}
        correctOutput={"123"}
      />
    </div>)}
    {loading && (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-b from-gray-900 to-red-900 relative overflow-hidden">
      {/* Dragon */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/dragon.png')" }} // add your dragon sprite
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Fire animation */}
      <motion.div
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-32 h-32"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
      >
        <div className="w-full h-full bg-orange-500 rounded-full opacity-80 blur-xl" />
      </motion.div>

      {/* Loading Text */}
      <motion.h1
        className="text-3xl font-extrabold text-yellow-400 drop-shadow-lg z-10"
        animate={{ y: [0, -10, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        Forging Your Quest…
      </motion.h1>
    </div>
    ) }
    </>
  );
};

export default StudyZone;
