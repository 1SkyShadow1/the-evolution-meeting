
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProtestsSection = () => {
  const protests = [
    {
      title: "March for Justice #JusticeForCwecwe",
      date: "June 2, 2022",
      location: "Edenvale Community Center",
      description: "Over 300 community members joined us in a peaceful protest demanding justice for victims of gender-based violence and highlighting the need for stricter enforcement of protection orders.",
      image: "/lovable-uploads/a8e3a81d-3b5f-4109-9309-39d20ff14efd.png",
      additionalImage: "/lovable-uploads/c5f10a5b-7dc3-45d9-94f0-980fa1200298.png"
    },
    {
      title: "Anti-Substance Abuse Awareness Walk",
      date: "August 15, 2021",
      location: "Bedfordview to Edenvale",
      description: "Our 5km awareness walk brought together families affected by substance abuse, recovery program participants, and community supporters to raise awareness about addiction issues in our communities.",
      image: "/lovable-uploads/0b84e2bc-7e3e-4b2b-8c70-54dac831f419.png",
      additionalImage: "/lovable-uploads/016a2f5f-6e02-4e2e-b040-0c2296357317.png"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {protests.map((protest, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden h-full flex flex-col">
            <div className="h-56 overflow-hidden">
              <img 
                src={protest.image} 
                alt={protest.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error("Failed to load image");
                  e.currentTarget.src = "https://placehold.co/600x400?text=Image+Not+Found";
                }}
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-3">{protest.title}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-2 text-em-purple" />
                  <span>{protest.date}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-em-purple" />
                  <span>{protest.location}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 flex-grow">{protest.description}</p>
              
              {protest.additionalImage && (
                <div className="mb-4 rounded-md overflow-hidden">
                  <img 
                    src={protest.additionalImage}
                    alt={`Additional image for ${protest.title}`}
                    className="w-full h-40 object-cover"
                    onError={(e) => {
                      console.error("Failed to load image");
                      e.currentTarget.src = "https://placehold.co/600x400?text=Image+Not+Found";
                    }}
                  />
                </div>
              )}
              
              <Button 
                asChild
                variant="outline" 
                className="border-em-purple text-em-purple hover:bg-em-purple hover:text-white transition-colors duration-300 mt-auto"
              >
                <Link to="#">Read Full Story</Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ProtestsSection;
