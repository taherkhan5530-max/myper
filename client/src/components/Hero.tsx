import { Link } from "react-scroll";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#2c3e50]/80 mix-blend-multiply z-10" />
        {/* Hero scenic background */}
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Coding Workspace"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-light text-gray-300 mb-4 font-sans">
            Hello, Welcome
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display leading-tight">
            I'm <span className="text-[#3498db]">Muhammed Taher Khan</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Architecting Logic, Designing Pixels: Crafting Seamless Digital Experiences.
          </p>
          
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="inline-block px-8 py-4 bg-[#3498db] text-white font-bold rounded-full shadow-lg shadow-[#3498db]/30 hover:shadow-xl hover:bg-[#2980b9] hover:-translate-y-1 transition-all duration-300 cursor-pointer uppercase tracking-wider text-sm"
          >
            Hire Me
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
