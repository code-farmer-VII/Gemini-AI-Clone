import { motion } from "framer-motion"; // Import motion from framer-motion
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide" id="Testimonials">
      {/* Heading Animation */}
      <motion.h2
        className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20"
        initial={{ opacity: 0, y: -50 }} // Initial state (hidden and above)
        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
        transition={{ duration: 1 }} // Animation duration
      >
        What People are saying
      </motion.h2>

      {/* Testimonial Cards */}
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2"
            initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly down)
            whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
            transition={{ delay: index * 0.3, duration: 0.8 }} // Staggered animation for each card
          >
            <motion.div
              className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }} // Scale up on hover
              transition={{ duration: 0.3 }} // Smooth hover effect
            >
              <p className="text-neutral-100 mb-6">{testimonial.text}</p>
              <div className="flex items-center mt-8">
                <motion.img
                  className="w-16 h-16 mr-6 rounded-full border-2 border-neutral-300 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-110"
                  src={testimonial.image}
                  alt={testimonial.user}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
                <div>
                  <h6 className="text-lg font-semibold text-white">{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-500">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
