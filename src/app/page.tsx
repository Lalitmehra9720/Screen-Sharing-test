
// "use client";

// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-16">

//       {/* HERO SECTION */}
//       <div className="grid md:grid-cols-2 gap-12 items-center">

//         <div>
//           <h1 className="text-4xl font-bold mb-6">
//             Test Your Browser Screen Sharing
//           </h1>

//           <p className="text-slate-400 mb-6">
//             This application verifies whether your browser supports
//             screen sharing. It safely previews your selected screen
//             locally without recording or uploading anything.
//           </p>

//           <button
//             onClick={() => router.push("/screen-test")}
//             className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition"
//           >
//             Start Screen Test
//           </button>
//         </div>

//         <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
//           <h3 className="font-semibold mb-4">How it works</h3>

//           <ul className="space-y-3 text-slate-400 text-sm">
//             <li>1 Click "Start Screen Test"</li>
//             <li>2 Allow browser permission</li>
//             <li>3 Select a tab, window, or entire screen</li>
//             <li>4 See live preview below</li>
//             <li>5 Stop anytime safely</li>
//           </ul>
//         </div>
//       </div>

//       {/* FEATURES SECTION */}
//       <div className="mt-20 grid md:grid-cols-3 gap-8">

//         <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
//           <h4 className="font-semibold mb-2">Permission Handling</h4>
//           <p className="text-sm text-slate-400">
//             Detects permission granted, denied, or cancelled states clearly.
//           </p>
//         </div>

//         <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
//           <h4 className="font-semibold mb-2">Live Preview</h4>
//           <p className="text-sm text-slate-400">
//             Displays real-time screen feed directly in your browser.
//           </p>
//         </div>

//         <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
//           <h4 className="font-semibold mb-2">Stream Lifecycle</h4>
//           <p className="text-sm text-slate-400">
//             Detects manual stop and cleans up resources properly.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const router = useRouter();
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isSupported =
        !!navigator.mediaDevices &&
        !!navigator.mediaDevices.getDisplayMedia;

      setSupported(isSupported);
    }
  }, []);

  const handleStart = () => {
    if (!supported) return;
    router.push("/screen-test");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* HERO SECTION */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Secure Screen Sharing
            <span className="block text-blue-500">
              Directly in Your Browser
            </span>
          </h1>

          <p className="text-slate-400 mb-8 text-lg">
            Test your browser's screen sharing capability and
            optionally record it — all locally, with no backend
            and no data uploads.
          </p>

          {supported === false && (
            <div className="mb-6 text-red-400 bg-red-500/10 border border-red-500/20 p-4 rounded-lg text-sm">
              Your browser does not support screen sharing.
              Please use Chrome or Edge.
            </div>
          )}

          <div className="flex items-center gap-4">
            <Button
              onClick={handleStart}
              disabled={!supported}
            >
              Start Screen Test
            </Button>

            <span className="text-slate-500 text-sm">
              No installation required
            </span>
          </div>
        </div>

        {/* HOW IT WORKS CARD */}
        <div className="bg-slate-900 rounded-2xl p-10 border border-slate-800 shadow-xl">
          <h3 className="font-semibold text-xl mb-6">
            How It Works
          </h3>

          <ul className="space-y-4 text-slate-400 text-sm">
            <li>1 Click “Start Screen Test”</li>
            <li>2 Grant browser permission</li>
            <li>3 Choose tab, window, or full screen</li>
            <li>4 Preview live feed instantly</li>
            <li>5 Optionally record locally</li>
            <li>6 Stop anytime safely</li>
          </ul>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="mt-28">

        <h2 className="text-3xl font-bold text-center mb-16">
          Built with Native Web APIs
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-blue-500/40 transition">
            <h4 className="font-semibold mb-3 text-lg">
              Permission Control
            </h4>
            <p className="text-sm text-slate-400">
              Handles permission granted, denied, and cancellation
              states clearly and safely.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-blue-500/40 transition">
            <h4 className="font-semibold mb-3 text-lg">
              Live Screen Preview
            </h4>
            <p className="text-sm text-slate-400">
              Displays real-time screen feed using
              getDisplayMedia API.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-blue-500/40 transition">
            <h4 className="font-semibold mb-3 text-lg">
              Local Recording
            </h4>
            <p className="text-sm text-slate-400">
              Records your screen locally using MediaRecorder.
              No backend. No uploads.
            </p>
          </div>

        </div>
      </div>

      {/* SECURITY NOTICE */}
      <div className="mt-28 text-center max-w-3xl mx-auto">
        <p className="text-slate-500 text-sm">
           This application does not upload or store your data.
          Everything runs locally in your browser session.
        </p>
      </div>
    </div>
  );
}