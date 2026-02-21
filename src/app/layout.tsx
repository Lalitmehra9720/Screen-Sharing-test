// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Screen Share Test App",
//   description:
//     "Frontend screen sharing test using Web APIs with proper lifecycle management.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-50 text-gray-900 antialiased">
//         {children}
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Screen Share Test App",
  description: "Test your browser screen sharing capability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}