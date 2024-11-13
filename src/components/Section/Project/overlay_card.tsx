import { motion } from 'framer-motion';

const OverlayCard = ({ project, toggleOverlay }: { project: any; toggleOverlay: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: '100%' }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: '100%' }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className='absolute inset-0 bg-primary-400 bg-opacity-80 rounded-lg flex flex-col justify-between p-6 text-white'
      style={{
        backdropFilter: 'blur(4px)',
      }}
    >
      <div className='overflow-y-auto max-h-[70%]'>
        <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
        <p className='text-sm mb-4 leading-relaxed break-words'>
          {project.description}
        </p>
      </div>

      {/* Links and Close Button */}
      <div className='flex flex-col gap-2 mt-4'>
        {project.githubUrl && (
          <a
            href={project.git}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-primary-600 px-4 py-2 rounded text-white text-center hover:bg-primary-700 transition duration-200 ease-in-out'
          >
            View on GitHub
          </a>
        )}
        {project.websiteUrl && (
          <a
            href={project.url}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-primary-600 px-4 py-2 rounded text-white text-center hover:bg-primary-700 transition duration-200 ease-in-out'
          >
            Visit Website
          </a>
        )}
        <button
          className='bg-primary-600 px-4 py-2 rounded text-white hover:bg-primary-700 transition duration-200 ease-in-out'
          onClick={toggleOverlay}
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default OverlayCard;
