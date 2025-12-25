import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-2 font-display">
            About Me
          </h2>
          <div className="h-1 w-20 bg-[#3498db] mx-auto mb-10 rounded-full" />
          
          <p className="text-lg text-gray-600 leading-relaxed text-justify md:text-center">
            I am a passionate <span className="text-[#3498db] font-semibold">Computer Science Engineering student</span> based in Sylhet, Bangladesh. 
            My journey in technology is driven by curiosity and a relentless desire to create. 
            I specialize in building clean, functional, and user-friendly web applications.
            Whether it's solving complex algorithms or crafting pixel-perfect interfaces, 
            I approach every challenge with enthusiasm and dedication. I am constantly learning 
            new technologies to stay ahead in this ever-evolving field.
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#2c3e50] mb-2">Dedication</h3>
              <p className="text-gray-500 text-sm">Committed to delivering high-quality code and solutions.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#2c3e50] mb-2">Innovation</h3>
              <p className="text-gray-500 text-sm">Always looking for better, smarter ways to solve problems.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#2c3e50] mb-2">Collaboration</h3>
              <p className="text-gray-500 text-sm">Thriving in team environments and valuing diverse perspectives.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
