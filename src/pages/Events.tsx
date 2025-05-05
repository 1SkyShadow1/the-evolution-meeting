
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

const Events = () => {
  return (
    <Layout>
      <HeroSection
        backgroundImage="/lovable-uploads/310e2609-1298-4780-bbc8-71297db433ef.png"
        title="EVENTS"
        subtitle="Join us and be part of the change"
      />

      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading 
            title="UPCOMING EVENTS" 
            subtitle="Follow Us for Future Updates and Events"
            centered={true}
          />

          <div className="max-w-3xl mx-auto text-center my-20 p-8 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200">
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Want to Organize an Event with Us?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10">
            If you're interested in partnering with The Evolution Meeting for community outreach, awareness campaigns, or educational workshops, please get in touch.
          </p>
          <Button asChild size="lg" className="bg-em-red hover:bg-em-red-dark">
            <a href="/contact">Contact Our Team</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
