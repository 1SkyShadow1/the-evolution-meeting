
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
            src="/lovable-uploads/8db685e8-cc5c-4ae6-9d26-3fd7cba217fe.png" 
            alt="Bedfordview High School Talk" 
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error("Failed to load image");
              e.currentTarget.src = "https://placehold.co/600x400?text=Image+Not+Found";
            }}
          />
        </div>
        <div className="md:w-1/2 p-8">
          <h3 className="text-2xl font-bold mb-4">Talk at Bedfordview Highschool</h3>
          <p className="text-gray-600 mb-4">
            Our team conducted an impactful presentation at Bedfordview High School, addressing the critical issues
            of substance abuse and gender-based violence affecting young people in our communities.
          </p>
          <p className="text-gray-600 mb-4">
            The session engaged over 500 students in open conversations about recognizing warning signs, prevention strategies, 
            and available resources for support. Our interactive approach encouraged questions and dialogue.
          </p>
          <p className="text-gray-600">
            Following this event, the school reported increased student awareness and a notable rise in students
            seeking guidance from school counselors on these important issues.
          </p>
        </div>
      </div>
      <div className="bg-gray-50 p-6 flex flex-wrap gap-4">
        <img 
          src="/lovable-uploads/0816b797-6e82-4846-896f-1836bcce1b66.png" 
          alt="Students at Bedfordview High School" 
          className="w-full md:w-[48%] h-48 object-cover rounded-lg"
          onError={(e) => {
            console.error("Failed to load image");
            e.currentTarget.src = "https://placehold.co/600x400?text=Image+Not+Found";
          }}
        />
        <img 
          src="/lovable-uploads/6512f80a-9d0e-4a6f-b5d8-dc5ee1a45fc1.png" 
          alt="Presentation at Bedfordview High School" 
          className="w-full md:w-[48%] h-48 object-cover rounded-lg"
          onError={(e) => {
            console.error("Failed to load image");
            e.currentTarget.src = "https://placehold.co/600x400?text=Image+Not+Found";
          }}
        />
      </div>
    </motion.div>
  );
};

export default BedfordviewTalk;
