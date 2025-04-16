
import { supabase } from "@/integrations/supabase/client";

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (contactMessage: ContactMessage) => {
  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([contactMessage]);
    
    if (error) {
      throw error;
    }
    
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
};
