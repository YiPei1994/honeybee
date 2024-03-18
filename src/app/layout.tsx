import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "HoneyBee",
  description: "world of sweet honey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      className="scrollbar-thin  scrollbar-track-transparent scrollbar-thumb-active"
    >
      <body className=" min-h-screen ">{children}</body>
    </html>
  );
}
