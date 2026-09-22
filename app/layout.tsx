import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ELORIA by Laiba | Printed Frocks & Custom Stitching",
  description: "Custom-stitched Pakistani eastern wear in thoughtful silhouettes, sizes and colours.",
  icons: {
    icon: "/eloria-logo.jpg",
    shortcut: "/eloria-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PK">
      <body className="antialiased">{children}</body>
    </html>
  );
}
