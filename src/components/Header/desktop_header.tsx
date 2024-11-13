import { motion } from "framer-motion";
import { Logo } from "./logo";
import { Navbar } from "./navbar";
import { useState, useEffect } from "react";

const DesktopHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, width: "100%" }}
      animate={{
        opacity: 1,
        width: isScrolled ? "80%" : "100%",
        top: isScrolled ? "1rem" : "0",
        borderRadius: isScrolled ? "3rem" : "0",
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 ${
        isScrolled
          ? "bg-surface/30 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      } mx-auto transition-all duration-300`}
      style={{ 
        left: isScrolled ? "10%" : "0", // Center the header when scrolled
        right: isScrolled ? "10%" : "0", // Ensure alignment
      }} 
    >
      <Logo />
      <Navbar />
      {/* <MobileMenu /> */}
    </motion.div>
  );
};

export default DesktopHeader;
