"use client";

import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center font-bold">
            SS
          </div>
          <span className="font-semibold text-lg">
            ScreenShare Test
          </span>
            </Link>
          
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm text-slate-300">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/screen-test" className="hover:text-white">
            Screen Test
          </Link>
        </div>
      </div>
    </nav>
  );
};