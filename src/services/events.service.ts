
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
