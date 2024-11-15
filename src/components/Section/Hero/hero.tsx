import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
  // Animation variants for staggered fade-in effect
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };
export const Hero = () => {
  const { t } = useTranslation("global");



  return (
    <div
      id="hero"
      className="relative h-screen flex flex-col justify-center items-start pl-6 md:pl-12"
    >
      {/* Background Image with Gradient Overlay */}
      <div
        style={{
          backgroundImage: "url('/public/assets/background image.webp')",
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
        className="relative z-10 space-y-4"
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
          className="text-2xl md:text-3xl font-semibold text-lightGray"
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
        <div className="flex gap-4 mt-6">
          <motion.button
            variants={fadeInVariant}
            custom={3}
            className="bg-accent hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded shadow-cta transition-colors"
            onClick={() => window.open("https://github.com/devBash24")}
          >
            {t("hero.cta")}
          </motion.button>
          
          <motion.button
            variants={fadeInVariant}
            custom={4}
            className="bg-accent hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded shadow-cta transition-colors"
            onClick={() =>
              window.open("https://drive.google.com/file/d/1G1z6wJn0LcX0dPz5lRZf7wY6WQ7xGkKU/view?usp=sharing")
            }
          >
            {t("hero.cta2")}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
