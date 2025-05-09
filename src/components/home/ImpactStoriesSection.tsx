
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ImpactStoryCard from "../ui/impact-story-card";
import SectionHeading from "../ui/section-heading";
import { motion } from "framer-motion";

const ImpactStoriesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <SectionHeading 
          title="IMPACT STORIES" 
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ImpactStoryCard
            title="March for Substance Abuse and Gender Based Violence"
            excerpt="Our community came together in solidarity to raise awareness and demand action against substance abuse and gender-based violence that affects our society."
            image="/images/impact-story1.jpg"
            date="May 12, 2019"
            link="/impact-stories"
          />
          <ImpactStoryCard
            title="Evolution Meeting x Rainbow FM Collaboration"
            excerpt="We partnered with Rainbow FM for a special awareness event that reached thousands of listeners, spreading our message of hope and recovery."
            image="/lovable-uploads/016a2f5f-6e02-4e2e-b040-0c2296357317.png"
            date="April 28, 2020"
            link="/impact-stories"
          />
          <ImpactStoryCard
            title="Edenglen High School Awareness Campaign"
            excerpt="Students from Edenglen High School participated in our substance abuse and gender-based violence awareness program, learning how to recognize and prevent these issues."
            image="/images/impact-story3.jpg"
            date="April 05, 2018"
            link="/impact-stories"
          />
        </div>
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button asChild variant="outline" className="border-em-purple text-em-purple hover:bg-em-purple hover:text-white">
            <Link to="/impact-stories">Read More Stories</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStoriesSection;
