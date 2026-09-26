import React from "react";
import "./globals.css";

export const metadata = {
  title: "SAT Math Accelerator | Precision SAT Math Prep",
  description:
    "Precision SAT Math Prep by Lauren Jones. Zero Wasted Time. Target specific score bottlenecks and achieve peak results.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F19] text-white antialiased">{children}</body>
    </html>
  );
}
