import { motion } from "framer-motion"; // Import motion from framer-motion
import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20" id="Workflow">
      {/* Heading Animation */}
      <motion.h2
        className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide"
        initial={{ opacity: 0, y: -50 }} // Initial state (hidden and shifted up)
        whileInView={{ opacity: 1, y: 0 }} // whileInView to fully visible and original position
        transition={{ duration: 0.5 }} // Animation duration
      >
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-sky-500 to-sky-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </motion.h2>

      {/* Main Content: Image and Checklist Items */}
      <div className="flex flex-wrap justify-center">
        {/* Image Animation */}
        <motion.div
          className="p-2 w-full lg:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }} // Initial state (hidden and scaled down)
          whileInView={{ opacity: 1, scale: 1 }} // whileInView to fully visible and normal size
          transition={{ delay: 0.1, duration: 0.5 }} // Animation delay and duration
        >
          <img src={codeImg} alt="Coding" />
        </motion.div>

        {/* Checklist Items Animation */}
        <motion.div
          className="pt-12 w-full lg:w-1/2"
          initial={{ opacity: 0 }} // Initial state (hidden)
          whileInView={{ opacity: 1 }} // whileInView to fully visible
          transition={{ delay: 0.3, duration: 0.5 }} // Animation delay and duration
        >
          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex mb-12"
              initial={{ opacity: 0, y: 50 }} // Initial state (hidden and shifted down)
              whileInView={{ opacity: 1, y: 0 }} // whileInView to fully visible and original position
              transition={{ delay: index * 0.2, duration: 0.8 }} // Staggered animation
            >
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Workflow;
