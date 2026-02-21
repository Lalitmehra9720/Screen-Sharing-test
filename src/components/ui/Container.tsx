import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col items-center justify-center p-4">
    {children}
  </div>
);