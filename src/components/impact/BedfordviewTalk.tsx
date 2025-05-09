
import { motion } from "framer-motion";

const BedfordviewTalk = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="md:flex">
        <div className="md:w-1/2">
          <img 
            src="/images/impact-story2.jpg" 
            alt="Bedfordview High School Talk" 
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error("Failed to load image:", "/images/impact-story2.jpg");
              e.currentTarget.src = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200";
            }}
          />
        </div>
        <div className="md:w-1/2 p-8">
          <h3 className="text-2xl font-bold mb-4">Talk at Bedfordview Highschool</h3>
          <p className="text-gray-600 mb-4">
            Our team conducted an impactful presentation at Bedfordview High School in 2019, addressing the critical issues
            of substance abuse and gender-based violence affecting young people in our communities.
          </p>
          <p className="text-gray-600 mb-4">
            The session engaged students in open conversations about recognizing warning signs, prevention strategies, 
            and available resources for support. Our interactive approach encouraged questions and dialogue.
          </p>
          <p className="text-gray-600">
            Following this event, the school reported increased student awareness and a notable rise in students
            seeking guidance from school counselors on these important issues.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BedfordviewTalk;
