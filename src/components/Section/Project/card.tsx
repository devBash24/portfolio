import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import OverlayCard from './overlay_card';

const CardImage = ({ img, title }: { img: string; title: string }) => {
  return (
    <motion.div
      className='relative w-[90%] max-w-[280px] aspect-square rounded-lg overflow-hidden object-center'
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <img className='w-full h-full object-cover' src={img} alt={title} />
    </motion.div>
  );
};

const Stack = ({ stack }: { stack: string }) => {
  return (
    <motion.p
      className='text-center bg-primary-600 px-3 py-1 rounded-full text-white whitespace-nowrap'
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      {stack}
    </motion.p>
  );
};

const ProjectCard = ({ project }: { project: any }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  // Truncate description to 50 characters
  const truncatedDescription =
    project.description.length > 50
      ? project.description.slice(0, 50) + "..."
      : project.description;

  return (
    <motion.div
      className='relative hover:cursor-pointer flex flex-col items-center h-[400px] w-[300px] sm:w-[320px] bg-primary-500 rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-105'
      initial={{ scale: 0.9, opacity: 0, rotate: -3 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      style={{
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
      }}
      onClick={toggleOverlay}
    >
      <motion.div 
        className='glow-effect absolute inset-0 rounded-lg'
        whileHover={{
          boxShadow: '0px 0px 15px rgba(0, 150, 255, 0.6)',
        }}
      />
      <CardImage img={project.img} title={project.title} />

      {/* Content container with staggered animations */}
      <motion.div
        className='flex flex-col items-center w-full mt-4 px-4'
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.h3
          className='text-lg font-semibold text-center text-white'
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className='text-center text-white text-sm max-w-[90%] sm:max-w-full'
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {truncatedDescription}
          {project.description.length > 50 && (
            <span className='text-blue-400 cursor-pointer z-100'>...more</span>
          )}
        </motion.p>
        <motion.div 
          className="flex gap-2 flex-wrap justify-center p-2"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {project.stack.map((stack: string, index: number) => (
            <Stack key={index} stack={stack} />
          ))}
        </motion.div>
      </motion.div>

      {/* Overlay */}
      <AnimatePresence>
        {isOverlayOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg"
          >
            <OverlayCard project={project} toggleOverlay={toggleOverlay} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
