import { motion } from "framer-motion"; // Import motion from framer-motion
import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]" id="Features">
      {/* Section Title Animation */}
      <div className="text-center">
        <motion.span
          className="bg-neutral-900 text-sky-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase"
          initial={{ opacity: 0 }} // Initial state (hidden)
          whileInView
={{ opacity: 1 }} // whileInView
 to full opacity
          transition={{ duration: 0.3 }} // Animation duration
        >
          Feature
        </motion.span>

        <motion.h2
          className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide"
          initial={{ opacity: 0, y: -50 }} // Initial state (hidden and above)
          whileInView
={{ opacity: 1, y: 0 }} // whileInView
 to full opacity and original position
          transition={{ delay: 0.5, duration: 0.3 }} // Delay and duration
        >
          Easily build{" "}
          <span className="bg-gradient-to-r from-sky-500 to-sky-800 text-transparent bg-clip-text">
            your code
          </span>
        </motion.h2>
      </div>

      {/* Feature Cards Animation */}
      <motion.div
        className="flex flex-wrap mt-10 lg:mt-20"
        initial={{ opacity: 0 }} // Initial state (hidden)
        whileInView
={{ opacity: 1 }} // whileInView
 to full opacity
        transition={{ delay: 1, duration: 0.3 }} // Delay for 1 second and duration
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3"
            initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly down)
            whileInView
={{ opacity: 1, y: 0 }} // whileInView
 to full opacity and original position
            transition={{ delay: index * 0.2, duration: 0.8 }} // Staggered animation for each feature
          >
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-sky-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeatureSection;
