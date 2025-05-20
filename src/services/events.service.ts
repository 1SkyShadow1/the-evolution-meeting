
// Defining the interface for events
export interface Event {
  id?: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  image_url?: string;
}

// Mock function for getting events while Supabase setup is pending
export const getEvents = async () => {
  try {
    // Return hardcoded sample events
    const events = [
      {
        id: "1",
        title: "Awareness Campaign at Greenstone Taxi Rank",
        description: "Join us for an important awareness campaign at Greenstone Taxi Rank. We'll be distributing information about substance abuse prevention and gender-based violence support services to commuters and taxi operators.",
        date: new Date("2025-05-27T12:00:00"),
        location: "Greenstone Taxi Rank",
        image_url: "/lovable-uploads/d55a8327-ca33-4e1a-8fca-fce8c5eb2457.png"
      },
      {
        id: "2",
        title: "Early Childhood Development Centers Outreach",
        description: "Engaging with Compass ECD, Pinocchio ECD, and Tree of Hope ECD centers to provide educational materials and information sessions for staff and parents about substance abuse awareness and prevention.",
        date: new Date("2025-05-29T09:30:00"),
        location: "Compass ECD, Pinocchio ECD, and Tree of Hope ECD",
        image_url: "/lovable-uploads/2a054218-a86f-4ef4-9ab5-7db12071babb.png"
      },
      {
        id: "3",
        title: "Bedfordview ECDs Awareness Visit",
        description: "The Evolution Meeting team will visit Early Childhood Development centers in Bedfordview to provide educational sessions and resources for children, staff, and parents about community safety and substance abuse prevention.",
        date: new Date("2025-05-30T09:00:00"),
        location: "Bedfordview ECDs (Location to be confirmed)",
        image_url: "/lovable-uploads/97a21e22-141d-4741-918b-fac1d1434ced.png"
      },
      {
        id: "4",
        title: "Community Safety Workshop with Law Enforcement",
        description: "Join us for an important community safety workshop in collaboration with local law enforcement. This event focuses on creating safer neighborhoods through cooperation between community members and police officers. Learn about crime prevention strategies and how we can work together to address substance abuse and gender-based violence in our communities.",
        date: new Date("2026-06-02T10:00:00"),
        location: "Edenvale Community Center",
        image_url: "/lovable-uploads/d55a8327-ca33-4e1a-8fca-fce8c5eb2457.png"
      },
      {
        id: "5",
        title: "School Outreach Program on Substance Abuse Awareness",
        description: "Our team will be visiting local schools to educate students about the dangers of substance abuse and provide helpful resources. This interactive workshop includes testimonials, informational sessions, and Q&A opportunities for students to learn about prevention and seeking help.",
        date: new Date("2026-07-15T14:00:00"),
        location: "Various School Halls",
        image_url: "/lovable-uploads/2a054218-a86f-4ef4-9ab5-7db12071babb.png"
      }
    ];
    
    return { success: true, data: events };
  } catch (error) {
    console.error('Error fetching events:', error);
    return { success: false, error, data: [] };
  }
};

export const getUpcomingEvents = async (limit = 3) => {
  try {
    // Get all events first (using the mock function)
    const result = await getEvents();
    
    if (result.success && result.data) {
      // Filter for upcoming events and limit results
      const now = new Date();
      const upcomingEvents = result.data
        .filter(event => new Date(event.date) >= now)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, limit);
      
      return { success: true, data: upcomingEvents };
    }
    
    return result;
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    return { success: false, error, data: [] };
  }
};
