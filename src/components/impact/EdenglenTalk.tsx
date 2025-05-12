
import { motion } from "framer-motion";

const EdenglenTalk = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="md:flex">
        <div className="md:w-1/2 order-1 md:order-2">
          <img 
            src="/lovable-uploads/72b20df4-3fe9-4a05-8415-b2c650231b5c.png" 
            alt="Edenglen High School Outreach" 
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error("Failed to load image");
              e.currentTarget.src = "https://placehold.co/600x400?text=Image+Not+Found";
            }}
          />
        </div>
        <div className="md:w-1/2 p-8 order-2 md:order-1">
          <h3 className="text-2xl font-bold mb-4">Edenglen Highschool Awareness Campaign</h3>
          <p className="text-gray-600 mb-4">
            Our team conducted an interactive awareness session at Edenglen High School, addressing the critical issues
            of substance abuse and gender-based violence affecting young people today.
          </p>
          <p className="text-gray-600 mb-4">
            The presentation reached over 200 students, providing them with essential information about recognizing warning signs,
            developing healthy relationships, and finding support when needed.
          </p>
          <p className="text-gray-600">
            Following our visit, the school established a student-led support group that continues to promote awareness
            and provide peer guidance on these important issues.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default EdenglenTalk;
