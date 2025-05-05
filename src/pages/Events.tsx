
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
        title: "Community Safety Workshop with Law Enforcement",
        description: "Join us for an important community safety workshop in collaboration with local law enforcement. This event focuses on creating safer neighborhoods through cooperation between community members and police officers. Learn about crime prevention strategies and how we can work together to address substance abuse and gender-based violence in our communities.",
        date: new Date("2026-06-02T10:00:00"),
        location: "Edenvale Community Center",
        image_url: "/lovable-uploads/d55a8327-ca33-4e1a-8fca-fce8c5eb2457.png"
      },
      {
        id: "2",
        title: "School Outreach Program on Substance Abuse Awareness",
        description: "Our team will be visiting local schools to educate students about the dangers of substance abuse and provide helpful resources. This interactive workshop includes testimonials, informational sessions, and Q&A opportunities for students to learn about prevention and seeking help.",
        date: new Date("2026-07-15T14:00:00"),
        location: "Various School Halls",
        image_url: "/lovable-uploads/2a054218-a86f-4ef4-9ab5-7db12071babb.png"
      },
      {
        id: "3",
        title: "Anti-Drug March and Awareness Campaign",
        description: "A peaceful demonstration to raise awareness about the impact of drugs on our communities. We'll be marching through key neighborhoods with signs and educational materials, engaging with community members about prevention and support resources available.",
        date: new Date("2026-05-20T18:00:00"),
        location: "Starting at Edenvale Park",
        image_url: "/lovable-uploads/c51b8630-66c0-4540-b492-65e48da4efd8.png"
      },
      {
        id: "4",
        title: "GBV Survivors Support Group Meeting",
        description: "A safe and confidential space for survivors of gender-based violence to share experiences, offer mutual support, and learn coping strategies. Trained facilitators will guide the session to ensure a healing environment.",
        date: new Date("2026-08-05T17:30:00"),
        location: "The Evolution Meeting Office",
        image_url: "/lovable-uploads/97a21e22-141d-4741-918b-fac1d1434ced.png"
      },
      {
        id: "5",
        title: "Radio Awareness Campaign on Substance Abuse",
        description: "Join us for a special radio broadcast discussing substance abuse issues affecting our community. Our experts will share insights on prevention, treatment options, and how families can support loved ones dealing with addiction.",
        date: new Date("2026-08-25T13:00:00"),
        location: "Radio Broadcast - Tune in to 94.7 FM",
        image_url: "/lovable-uploads/d82d0bdf-4f39-45e1-8944-59f97c55eca4.png"
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
        backgroundImage="/lovable-uploads/d28296bc-4c69-45ab-9e2e-f65d68b61715.png"
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
                        onError={(e) => {
                          console.error(`Failed to load image: ${event.image_url}`);
                          e.currentTarget.src = "/placeholder.svg";
                        }}
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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Media Gallery</h2>
              <p className="text-lg mb-8">
                Take a look at some of our past events and initiatives. These images showcase our community engagement and the impact we're making together.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img src="/lovable-uploads/fd65c1c0-185b-4b87-a6d9-5aa3a9232d07.png" alt="Community members" className="rounded-lg h-32 w-full object-cover" />
                <img src="/lovable-uploads/016a2f5f-6e02-4e2e-b040-0c2296357317.png" alt="Group photo" className="rounded-lg h-32 w-full object-cover" />
                <img src="/lovable-uploads/c7219bae-72f5-46b8-b6a4-b0523dacac5c.png" alt="Team members" className="rounded-lg h-32 w-full object-cover" />
                <img src="/lovable-uploads/b3836fac-ec10-4dc9-a7bc-8c9a6a91d6c9.png" alt="Volunteers" className="rounded-lg h-32 w-full object-cover" />
                <img src="/lovable-uploads/f452e2e5-08ff-406e-897d-d5039e358617.png" alt="Support team" className="rounded-lg h-32 w-full object-cover" />
                <img src="/lovable-uploads/8b0557fd-14f4-4bc8-8944-487f8c6df699.png" alt="Community outreach" className="rounded-lg h-32 w-full object-cover" />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Organize Your Own Event</h2>
              <p className="text-lg mb-8">
                Want to host an awareness campaign, fundraiser, or community workshop? 
                We can help you organize events that make a real impact.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Types of Events We Support</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-em-red mr-2 mt-1">•</div>
                    <span><strong>Awareness Campaigns</strong> - Raising visibility for important issues</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-em-red mr-2 mt-1">•</div>
                    <span><strong>Educational Workshops</strong> - Teaching prevention and support strategies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-em-red mr-2 mt-1">•</div>
                    <span><strong>Support Group Meetings</strong> - Creating safe spaces for healing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-em-red mr-2 mt-1">•</div>
                    <span><strong>Fundraisers</strong> - Gathering resources for our programs</span>
                  </li>
                </ul>
                <Button asChild size="lg" className="bg-em-red hover:bg-em-red-dark w-full">
                  <a href="/contact">Contact Us to Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
