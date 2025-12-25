import { useSkills } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as IoIcons from "react-icons/io5";
import { IconType } from "react-icons";

// Helper to resolve icon string to component
const getIconComponent = (iconName: string): IconType => {
  // @ts-ignore
  const Icon = FaIcons[iconName] || SiIcons[iconName] || IoIcons[iconName];
  return Icon || FaIcons.FaCode; // Fallback
};

export function Skills() {
  const { data: skills, isLoading } = useSkills();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-2 font-display">
            My Skills
          </h2>
          <div className="h-1 w-20 bg-[#3498db] mx-auto rounded-full" />
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="h-40 bg-gray-200 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {skills?.map((skill) => {
              const Icon = getIconComponent(skill.icon);
              return (
                <motion.div
                  key={skill.id}
                  variants={item}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-[#3498db]/20 group flex flex-col items-center justify-center text-center h-full min-h-[220px]"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#3498db] transition-all duration-300">
                    <Icon className="text-3xl text-[#3498db] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2c3e50] mb-2">{skill.name}</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-bold">
                    {skill.category}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
