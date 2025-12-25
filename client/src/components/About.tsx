import { motion } from "framer-motion";
import profileImagePath from "@assets/WhatsApp_Image_2025-10-23_at_23.25.29_2883af38_1766655548331.jpg";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-2 font-display">
              About Me
            </h2>
            <div className="h-1 w-20 bg-[#3498db] mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-sm">
                <img
                  src={profileImagePath}
                  alt="Profile"
                  className="w-full rounded-2xl shadow-lg"
                  data-testid="img-profile"
                />
              </div>
            </motion.div>
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I am a passionate <span className="text-[#3498db] font-semibold">Computer Science Engineering student</span> based in Sylhet, Bangladesh. 
                My journey in technology is driven by curiosity and a relentless desire to create. 
                I specialize in building clean, functional, and user-friendly web applications.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether it's solving complex algorithms or crafting pixel-perfect interfaces, 
                I approach every challenge with enthusiasm and dedication. I am constantly learning 
                new technologies to stay ahead in this ever-evolving field.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-[#2c3e50] mb-2">Dedication</h3>
              <p className="text-gray-500 text-sm">Committed to delivering high-quality code and solutions.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-[#2c3e50] mb-2">Innovation</h3>
              <p className="text-gray-500 text-sm">Always looking for better, smarter ways to solve problems.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-[#2c3e50] mb-2">Collaboration</h3>
              <p className="text-gray-500 text-sm">Thriving in team environments and valuing diverse perspectives.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
