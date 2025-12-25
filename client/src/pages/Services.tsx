import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Code, Palette, Laptop, ShoppingCart, ShieldCheck, Database, Bug, Shirt, Presentation } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Web Design & Dev",
      description: "Custom, responsive websites built with modern technologies to help your business grow online.",
      icon: Code,
    },
    {
      title: "Logo Design",
      description: "Unique and memorable brand identities that capture your vision and resonate with your audience.",
      icon: Palette,
    },
    {
      title: "Shopify Store Design",
      description: "End-to-end e-commerce solutions to launch and scale your online business successfully.",
      icon: ShoppingCart,
    },
    {
      title: "Website Bug Hunting",
      description: "Identifying and resolving critical bugs to ensure your website runs smoothly and securely.",
      icon: Bug,
    },
    {
      title: "T-shirt Design",
      description: "Creative and trendy apparel designs that make a statement and stand out.",
      icon: Shirt,
    },
    {
      title: "Presentation Making",
      description: "Professional, visually engaging presentations that effectively communicate your message.",
      icon: Presentation,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-[#f4f4f4] min-h-screen pt-20">
      <Header />
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-2 font-display">
              My Services
            </h2>
            <div className="h-1 w-20 bg-[#3498db] mx-auto rounded-full" />
            <p className="mt-4 text-gray-500">Professional solutions tailored to your unique requirements.</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#3498db]/20 flex flex-col items-center text-center group min-h-[320px]"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#3498db] transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-[#3498db] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#2c3e50] mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed flex-1">{service.description}</p>
                <a
                  href="/contact"
                  className="mt-6 bg-[#3498db] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-[#2980b9] transition-colors duration-300"
                  data-testid="button-book-now"
                >
                  Book Now
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
