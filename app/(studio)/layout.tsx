import "../globals.css";
import Navbar from "../(site)/components/global/Navbar";
import Footer from "../(site)/components/global/Footer";

export default function StudioLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
