import { motion } from "framer-motion"; // Import motion from framer-motion
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      {/* Heading Animation */}
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"
        initial={{ opacity: 0, y: -50 }} // Initial state (hidden and above)
        whileInView
={{ opacity: 1, y: 0 }} // whileInView
 to visible and in place
        transition={{ duration: 0.4 }} // Animation duration
      >
        Gemini AI
        <span className="bg-gradient-to-r from-sky-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </motion.h1>

      {/* Description Animation */}
      <motion.p
        className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"
        initial={{ opacity: 0 }} // Initial state (hidden)
        whileInView
={{ opacity: 1 }} // whileInView
 to fully visible
        transition={{ delay: 0.5, duration: 0.4 }} // Slight delay and animation duration
      >
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </motion.p>

      {/* Button Animation */}
      <motion.div
        className="flex justify-center my-10"
        initial={{ opacity: 0 }} // Initial state (hidden)
        whileInView
={{ opacity: 1 }} // whileInView
 to fully visible
        transition={{ delay: 1, duration: 0.4 }} // Slight delay and duration
      >
        <Link
          to="/Gemini"
          className="bg-gradient-to-r from-sky-500 to-sky-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </Link>
      </motion.div>

      {/* Video Section Animation */}
      <motion.div
        className="flex mt-10 justify-center"
        initial={{ opacity: 0 }} // Initial state (hidden)
        whileInView
={{ opacity: 1 }} // whileInView
 to fully visible
        transition={{ delay: 1.5, duration: 0.4 }} // Slight delay and duration
      >
        <motion.video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-sky-700 shadow-sm shadow-sky-400 mx-2 my-4"
          initial={{ opacity: 0, scale: 0.9 }} // Initial state (hidden and scaled down)
          whileInView
={{ opacity: 1, scale: 1 }} // whileInView
 to fully visible and normal scale
          transition={{ delay: 2, duration: 0.4 }} // Animation duration and delay
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        <motion.video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-sky-700 shadow-sm shadow-sky-400 mx-2 my-4"
          initial={{ opacity: 0, scale: 0.9 }} // Initial state (hidden and scaled down)
          whileInView
={{ opacity: 1, scale: 1 }} // whileInView
 to fully visible and normal scale
          transition={{ delay: 2.2, duration: 0.4 }} // Animation duration and delay
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </motion.div>
    </div>
  );
};

export default HeroSection;
