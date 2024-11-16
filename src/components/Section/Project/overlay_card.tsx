import { motion } from "framer-motion";
import { IProject } from "../../../lib/portfolio_projects";
import ProjectDownloadIcon from "./project_dowload_icon";
import WebsiteIcon from "./website_icon";
import { IoMdClose } from "react-icons/io";
const OverlayCard = ({
  project,
  toggleOverlayClose,
}: {
  project: IProject;
  toggleOverlayClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: "100%" }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: "100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onDoubleClick={toggleOverlayClose}
      className="absolute inset-0 bg-surface bg-opacity-80 rounded-lg flex flex-col justify-between p-6 text-white"
      style={{
        backdropFilter: "blur(4px)",
      }}
    >
      <div className="overflow-y-auto max-h-[70%]">
        <h3 className="text-xl font-semibold mb-2 ">
          {project.title}{" "}
          {project.dwl && <ProjectDownloadIcon link={project.dwl} />}
          {project.url && <WebsiteIcon link={project.url} />}
        </h3>
        <p className="text-sm mb-4 leading-relaxed break-words">
          {project.description}
        </p>
        <div></div>
      </div>

      {/* Links and Close Button */}
      <div className="flex flex-col gap-2 ">
       

      </div>
      <div className="flex justify-center gap-4 items-center" >
      {project.git && (
          <a
            href={project.git}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent px-4 py-2 w-full rounded text-white text-center  outline-offset-1  transition duration-200 ease-in-out"
          >
            View on GitHub
          </a>
        )}
      <button
          className="bg-red-600  hover:bg-red-700 px-4 py-2 rounded text-white  transition duration-200 ease-in-out z-50"
        >
          <IoMdClose className="inline-block font-bold" onClick={toggleOverlayClose} size={24} />
        </button>
      </div>
    </motion.div>
  );
};

export default OverlayCard;
