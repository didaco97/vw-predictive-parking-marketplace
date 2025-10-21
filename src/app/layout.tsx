import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ParkPredict - AI-Powered Predictive Parking Marketplace by Volkswagen",
  description: "Experience the future of parking with AI-powered predictions, seamless IQ.DRIVE integration, and smart parking solutions. Find and reserve parking before you arrive.",
  icons: {
    icon: [
      { url: "/Orchid_logo.png", type: "image/png", sizes: "32x32" },
      { url: "/Orchid_logo.png", type: "image/png", sizes: "16x16" },
      { url: "/Orchid_logo.png", type: "image/png", sizes: "any" }
    ],
    apple: { url: "/Orchid_logo.png" },
    shortcut: "/Orchid_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}