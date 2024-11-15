import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { onSectionChange } from "../../../lib/section_change";
  // Animation variants for staggered fade-in effect
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };
const Hero = () => {
  const { t } = useTranslation("global");



  return (
    <div
      id="hero"
      className="relative font-oswald h-screen flex flex-col justify-center items-start pl-6 md:pl-12 overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <div
        style={{
          backgroundImage: "url('/assets/background image.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="absolute inset-0"
      >
        {/* Gradient Overlay for blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>
      </div>

      {/* Content Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 space-y-4 px-6 md:px-32 lg:px-48"
      >
        <motion.h1
          variants={fadeInVariant}
          custom={0}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          {t("hero.title")}
        </motion.h1>
        
        <motion.h2
          variants={fadeInVariant}
          custom={1}
          className="text-3xl md:text-4xl font-semibold text-lightGray"
        >
          {t("hero.role")}
        </motion.h2>

        <motion.p
          variants={fadeInVariant}
          custom={2}
          className="text-base md:text-lg lg:text-xl text-gray-400 max-w-xl"
        >
          {t("hero.subtitle")}
        </motion.p>


        {/* Buttons */}
        <div className="flex gap-4 mt-8 py-">
          <motion.button
            variants={fadeInVariant}
            custom={3}
            className="bg-accent hover:bg-opacity-80 text-white font-bold py-4 px-8 text-lg rounded shadow-cta transition-colors"
            onClick={() => window.open("https://github.com/devBash24")}
          >
            {t("hero.cta")}
          </motion.button>
          
          <motion.button
            variants={fadeInVariant}
            custom={4}
            className="bg-accent hover:bg-opacity-80 text-white font-bold py-4 px-8 text-lg rounded shadow-cta transition-colors"
            onClick={() =>
              onSectionChange("contact")
            }
          >
            {t("hero.cta2")}
          </motion.button>
          
        </div>
        
      </motion.div>
      <motion.div variants={fadeInVariant} custom={5} className="h-screen  absolute bottom-0 aspect-square left-3/4 transform -translate-x-1/2 translate-z-0 overflow-hidden">
          <img src="/assets/self-image.png" alt="hero" className="h-full w-full object-cover" />
        </motion.div>
    </div>
  );
};


export default Hero