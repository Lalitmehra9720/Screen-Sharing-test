import { ScreenErrorType } from "@/types/screen.types";

/**
 * Check if screen sharing is supported in the browser
 */
export const isScreenShareSupported = (): boolean => {
  if (typeof window === "undefined") return false;

  return !!(
    navigator.mediaDevices &&
    navigator.mediaDevices.getDisplayMedia
  );
};

/**
 * Extract safe metadata from MediaStreamTrack
 */
export const extractMetadata = (
  track: MediaStreamTrack
) => {
  const settings = track.getSettings();

  return {
    width: settings.width,
    height: settings.height,
    displaySurface: settings.displaySurface,
  };
};

/**
 * Map browser error to readable error type
 */
export const mapScreenError = (
  error: any
): ScreenErrorType => {
  if (!error || !error.name) return "unknown";

  switch (error.name) {
    case "NotAllowedError":
      return "permission-denied";

    case "AbortError":
      return "user-cancelled";

    case "NotFoundError":
      return "user-cancelled";

    default:
      return "unknown";
  }
};