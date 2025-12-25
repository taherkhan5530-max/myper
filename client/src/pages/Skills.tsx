import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Skills as SkillsSection } from "@/components/Skills";

export default function SkillsPage() {
  return (
    <div className="bg-[#f4f4f4] min-h-screen pt-20">
      <Header />
      <SkillsSection />
      <Footer />
    </div>
  );
}
