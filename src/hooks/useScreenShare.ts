
"use client";

import { useState, useRef, useCallback } from "react";
import { ScreenStatus } from "@/types/screen.types";

export const useScreenShare = () => {
  const [status, setStatus] = useState<ScreenStatus>("idle");
  const [recording, setRecording] = useState(false);
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null);

  const streamRef = useRef<MediaStream | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startShare = async () => {
    try {
      setStatus("requesting");

      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: false,
      });

      streamRef.current = stream;

      stream.getVideoTracks()[0].onended = () => {
        stopShare();
      };

      setStatus("active");
    } catch (err) {
      setStatus("error");
    }
  };

  const startRecording = () => {
    if (!streamRef.current) return;

    chunksRef.current = [];

    const recorder = new MediaRecorder(streamRef.current);
    mediaRecorderRef.current = recorder;

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunksRef.current.push(event.data);
      }
    };

    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, {
        type: "video/webm",
      });

      const url = URL.createObjectURL(blob);
      setRecordedUrl(url);
    };

    recorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  const stopShare = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    setStatus("stopped");
  }, []);

  return {
    status,
    stream: streamRef.current,
    startShare,
    stopShare,
    recording,
    startRecording,
    stopRecording,
    recordedUrl,
  };
};