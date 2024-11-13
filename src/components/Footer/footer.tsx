import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import navItems, { INavItems } from '../../lib/navItems';
import { onSectionChange } from '../../lib/section_change';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {t} = useTranslation("global");

  return (
    <footer className="bg-darkDark text-white py-10 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
        
        {/* Logo and Description */}
        <div className="text-center lg:text-left space-y-3">
          <h2 className="text-xl lg:text-2xl font-semibold text-secondary-500">Bash John</h2>
          <p className="text-xs lg:text-sm text-gray-400">
            {t("footer.description")}
          </p>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-6 text-gray-400 text-xs lg:text-sm">
          {navItems.map((item: INavItems, index: number) => (
            <li
              onClick={() => onSectionChange(item.id)}
              key={index}
              className="hover:text-secondary-400 transition duration-300 list-none hover:cursor-pointer"
            >
              {item.title}
            </li>
          ))}
        </nav>
        
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <motion.a
            href="https://linkedin.com/in/bash-john-220a87308"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-secondary-500 hover:text-secondary-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://github.com/devBash24"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-secondary-500 hover:text-secondary-400 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-secondary-500 hover:text-secondary-400 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </motion.a>
          <motion.a
            href="mailto:your-email@example.com"
            whileHover={{ scale: 1.1 }}
            className="text-secondary-500 hover:text-secondary-400 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </motion.a>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="mt-8 text-center text-xs lg:text-sm text-gray-500">
        © {t("footer.copyright")}
      </div>
    </footer>
  );
};

export default Footer;
