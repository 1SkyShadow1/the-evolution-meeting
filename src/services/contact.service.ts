
// Defining the interface for contact messages
export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Mock function for submitting contact form while Supabase setup is pending
export const submitContactForm = async (contactMessage: ContactMessage) => {
  try {
    // Log the message to console (temporary solution until Supabase is set up)
    console.log('Contact form submission:', contactMessage);
    
    // Simulate a successful API call
    return { success: true, data: { id: 'mock-id', ...contactMessage } };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
};
