import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "EnvoByte | Best IT Solution",
  description:
    "Discover top freelance services at unbeatable prices. From our home banner to trusted brands, learn more about us, why clients choose us, and read genuine testimonials.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-raleway">
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
