
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
            src="/lovable-uploads/6512f80a-9d0e-4a6f-b5d8-dc5ee1a45fc1.png" 
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
      <div className="bg-gray-50 p-6 flex flex-wrap gap-4">
        <img 
          src="/lovable-uploads/8db685e8-cc5c-4ae6-9d26-3fd7cba217fe.png" 
          alt="Students at Edenglen High School" 
          className="w-full md:w-[48%] h-48 object-cover rounded-lg"
          onError={(e) => {
            console.error("Failed to load image");
            e.currentTarget.src = "https://placehold.co/600x400?text=Image+Not+Found";
          }}
        />
        <img 
          src="/lovable-uploads/91f606d5-123d-460e-b42b-4556d34e79c3.png" 
          alt="School officials discussion" 
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

export default EdenglenTalk;
