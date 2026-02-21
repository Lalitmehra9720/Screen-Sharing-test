export type ScreenStatus =
  | "idle"
  | "requesting"
  | "active"
  | "error"
  | "stopped"
  | "unsupported";

export type ScreenErrorType =
  | "permission-denied"
  | "user-cancelled"
  | "unknown"
  | null;

export interface ScreenMetadata {
  width?: number;
  height?: number;
  displaySurface?: string;
}