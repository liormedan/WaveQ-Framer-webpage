import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WaveQ - ממשק אינטראקטיבי לצ'אט ועריכת אודיו",
  description: "דוגמת ממשק אינטראקטיבי עם אנימציות, צ'אט ועריכת אודיו חכמה. WaveQ מציג כיצד ניתן ליצור חוויית משתמש זורמת, טבעית ואלגנטית.",
  openGraph: {
    title: "WaveQ - ממשק אינטראקטיבי לצ'אט ועריכת אודיו",
    description: "דוגמת ממשק אינטראקטיבי עם אנימציות, צ'אט ועריכת אודיו חכמה.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}

