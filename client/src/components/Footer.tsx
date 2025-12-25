import { Link } from "react-scroll";
import { ChevronUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2c3e50] text-white py-12 border-t border-white/5 relative">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="inline-flex items-center justify-center w-12 h-12 bg-[#3498db] rounded-full text-white cursor-pointer hover:bg-white hover:text-[#3498db] transition-all duration-300 mb-8 absolute -top-6 left-1/2 transform -translate-x-1/2 shadow-lg"
          >
            <ChevronUp size={24} />
          </Link>
        </div>
        
        <div className="text-2xl font-bold font-display tracking-tighter mb-6">
          MTK<span className="text-[#3498db]">.</span>
        </div>

        <p className="text-gray-400 font-light text-sm">
          &copy; {currentYear} Muhammed Taher Khan. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Designed & Built with ❤️ in React & Tailwind
        </p>
      </div>
    </footer>
  );
}
