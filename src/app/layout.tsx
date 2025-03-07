import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aventure",
  description: "We Make Concepts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
