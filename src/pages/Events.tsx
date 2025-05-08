import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <Layout>
      <HeroSection
        title="EVENTS"
        subtitle="Follow Us for Future Updates and Events"
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionHeading 
            title="UPCOMING EVENTS" 
            subtitle="Follow Us for Future Updates and Events"
            centered={true}
          />

          <div className="max-w-3xl mx-auto text-center my-20 p-8 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex flex-col items-center justify-center mb-8">
              <CalendarDays className="h-20 w-20 text-em-purple mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold">No Events Currently Scheduled</h3>
            </div>
            
            <p className="text-lg mb-8">
              We're currently planning our next series of community events and outreach programs. Follow our social media channels or check back here for updates on future events.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-em-purple hover:bg-em-purple-dark">
                Subscribe to Updates
              </Button>
              <Button variant="outline" className="border-em-purple text-em-purple hover:bg-em-purple hover:text-white">
                View Past Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <AlertCircle className="h-8 w-8 mr-3 text-em-red" />
            <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
          </div>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            "OUR HEART IN YOUR SERVICE" - The Evolution Meeting is committed to helping the generation be free from substance abuse.
          </p>
          <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md flex-1">
              <Clock className="h-10 w-10 mx-auto mb-4 text-em-purple" />
              <h3 className="text-xl font-bold mb-2">Established</h3>
              <p>Since 2014, we've been working to improve the physical, spiritual, and health of substance abusers and build community alliances to prevent and reduce substance abuse.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex-1">
              <h3 className="text-xl font-bold mb-2">BE DRUG FREE!</h3>
              <p>Our program aims to deal with stigma and teach communities how to be substance abuse-free. We provide comprehensive support, including counseling, support groups, and education.</p>
            </div>
          </div>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-em-red hover:bg-em-red-dark">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
