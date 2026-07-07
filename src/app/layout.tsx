import type { Metadata } from "next";
import "./globals.css";
import { ProjectProvider } from "../state/ProjectContext";

export const metadata: Metadata = {
  title: "PartForge AI",
  description: "Your AI Mechanical Design Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProjectProvider>{children}</ProjectProvider>
      </body>
    </html>
  );
}