import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "react-hot-toast"
import { Footer } from "@/components/shared/Footer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Sayed Anwar Tamim | Web Developer",
  description: "Modern portfolio website built with Next.js, Tailwind & ShadCN UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster
              position="top-center"
              toastOptions={{
                duration: 4000,
                style: {
                  background: "#000",
                  color: "#fff",       
                },
              }}
            />
        </ThemeProvider>
      </body>
    </html>
  );
}
