import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Yman Mangaring",
  description: "Your website description for SEO.",
  keywords: ["Yman", "Mangaring", "Purdy"],
  authors: [{ name: "Yman Mangaring" }],
  openGraph: {
    title: "Yman Soriano Mangaring Purdy – Portfolio",
    description: "Software / Web Developer portfolio of Yman Mangaring showcasing projects, skills, and experience.",
    url: "https://ymanmangaring-portfolio.vercel.app",
    siteName: "ymanmangaring-portfolio",
    images: [
      {
        url: "/og-image.png", // optional
        width: 1200,
        height: 630,
        alt: "Preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
