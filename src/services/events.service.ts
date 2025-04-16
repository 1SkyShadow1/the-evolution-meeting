
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
