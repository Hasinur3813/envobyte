import "./globals.css";

export const metadata = {
  title: "EnvoByte | Best IT Solution",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-inter">{children}</body>
    </html>
  );
}
