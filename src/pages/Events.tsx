
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, AlertCircle, Facebook, Youtube } from "lucide-react";
import { TikTokIcon } from "@/components/ui/custom-icons";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <Layout>
      <HeroSection
        title="EVENTS"
        subtitle="Follow Us for Future Updates and Events"
      />

      <section className="section-padding bg-[#222222] text-white">
        <div className="container mx-auto">
          <SectionHeading 
            title="UPCOMING EVENTS" 
            subtitle="Follow Us for Future Updates and Events"
            centered={true}
            className="text-white"
          />

          <div className="max-w-3xl mx-auto text-center my-20 p-8 bg-[#403E43] rounded-lg border border-gray-600">
            <div className="flex flex-col items-center justify-center mb-8">
              <CalendarDays className="h-20 w-20 text-em-purple mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold">No Events Currently Scheduled</h3>
            </div>
            
            <p className="text-lg mb-8">
              We're currently planning our next series of community events and outreach programs. Follow our social media channels or check back here for updates on future events.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button className="bg-em-purple hover:bg-em-purple-dark">
                Subscribe to Updates
              </Button>
              <Button variant="outline" className="border-em-purple text-white hover:bg-em-purple hover:text-white">
                View Past Events
              </Button>
            </div>
            
            {/* Social Media Follow Section */}
            <div className="mt-10 border-t border-gray-600 pt-8">
              <h4 className="text-xl font-semibold mb-4">Follow Us for Event Updates</h4>
              <div className="flex flex-wrap justify-center gap-8">
                <a href="https://facebook.com/www.evomeeting.org" target="_blank" rel="noopener noreferrer" 
                   className="flex flex-col items-center hover:scale-105 transition-transform">
                  <div className="bg-blue-600 rounded-full p-4 mb-2">
                    <Facebook className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm">The Evolution Meeting</span>
                </a>
                
                <a href="https://www.tiktok.com/@please.advise8" target="_blank" rel="noopener noreferrer" 
                   className="flex flex-col items-center hover:scale-105 transition-transform">
                  <div className="bg-black rounded-full p-4 mb-2">
                    <TikTokIcon className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm">@please.advise8</span>
                </a>
                
                <a href="https://www.youtube.com/@morethancon" target="_blank" rel="noopener noreferrer" 
                   className="flex flex-col items-center hover:scale-105 transition-transform">
                  <div className="bg-red-600 rounded-full p-4 mb-2">
                    <Youtube className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm">@morethancon</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1A1F2C] text-white text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <AlertCircle className="h-8 w-8 mr-3 text-em-red" />
            <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
          </div>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            "OUR HEART IN YOUR SERVICE" - The Evolution Meeting is committed to helping the generation be free from substance abuse.
          </p>
          <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
            <div className="bg-[#403E43] p-6 rounded-lg shadow-md flex-1">
              <Clock className="h-10 w-10 mx-auto mb-4 text-em-purple" />
              <h3 className="text-xl font-bold mb-2">Established</h3>
              <p>Since 2014, we've been working to improve the physical, spiritual, and health of substance abusers and build community alliances to prevent and reduce substance abuse.</p>
            </div>
            <div className="bg-[#403E43] p-6 rounded-lg shadow-md flex-1">
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
