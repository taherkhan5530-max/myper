import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="bg-[#f4f4f4] min-h-screen pt-20">
      <Header />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-2 font-display">
              About Me
            </h2>
            <div className="h-1 w-20 bg-[#3498db] mx-auto mb-10 rounded-full" />
            <p className="text-lg text-gray-600 leading-relaxed text-justify md:text-center">
              I am a passionate <span className="text-[#3498db] font-semibold">Computer Science Engineering student</span> based in Sylhet, Bangladesh. 
              My journey in technology is driven by curiosity and a relentless desire to create. 
              I specialize in building clean, functional, and user-friendly web applications.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
