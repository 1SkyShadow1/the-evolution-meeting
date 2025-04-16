
import { supabase } from "@/integrations/supabase/client";

export interface Event {
  id?: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  image_url?: string;
}

export const getEvents = async () => {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: true });
    
    if (error) {
      throw error;
    }
    
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching events:', error);
    return { success: false, error, data: [] };
  }
};

export const getUpcomingEvents = async (limit = 3) => {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .gte('date', new Date().toISOString())
      .order('date', { ascending: true })
      .limit(limit);
    
    if (error) {
      throw error;
    }
    
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    return { success: false, error, data: [] };
  }
};
