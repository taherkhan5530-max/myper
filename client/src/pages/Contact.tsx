import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact as ContactSection } from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className="bg-[#f4f4f4] min-h-screen pt-20">
      <Header />
      <ContactSection />
      <Footer />
    </div>
  );
}
