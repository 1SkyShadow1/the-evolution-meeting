
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import EventCard from "@/components/ui/event-card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  // Mock event data
  const upcomingEvents = [
    {
      id: 1,
      title: "March for Justice #JusticeForCwecwe",
      date: "June 2, 2026",
      time: "10:00 AM - 2:00 PM",
      location: "Edenvale Community Center",
      image: "/images/march-for-justice.jpg",
      description: "Join us as we march to raise awareness about gender-based violence and call for justice for victims. The march will be followed by a community dialogue on steps to combat GBV in our neighborhoods."
    },
    {
      id: 2,
      title: "Substance Abuse Awareness Workshop",
      date: "July 15, 2026",
      time: "2:00 PM - 5:00 PM",
      location: "Edenvale Library Hall",
      image: "/images/substance-abuse.jpg",
      description: "An interactive workshop focused on recognizing the signs of substance abuse and understanding pathways to recovery. Open to all community members, especially those with family members affected by addiction."
    },
    {
      id: 3,
      title: "Youth Empowerment Day",
      date: "August 10, 2026",
      time: "9:00 AM - 3:00 PM",
      location: "Edenvale High School",
      image: "/images/community-engagement.jpg",
      description: "A day dedicated to empowering young people through workshops on healthy relationships, peer pressure resistance, and leadership development. Activities include art therapy, sports, and interactive discussions."
    },
    {
      id: 4,
      title: "Recovery Celebration & Support Group",
      date: "September 5, 2026",
      time: "6:00 PM - 8:00 PM",
      location: "The Evolution Meeting Center",
      image: "/images/substance-abuse.jpg",
      description: "A monthly gathering to celebrate recovery milestones and provide ongoing support for individuals in recovery from substance abuse. Families and support people welcome."
    },
    {
      id: 5,
      title: "GBV Support Circle",
      date: "September 18, 2026",
      time: "5:00 PM - 6:30 PM",
      location: "The Evolution Meeting Center",
      image: "/images/gbv-support.jpg",
      description: "A safe, confidential space for survivors of gender-based violence to share experiences, heal, and build community. Led by trained facilitators with lived experience."
    },
    {
      id: 6,
      title: "Community Health Fair",
      date: "October 22, 2026",
      time: "10:00 AM - 4:00 PM",
      location: "Edenvale Park",
      image: "/images/community-engagement.jpg",
      description: "A comprehensive health fair featuring information booths, health screenings, and resources related to mental health, substance abuse prevention, and GBV awareness. Free and open to all."
    }
  ];

  const featuredEvent = upcomingEvents[0];
  const otherEvents = upcomingEvents.slice(1);

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/march-for-justice.jpg"
        title="EVENTS"
        subtitle="Join Us in Making a Difference"
      />

      {/* Featured Event Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading 
            title="Featured Event" 
            centered={true}
          />
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-full">
                <img 
                  src={featuredEvent.image} 
                  alt={featuredEvent.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{featuredEvent.title}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-em-purple" />
                    <span>{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-em-purple" />
                    <span>{featuredEvent.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-em-purple" />
                    <span>{featuredEvent.location}</span>
                  </div>
                </div>
                <p className="mb-6">{featuredEvent.description}</p>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-em-purple hover:bg-em-purple-dark">
                    Register Now
                  </Button>
                  <Button variant="outline" className="border-em-purple text-em-purple hover:bg-em-purple hover:text-white">
                    Add to Calendar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Upcoming Events" 
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherEvents.map(event => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                image={event.image}
                link={`/events/${event.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <SectionHeading 
            title="Event Calendar" 
            subtitle="Plan Your Participation"
            centered={true}
          />
          <p className="max-w-3xl mx-auto mb-8">
            Our events calendar is regularly updated with new opportunities to get involved. 
            Check back often or subscribe to our newsletter to stay informed about upcoming events.
          </p>
          <div className="flex justify-center">
            <Button asChild className="bg-em-red hover:bg-em-red-dark">
              <Link to="/contact">Subscribe to Updates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Host an Event Section */}
      <section className="section-padding bg-em-purple text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Host an Event With Us</h2>
            <p className="text-lg mb-8">
              Interested in hosting a GBV awareness event or substance abuse education session for your 
              community, school, or organization? Our team can help you organize impactful events 
              tailored to your specific audience.
            </p>
            <Button asChild className="bg-white text-em-purple hover:bg-gray-100">
              <Link to="/contact">Contact Us to Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
