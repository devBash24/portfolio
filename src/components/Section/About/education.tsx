import { motion } from 'framer-motion';
import { IoLocationOutline } from "react-icons/io5";
const Education = () => {
    return (
        <div className="education-section p-6 text-white">
            <h3 className="text-2xl text-center font-bold mb-8">Education</h3>
            <div className="flex flex-col gap-10">

                {/** Bachelor's Degree Entry */}
                <div className="flex gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="left-side w-1/3 text-right"
                    >
                        <p className="text-subheading font-semibold">2024</p>
                        <p className="text-md font-medium">Bachelor's Degree</p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="right-side w-2/3"
                    >
                        <p className="text-lg font-semibold">
                            Computer Science and Technology
                        </p>
                        <p className="text-md font-medium">
                            Nanjing University of Information Science and Technology <span><IoLocationOutline size={20} className="inline-block" /> Nanjing, China</span>
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                            Data Structures, Algorithm Design, Artificial Intelligence, 
                            Software Engineering, Machine Learning
                        </p>
                    </motion.div>
                </div>

                {/** A Levels Entry */}
                <div className="flex gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="left-side w-1/3 text-right"
                    >
                        <p className="text-lg font-semibold">2017</p>
                        <p className="text-md font-medium">A Levels</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="right-side w-2/3"
                    >
                        <p className="text-lg font-semibold">
                            St. Vincent Community College,
                            <span className='ml-2 text-body'> <IoLocationOutline size={20} className="inline-block" /> Villa, St. Vincent and the Grenadines</span>
                        </p>
                        <p className="text-md font-medium">
                            Biology, Chemistry, Computer Science, Communication Studies
                        </p>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Education;
