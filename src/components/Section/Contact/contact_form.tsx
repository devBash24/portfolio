import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import useEmail from '../../../hooks/useEmail';

// Animation Variants
const formVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const ContactForm = () => {
  const { formData, handleChange, handleSubmit, emailState, message } = useEmail();

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-lg text-white flex flex-col gap-6 bg-darkGray p-8 rounded-2xl mt-8 shadow-lg text-primary-50"
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        variants={formVariant}
        className="text-center text-heading font-bold text-2xl sm:text-3xl md:text-4xl"
      >
        Get in touch
      </motion.h2>

      {message && (
        <p
          className={`${
            emailState === 'error' ? 'text-red-500' : 'text-green-500'
          } text-sm mt-2 text-center`}
        >
          {message}
        </p>
      )}

      <motion.div variants={formVariant} className="flex flex-col">
        <label htmlFor="name" className="text-body font-semibold">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-2 mt-1 border-2  border-primary-300 rounded-md text-primary-100 bg-muted focus:outline-none focus:border-accent/30"
          placeholder="Enter your full name"
        />
      </motion.div>

      <motion.div variants={formVariant} className="flex flex-col">
        <label htmlFor="email" className="text-body font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-2 mt-1 border-2 border-white/ rounded-md text-primary-100 bg-muted focus:outline-none focus:border-accent/30"
          placeholder="Enter your email"
        />
      </motion.div>

      <motion.div variants={formVariant} className="flex flex-col">
        <label htmlFor="message" className="text-body font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="px-4 py-2 mt-1 border-2 border-primary-300 rounded-md text-surface focus:outline-none"
          placeholder="Enter your message"
        />
      </motion.div>

      <motion.button
        type="submit"
        variants={formVariant}
        className="w-full py-3 bg-primary-500 text-white rounded-md font-semibold text-center hover:bg-primary-600 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={emailState === 'sending'}
      >
        Send Message
      </motion.button>

      {/* Social Media Links */}
      <motion.div
        className="flex justify-center gap-6 mt-6"
        initial="hidden"
        animate="visible"
        variants={formVariant}
      >
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-50 hover:text-secondary-300 transition-colors duration-200"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/devBash24"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-50 hover:text-secondary-300 transition-colors duration-200"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-50 hover:text-secondary-300 transition-colors duration-200"
        >
          <FaInstagram size={24} />
        </a>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
