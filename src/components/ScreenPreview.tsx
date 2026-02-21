"use client";

import { useEffect, useRef } from "react";

interface Props {
  stream: MediaStream | null;
}

export const ScreenPreview: React.FC<Props> = ({ stream }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, [stream]);

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      className="rounded-lg shadow-lg max-w-full"
    />
  );
};