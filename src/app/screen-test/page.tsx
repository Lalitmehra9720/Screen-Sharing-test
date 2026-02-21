
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useScreenShare } from "@/hooks/useScreenShare";
import { Button } from "@/components/ui/Button";
import { ScreenPreview } from "@/components/ScreenPreview";

export default function ScreenTest() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(0);
   const {
    status,
    stream,
    startShare,
    stopShare,
    recording,
    startRecording,
    stopRecording,
    recordedUrl,
  } = useScreenShare();

useEffect(() => {
  let interval: NodeJS.Timeout;

  if (recording) {
    interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  } else {
    setSeconds(0);
  }

  return () => clearInterval(interval);
}, [recording]);

 

  const formatTime = (sec: number) => {
  const mins = Math.floor(sec / 60);
  const secs = sec % 60;
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
};
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          Screen Share Test
        </h1>

        <p className="text-slate-400">
          Start screen sharing and optionally record it locally.
          The recording is temporary and disappears after refresh.
        </p>
      </div>

      {/* Status Badge */}
      <div className="flex justify-center mb-8">
        {status === "idle" && (
          <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
            Ready to start
          </span>
        )}

        {status === "requesting" && (
          <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
            Waiting for permission...
          </span>
        )}

        {status === "active" && (
          <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm">
            Screen sharing active
          </span>
        )}

        {status === "error" && (
          <span className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm">
            Something went wrong
          </span>
        )}

        {status === "stopped" && (
          <span className="px-4 py-2 bg-slate-700 rounded-full text-sm">
            Screen sharing stopped
          </span>
        )}
      </div>

      {/* Start Sharing */}
      {status === "idle" && (
        <div className="text-center">
          <Button onClick={startShare}>
            Start Screen Share
          </Button>
        </div>
      )}

      {/* Active Sharing */}
      {/* {status === "active" && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-lg overflow-hidden">

          
          <div className="max-h-[60vh] overflow-auto">
            <ScreenPreview stream={stream} />
          </div>

          
          <div className="flex items-center justify-between p-4 border-t border-slate-800 bg-slate-950">

            <div className="flex gap-4">
              {!recording ? (
                <Button onClick={startRecording}>
                  Start Recording
                </Button>
              ) : (
                <Button variant="danger" onClick={stopRecording}>
                  Stop Recording
                </Button>
              )}

              <Button variant="secondary" onClick={stopShare}>
                Stop Sharing
              </Button>
            </div>

          </div>
        </div>
      )} */}
      {status === "active" && (
  <div className="relative bg-slate-900 border border-slate-800 rounded-xl shadow-lg overflow-hidden">

    {/* Floating Control Bar */}
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-slate-950/90 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-6 border border-slate-700 shadow-lg">

      {/* Recording Indicator */}
      {recording && (
        <div className="flex items-center gap-2 text-red-500 font-medium">
          <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
          REC {formatTime(seconds)}
        </div>
      )}

      {!recording ? (
        <Button onClick={startRecording}>
          Start Recording
        </Button>
      ) : (
        <Button variant="danger" onClick={stopRecording}>
          Stop Recording
        </Button>
      )}

      <Button variant="secondary" onClick={stopShare}>
        Stop Sharing
      </Button>
    </div>

    {/* Preview */}
    <div className="max-h-[70vh] overflow-auto">
      <ScreenPreview stream={stream} />
    </div>
  </div>
)}

      {/* Recorded Preview */}
      {recordedUrl && (
        <div className="mt-10 bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="text-lg font-semibold mb-4">
            Recorded Video Preview
          </h3>

          <video
            src={recordedUrl}
            controls
            className="rounded-lg w-full max-h-[400px]"
          />

          <a
            href={recordedUrl}
            download="screen-recording.webm"
            className="inline-block mt-4 text-blue-400 hover:underline"
          >
            Download Recording
          </a>
        </div>
      )}

      {/* Stopped State */}
      {/* {status === "stopped" && (
        <div className="text-center mt-6 flex justify-center gap-4">
          <Button onClick={startShare}>
            Retry
          </Button>

          <Button
            variant="secondary"
            onClick={() => router.push("/")}
          >
            Back to Home
          </Button>
        </div>
      )} */}
      {status === "stopped" && (
  <div className="text-center mt-10 space-y-4">
    <Button onClick={startShare}>
      Start Again
    </Button>

    <div>
      <Button
        variant="secondary"
        onClick={() => router.push("/")}
      >
        Back to Home
      </Button>
    </div>
  </div>
)}
    </div>
  );
}