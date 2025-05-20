
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, AlertCircle, Facebook, Youtube, Twitter } from "lucide-react";
import { TikTokIcon } from "@/components/ui/custom-icons";
import { Link } from "react-router-dom";
import { getEvents, Event } from "@/services/events.service";
import EventCard from "@/components/ui/event-card";
import { format } from "date-fns";

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const result = await getEvents();
      if (result.success) {
        setEvents(result.data);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);

  const formatEventDate = (date: Date) => {
    return format(new Date(date), "dd MMMM yyyy");
  };

  const formatEventTime = (date: Date) => {
    return format(new Date(date), "h:mm a");
  };

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
            subtitle="Join Us at Our Next Community Events"
            centered={true}
            className="text-white"
            isFirstSection={true}
          />

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-em-purple"></div>
            </div>
          ) : events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {events.map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  date={formatEventDate(event.date)}
                  time={formatEventTime(event.date)}
                  location={event.location}
                  image={event.image_url}
                  link={`#event-${event.id}`}
                  className="hover:transform hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          ) : (
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
            </div>
          )}
          
          {/* Social Media Follow Section */}
          <div className="max-w-3xl mx-auto border-t border-gray-600 pt-12">
            <h4 className="text-2xl font-semibold mb-6 text-center">Follow Us for Event Updates</h4>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="https://www.facebook.com/www.evomeeting.org" target="_blank" rel="noopener noreferrer" 
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
              
              <a href="https://x.com/Evomeeting2" target="_blank" rel="noopener noreferrer" 
                 className="flex flex-col items-center hover:scale-105 transition-transform">
                <div className="bg-black rounded-full p-4 mb-2">
                  <Twitter className="h-8 w-8 text-white" />
                </div>
                <span className="text-sm">@Evomeeting2</span>
              </a>
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
