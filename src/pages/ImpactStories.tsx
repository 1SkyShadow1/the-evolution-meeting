
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import ImpactStoryCard from "@/components/ui/impact-story-card";
import FeaturedImpactStory from "@/components/impact/FeaturedImpactStory";
import BedfordviewTalk from "@/components/impact/BedfordviewTalk";
import EdenglenTalk from "@/components/impact/EdenglenTalk";
import ProtestsSection from "@/components/impact/ProtestsSection";
import CommunityOutreachGallery from "@/components/impact/CommunityOutreachGallery";
import { motion } from "framer-motion";

const ImpactStories = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/lovable-uploads/29ccc5e1-a424-43e3-a911-d1bd3e986d88.png"
        title="IMPACT STORIES"
        subtitle="Stories of Transformation and Hope"
      />

      {/* Featured Story */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionHeading 
            title="Featured Story"
            centered={true}
          />
          <FeaturedImpactStory />
        </div>
      </section>

      {/* Protests and Marches Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Protests & Marches" 
            centered={true}
          />
          <ProtestsSection />
        </div>
      </section>

      {/* School Outreach Programs Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionHeading 
            title="School Outreach Programs" 
            centered={true}
          />
          <div className="space-y-12">
            <BedfordviewTalk />
            <EdenglenTalk />
          </div>
        </div>
      </section>

      {/* Community Outreach Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Community Outreach Gallery" 
            centered={true}
          />
          <CommunityOutreachGallery />
        </div>
      </section>

      {/* More Impact Stories */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionHeading 
            title="More Stories of Impact" 
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImpactStoryCard
              title="Community Workshop Series"
              excerpt="Our six-week workshop series equipped community leaders with tools to address substance abuse and gender-based violence in their neighborhoods."
              image="/lovable-uploads/371ad64a-1e5b-4f39-b9f1-0a41c6263d0d.png"
              date="February 28, 2017"
              link="#"
            />
            <ImpactStoryCard
              title="Youth Development Program"
              excerpt="Twenty young people completed our leadership program and are now peer educators in their schools, promoting healthy relationships and substance-free living."
              image="/lovable-uploads/a73250b9-5837-4843-92a3-60996ef464d1.png"
              date="January 25, 2016"
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-em-purple text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Help Us Create More Success Stories</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support makes our work possible. Join us in creating more stories of hope, healing, and transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a 
              href="/donate" 
              className="bg-white text-em-purple px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Donate Today
            </motion.a>
            <motion.a 
              href="/volunteer" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Volunteer With Us
            </motion.a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ImpactStories;
