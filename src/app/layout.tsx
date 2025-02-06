import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,

} from "@clerk/nextjs"
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClerkProvider>
          {/* Authentication state management */}
          <SignedOut>
           
              <SignInButton />
           
          </SignedOut>
          <SignedIn>
            
              <UserButton />
           
          </SignedIn>

          {/* Navigation and Footer */}
          <Navbar />
          
          {/* Main content */}
          {children}

          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
