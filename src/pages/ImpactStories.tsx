
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import ImpactStoryCard from "@/components/ui/impact-story-card";
import BedfordviewTalk from "@/components/impact/BedfordviewTalk";
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto"
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="/lovable-uploads/016a2f5f-6e02-4e2e-b040-0c2296357317.png" 
                  alt="Evolution Meeting x Rainbow FM" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Evolution Meeting x Rainbow FM</h3>
                <p className="text-gray-700 mb-4">
                  Our collaboration with Rainbow FM reached thousands of listeners, bringing awareness to gender-based violence 
                  and substance abuse issues in our communities. The campaign featured survivor stories, expert interviews, 
                  and practical advice for those affected.
                </p>
                <p className="text-gray-700 mb-4">
                  This partnership helped us connect with many individuals who were previously unaware of available support 
                  services, leading to a 40% increase in helpline calls and support group attendance.
                </p>
                <div className="text-sm text-gray-500 mt-6">
                  <p>April 18, 2026</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bedfordview High School Talk Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading 
            title="School Outreach Programs" 
            centered={true}
          />
          <BedfordviewTalk />
        </div>
      </section>

      {/* More Impact Stories */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionHeading 
            title="More Stories of Impact" 
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImpactStoryCard
              title="March for Substance Abuse and Gender Based Violence"
              excerpt="Our community came together in solidarity to raise awareness and demand action against substance abuse and gender-based violence affecting our society."
              image="/images/impact-story1.jpg"
              date="May 12, 2026"
              link="#"
            />
            <ImpactStoryCard
              title="Edenglen Highschool Awareness Campaign"
              excerpt="Students from Edenglen High School participated in our substance abuse and gender-based violence awareness program, learning how to recognize and prevent these issues."
              image="/images/impact-story3.jpg"
              date="March 15, 2026"
              link="#"
            />
            <ImpactStoryCard
              title="Community Workshop Series"
              excerpt="Our six-week workshop series equipped community leaders with tools to address substance abuse and gender-based violence in their neighborhoods."
              image="/lovable-uploads/371ad64a-1e5b-4f39-b9f1-0a41c6263d0d.png"
              date="February 28, 2026"
              link="#"
            />
            <ImpactStoryCard
              title="Youth Development Program"
              excerpt="Twenty young people completed our leadership program and are now peer educators in their schools, promoting healthy relationships and substance-free living."
              image="/lovable-uploads/a73250b9-5837-4843-92a3-60996ef464d1.png"
              date="January 25, 2026"
              link="#"
            />
            <ImpactStoryCard
              title="Corporate Partnership Initiative"
              excerpt="Our new partnership with five local businesses is creating employment opportunities for survivors of gender-based violence and individuals in recovery."
              image="/lovable-uploads/a83c16cf-cd8e-4974-b4f5-89cf7185846f.png"
              date="December 10, 2025"
              link="#"
            />
            <ImpactStoryCard
              title="Rural Outreach Success"
              excerpt="Our mobile counseling services have reached five previously underserved rural communities, providing support to over 150 individuals in need."
              image="/lovable-uploads/6a159869-62ad-4372-a1fa-5dd9a9a1871b.png"
              date="November 5, 2025"
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
