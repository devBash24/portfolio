import { motion } from 'framer-motion';
import { FaReact, FaPython, FaDocker, FaGithub } from 'react-icons/fa';
import { RiNextjsLine } from 'react-icons/ri';

const Skills = () => {
    return (
        <div className="mx-auto px-8">
            <h3 className="text-2xl text-center text-white font-bold mb-8">Skills</h3>
            <div className='flex gap-5 justify-center flex-wrap'>
                {/** Define animation for icons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ scale: 1.2 }}
                >
                    <FaReact size={50} className="text-blue-400" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.2 }}
                >
                    <FaPython size={50} className="text-yellow-400" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ scale: 1.2 }}
                >
                    <RiNextjsLine size={50} className="text-blue-400" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.2 }}
                >
                    <FaDocker size={50} className="text-blue-400" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.2 }}
                >
                    <FaGithub size={50} className="text-blue-400" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.2 }}
                >
                    <RiNextjsLine size={50} className="text-blue-400" />
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
