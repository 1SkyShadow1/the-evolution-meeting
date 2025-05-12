import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Facebook, Youtube } from "lucide-react";
import { TikTokIcon } from "@/components/ui/custom-icons";
import { submitContactForm, ContactMessage } from "@/services/contact.service";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const contactMessage: ContactMessage = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      };
      
      const result = await submitContactForm(contactMessage);
      
      if (result.success) {
        toast.success("Your message has been sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <HeroSection
        title="CONTACT US"
        subtitle="We're here to help. Get in touch with us."
      />

      <section className="section-padding bg-[#222222] text-white">
        <div className="container mx-auto">
          {/* Social Media Connect Banner */}
          <div className="bg-[#482683] rounded-lg p-6 mb-12 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Connect With Us On Social Media</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="https://facebook.com/www.evomeeting.org" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 hover:text-em-red-light transition-colors">
                <Facebook className="h-6 w-6" />
                <span>The Evolution Meeting</span>
              </a>
              <a href="https://www.tiktok.com/@please.advise8" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 hover:text-em-red-light transition-colors">
                <TikTokIcon className="h-6 w-6" />
                <span>@please.advise8</span>
              </a>
              <a href="https://www.youtube.com/@morethancon" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 hover:text-em-red-light transition-colors">
                <Youtube className="h-6 w-6" />
                <span>@morethancon</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-em-purple">Send Us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help you?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please write your message here..." 
                            rows={5}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-em-purple hover:bg-em-purple-dark"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-em-purple rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-600 mb-1">(+27) 72 331 5015</p>
                    <p className="text-gray-600">(+27) 61 976 2871</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-em-purple rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600 mb-1">evolutionmeeting14@gmail.com</p>
                    <p className="text-gray-600">info@evomeeting.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-em-purple rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-gray-600">Unit 189, 67 on 7th avenue, Edenvale 1610<br />South Africa</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-em-purple rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Operating Hours</h3>
                    <p className="text-gray-600">Monday to Friday: 9:00–16:00</p>
                    <p className="text-gray-600">Weekends: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-bold mb-3 text-white">Registration Information</h3>
                <p className="text-gray-300">Registration Date: 05 June 2014</p>
                <p className="text-gray-300">Registration Number: 137-164 NPO</p>
                <p className="text-gray-300">PBO: 9761722165</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Google Map */}
      <section className="h-96 w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.555167714315!2d28.16325378819838!3d-26.143114659165306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9516a24893438d%3A0xa496fdee40b33cf!2s67%20on%207th%20Avenue!5e0!3m2!1sen!2sus!4v1714913923032!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="The Evolution Meeting Location"
        ></iframe>
      </section>
    </Layout>
  );
};

export default Contact;
