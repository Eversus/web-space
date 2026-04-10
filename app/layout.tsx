import "./globals.scss";

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
      <body>{children}</body>
    </html>
  );
}