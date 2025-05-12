
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const CommunityOutreachGallery = () => {
  const outreachImages = [
    {
      src: "/lovable-uploads/a8e3a81d-3b5f-4109-9309-39d20ff14efd.png",
      alt: "Community March Participants",
      caption: "Law enforcement and community members gathered for our substance abuse awareness campaign"
    },
    {
      src: "/lovable-uploads/c5f10a5b-7dc3-45d9-94f0-980fa1200298.png",
      alt: "Women's Support Group",
      caption: "Women from our support network at the community anti-GBV march"
    },
    {
      src: "/lovable-uploads/bafd2c64-7b60-4b51-9cc0-73ba028b6d28.png",
      alt: "Radio Station Outreach",
      caption: "Our team discussing substance abuse issues on Rainbow FM in 2018"
    },
    {
      src: "/lovable-uploads/252b3eed-e5a5-48fb-b091-e35e27bfb64f.png",
      alt: "Evolution Meeting Team",
      caption: "Our dedicated team members at an outreach event"
    },
    {
      src: "/lovable-uploads/91f606d5-123d-460e-b42b-4556d34e79c3.png",
      alt: "School Outreach Partnership",
      caption: "Meeting with school administrators to expand our educational programs"
    },
    {
      src: "/lovable-uploads/0b84e2bc-7e3e-4b2b-8c70-54dac831f419.png",
      alt: "Community Safety Partners",
      caption: "Our collaborative efforts with law enforcement and safety officers"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {outreachImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden h-full">
            <div className="aspect-w-16 aspect-h-12 relative">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover"
                onError={(e) => {
                  console.error("Failed to load image");
                  e.currentTarget.src = "https://placehold.co/600x400?text=Image+Not+Found";
                }}
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600">{image.caption}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default CommunityOutreachGallery;
