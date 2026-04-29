import "./globals.scss";
import SiteBackground from "../components/layout/SiteBackground/SiteBackground";

export const metadata = {
  title: "Web Space",
  description: "Digital agency website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <SiteBackground />
        {children}
      </body>
    </html>
  );
}