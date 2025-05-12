
import { motion } from "framer-motion";

const FeaturedImpactStory = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto"
    >
      <div className="md:flex">
        <div className="md:w-1/2">
          <img 
            src="/lovable-uploads/aaa2303c-581a-48b6-8007-106629955e87.png" 
            alt="Evolution Meeting x Rainbow FM March" 
            className="h-full w-full object-cover"
            onError={(e) => {
              console.error("Failed to load image");
              e.currentTarget.src = "https://placehold.co/600x400?text=Image+Not+Found";
            }}
          />
        </div>
        <div className="p-8 md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Evolution Meeting x Rainbow FM</h3>
          <p className="text-gray-700 mb-4">
            Our collaboration with Rainbow FM led to a powerful march against substance abuse and gender-based violence, 
            reaching thousands of community members in Edenvale and surrounding areas.
          </p>
          <p className="text-gray-700 mb-4">
            The march featured testimonials from survivors, calls to action from community leaders, and provided resources for 
            those affected by these issues. Radio coverage extended our message to listeners who couldn't physically attend.
          </p>
          <p className="text-gray-700 mb-4">
            This partnership helped increase awareness and led to a 40% rise in support group attendance and helpline calls 
            in the months following the event.
          </p>
          <div className="text-sm text-gray-500 mt-6">
            <p>May 5, 2019</p>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2">
            <img
              src="/lovable-uploads/bafd2c64-7b60-4b51-9cc0-73ba028b6d28.png"
              alt="Radio interview at Rainbow FM"
              className="w-full h-48 object-cover rounded-lg"
              onError={(e) => {
                console.error("Failed to load image");
                e.currentTarget.src = "https://placehold.co/600x400?text=Image+Not+Found";
              }}
            />
          </div>
          <div className="md:w-1/2">
            <h4 className="font-bold mb-2">Radio Awareness Campaign</h4>
            <p className="text-gray-600 text-sm">
              Our team participated in a series of radio interviews on Rainbow FM to discuss substance abuse 
              prevention and recovery services. These broadcasts reached an estimated 50,000 listeners 
              across the Gauteng province, helping to spread our message and connect those in need with our services.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedImpactStory;
