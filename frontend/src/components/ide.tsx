"use client";
import React from "react";
import LiveCodes, { Playground } from "livecodes/react";
import { useState } from "react";

interface IDEProps {
  script: {
    content: string;
  };
  correctOutput: string;
}

const IDE = (props: IDEProps) => {
  const options = {
    params: {
      languages: "cpp",
      console: "full",
      autorun: "false",
    },
    config: {
      mode: "simple",
      layout: "vertical",
      activeEditor: "script",
      autoupdate: false,
      themeColor: "lightblue",
      editor: "monaco",
      tools: {
        enabled: ["console"],
        active: "console",
        status: "open",
      },
      script: {
        language: "cpp",
        content: props.script.content,
      },
    },
  };

  const [playground, setPlayground] = useState<Playground>();

  const onReady = (sdk: Playground) => {
    setPlayground(sdk);

    const consoleWatcher = sdk.watch("console", ({ method, args }) => {
      console.log(`Console ${method}:`, ...args);
      if (args[0] == props.correctOutput) {
        console.log("✅ Correct!");
      } else {
        console.log("❌ Try again!");
      }
    });

    // Optional cleanup when unmounted
    return () => {
      consoleWatcher.dispose();
    };
  };

  const run = async () => {
    playground.run().then((result) => {
      console.log("Run finished:", result);
    });
  };

  return (
    <div>
      <LiveCodes
        {...options}
        sdkReady={onReady}
        script={props.script}
        correctOutput={props.correctOutput}
        style={{ width: "100vw", height: "100vh" }}
      />
      <button
        onClick={run}
        className="absolute bottom-10 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Run Code
      </button>
    </div>
  );
};

export default IDE;

// ("use client");
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import GoogleSignUp from "./GoogleSignUp";
// import { useRef, useEffect, useState } from "react";

// // @ts-ignore: no declaration file for 'livecodes/react'
// import LiveCodes, { Playground } from "livecodes/react";

// const Home = () => {
//   const options = {
//     params: {
//       languages: "c++",
//       console: "full",
//       autorun: "false",
//     },
//     config: {
//       mode: "simple",
//       layout: "vertical",
//       activeEditor: "script",
//       autoupdate: false,
//       themeColor: "lightblue",
//       editor: "monaco",
//       tools: {
//         enabled: ["console"],
//         active: "console",
//         status: "open",
//       },
//       script: {
//         language: "cpp",
//         content:
//           "#include <iostream>\n" +
//           "using namespace std;\n\n" +
//           "int add(int a, int b) {\n" +
//           "    // TODO: fix this function\n" +
//           "    return a - b; // wrong on purpose\n" +
//           "}\n\n" +
//           "int main() {\n" +
//           "    cout << add(2, 3) << endl;\n" +
//           "    return 0;\n" +
//           "}\n",
//       },
//     },
//   };

//   const [playground, setPlayground] = useState<Playground>();
//   const [status, setStatus] = useState("❌");

//   const run = async () => {
//     playground.run().then((result) => {
//       console.log("Run finished:", result);
//     });
//   };

//   // Called when the SDK is ready
//   const onReady = (sdk: Playground) => {
//     setPlayground(sdk);

//     // Set up console watcher AFTER playground is ready
//     const consoleWatcher = sdk.watch("console", ({ method, args }) => {
//       console.log(`Console ${method}:`, ...args);
//       if (args[0] == "5\n") {
//         console.log("✅ Correct!");
//         setStatus("✅");
//       } else {
//         console.log("❌ Try again!");
//         setStatus("❌");
//       }
//     });

//     // Optional cleanup when unmounted
//     return () => {
//       consoleWatcher.dispose();
//     };
//   };

//   return (
//     <div className="flex h-screen w-screen items-center justify-center">
//       {/* <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
//       <GoogleSignUp/>
//           </GoogleOAuthProvider> */}

//       <LiveCodes
//         sdkReady={onReady}
//         {...options}
//         style={{ width: "100vw", height: "100vh" }} // full viewport
//       />
//       {/* <button onClick={run}>Run</button> */}
//       <div>{status}</div>
//     </div>
//   );
// };

// export default Home;
