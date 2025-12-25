import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";

export default function AboutPage() {
  return (
    <div className="bg-[#f4f4f4] min-h-screen pt-20">
      <Header />
      <About />
      <Footer />
    </div>
  );
}
