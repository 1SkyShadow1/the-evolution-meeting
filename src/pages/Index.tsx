
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import ProgramCard from "@/components/ui/program-card";
import TestimonialCard from "@/components/ui/testimonial-card";
import EventCard from "@/components/ui/event-card";
import ImpactStoriesSection from "@/components/home/ImpactStoriesSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Brain } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="We exist to end gender-based violence and support recovery from substance abuse."
        quote={{
          text: "It's painful to know I'm not alone.",
          author: "Survivor"
        }}
        primaryCta={{
          text: "DONATE",
          link: "/donate"
        }}
        secondaryCta={{
          text: "JOIN THE CAUSE",
          link: "/volunteer"
        }}
      />

      {/* About Section */}
      <motion.section 
        className="section-padding bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeading 
                title="ABOUT US" 
                subtitle="Our Story and Vision"
                centered={false}
              />
              <p className="mb-6 text-lg">
                The Evolution Meeting is a nonprofit organization dedicated to transforming lives affected by gender-based violence 
                and substance abuse in South Africa. Since our registration in 2014, we've been working to create safer communities.
              </p>
              <Button asChild className="bg-em-purple hover:bg-em-purple-dark">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="bg-em-purple absolute top-0 left-0 w-72 h-72 rounded-full opacity-20 -z-10 -translate-x-10 -translate-y-10"></div>
                <img 
                  src="/images/about-hero.jpg" 
                  alt="About The Evolution Meeting" 
                  className="rounded-lg shadow-xl max-w-full object-cover max-h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Programs Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionHeading 
            title="OUR PROGRAMS" 
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
            >
              <ProgramCard
                title="Gender-Based Violence Support"
                description="Providing counseling, legal support, and safe spaces for survivors of gender-based violence."
                icon={<Heart className="h-10 w-10" />}
                link="/programs#gbv"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ProgramCard
                title="Substance Abuse Recovery"
                description="Offering rehabilitation support, counseling, and peer groups for individuals struggling with addiction."
                icon={<Brain className="h-10 w-10" />}
                link="/programs#substance-abuse"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ProgramCard
                title="Community Engagement & Education"
                description="Educating communities, schools, and organizations on prevention and early intervention strategies."
                icon={<Users className="h-10 w-10" />}
                link="/programs#community"
              />
            </motion.div>
          </div>
          <div className="text-center mt-10">
            <Button asChild className="bg-em-purple hover:bg-em-purple-dark">
              <Link to="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading 
            title="EVENTS" 
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <EventCard
                title="March for Justice #JusticeForCwecwe"
                date="June 2, 2026"
                time="10:00 AM - 2:00 PM"
                location="Edenvale Community Center"
                image="/lovable-uploads/016a2f5f-6e02-4e2e-b040-0c2296357317.png"
                link="/events"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <EventCard
                title="Substance Abuse Awareness Workshop"
                date="July 15, 2026"
                time="2:00 PM - 5:00 PM"
                location="Edenvale Library Hall"
                image="/images/substance-abuse.jpg"
                link="/events"
              />
            </motion.div>
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-em-purple text-em-purple hover:bg-em-purple hover:text-white">
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-em-purple text-white">
        <div className="container mx-auto">
          <SectionHeading 
            title="TESTIMONIALS" 
            subtitle="Stories of Resilience and Hope"
            centered={true}
            className="text-white"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
            >
              <TestimonialCard
                quote="The counseling provided by The Evolution Meeting helped me find strength I didn't know I had. Today, I can finally say I am a survivor, not a victim."
                author="Thandi M."
                role="GBV Program Participant"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TestimonialCard
                quote="After struggling with addiction for 7 years, their recovery program gave me the support network I needed to rebuild my life and reconnect with my family."
                author="David K."
                role="Recovery Program Graduate"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <TestimonialCard
                quote="The community workshops opened my eyes to the signs of abuse. When I recognized these signs in my sister's relationship, I knew how to help her seek support."
                author="Lerato N."
                role="Workshop Participant"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section - Using our new component */}
      <ImpactStoriesSection />

      {/* Call To Action Section */}
      <motion.section 
        className="py-20 bg-em-red text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Whether through donation, volunteering, or raising awareness, your support helps us create lasting change.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-em-red hover:bg-gray-100">
              <Link to="/donate">Donate Now</Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white hover:bg-white/10">
              <Link to="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Index;
