import { motion } from 'framer-motion';


const letterVariant = {
    hidden: { scale: 1 },
    visible: { 
      scale: [1, 1.5, 1], // Scale up then down
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity, // Loop the animation
        repeatDelay: 0.2, // Delay between repeats
      },
    },
  };
  
  const AnimatedName = ({ name }:{name:string}) => {
    
    return (
      <div className="flex justify-center items-center text-center font-bold text-3xl sm:text-4xl md:text-5xl text-primary-50">
        {name.split('').map((letter, index) => (
          <motion.span
            key={index}
            className="text-white m-2"
            variants={letterVariant}
            initial="hidden"
            animate="visible"
            transition={{
              delay: index * 0.1, // Stagger the animation of each letter
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    );
  };
  
// Assume Bash is a custom component. You can replace it with any animation or logo you prefer.
const Bash = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="font-bold text-4xl md:text-6xl"
  >
    <AnimatedName name='</Bash John>' />
  </motion.div>
);

const LoadingOverlay = () => {
  return (
    <div style={{ zIndex: 9999 }} className="fixed top-0 left-0 w-full h-full bg-background bg-opacity-90 flex justify-center items-center">
      {/* Overlay background */}
      <div className="flex flex-col justify-center items-center text-center">
        {/* Centered <Bash/> */}
        <Bash />
      </div>
    </div>
  );
};

export default LoadingOverlay;
