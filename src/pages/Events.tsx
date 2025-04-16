
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getEvents, Event } from "@/services/events.service";

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { success, data, error } = await getEvents();
        
        if (success && data) {
          setEvents(data);
        } else {
          console.error("Error fetching events:", error);
          // Show UI with sample events if the database is empty
          if (data && data.length === 0) {
            setSampleEvents();
          } else {
            toast.error("Failed to load events. Please try again later.");
          }
        }
      } catch (error) {
        console.error("Error in fetchEvents:", error);
        setSampleEvents();
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Function to use sample events when the database is empty
  const setSampleEvents = () => {
    setEvents([
      {
        id: "1",
        title: "March for Justice #JusticeForCwecwe",
        description: "Join us in a peaceful demonstration to raise awareness about gender-based violence and demand justice for victims. Together, we can make our voices heard and push for meaningful change in our community.",
        date: new Date("2026-06-02T10:00:00"),
        location: "Edenvale Community Center",
        image_url: "/images/march-for-justice.jpg"
      },
      {
        id: "2",
        title: "Substance Abuse Awareness Workshop",
        description: "This interactive workshop will provide valuable information about substance abuse, its effects, and recovery options. Experts will share insights and answer questions to help attendees understand addiction and support those affected.",
        date: new Date("2026-07-15T14:00:00"),
        location: "Edenvale Library Hall",
        image_url: "/images/substance-abuse.jpg"
      },
      {
        id: "3",
        title: "Support Group Meeting for GBV Survivors",
        description: "A safe and confidential space for survivors of gender-based violence to share experiences, offer mutual support, and learn coping strategies. Trained facilitators will guide the session to ensure a healing environment.",
        date: new Date("2026-05-20T18:00:00"),
        location: "The Evolution Meeting Office",
        image_url: "/images/gbv-support.jpg"
      }
    ]);
  };

  const formatEventDate = (date: Date) => {
    return format(new Date(date), "MMMM d, yyyy");
  };

  const formatEventTime = (date: Date) => {
    return format(new Date(date), "h:mm a");
  };

  return (
    <Layout>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
        title="EVENTS"
        subtitle="Join us and be part of the change"
      />

      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading 
            title="UPCOMING EVENTS" 
            subtitle="Get Involved and Make a Difference"
            centered={true}
          />

          {isLoading ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-em-purple"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 mt-10">
              {events.map((event) => (
                <Card key={event.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <div className="h-64 md:h-full">
                      <img 
                        src={event.image_url || "/placeholder.svg"} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold mb-3 text-em-purple">{event.title}</h3>
                        <p className="text-gray-600 mb-6">{event.description}</p>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-em-red mr-2" />
                            <span>{formatEventDate(event.date)}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-em-red mr-2" />
                            <span>{formatEventTime(event.date)}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-5 w-5 text-em-red mr-2" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          <Button className="bg-em-purple hover:bg-em-purple-dark">
                            Register to Attend
                          </Button>
                          <Button variant="outline" className="border-em-purple text-em-purple hover:bg-em-purple hover:text-white">
                            Share Event
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Organize Your Own Event</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Want to host an awareness campaign, fundraiser, or community workshop? 
            We can help you organize events that make a real impact.
          </p>
          <Button asChild size="lg" className="bg-em-red hover:bg-em-red-dark">
            <a href="/contact">Contact Us to Get Started</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
