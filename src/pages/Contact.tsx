
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/contact-bg.jpg"
        title="CONTACT US"
        subtitle="We're Here to Help"
      />

      {/* Contact Info Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading 
                title="Get in Touch" 
                centered={false}
              />
              <p className="text-lg mb-8">
                Whether you're seeking support, want to volunteer, or have questions about our programs, 
                we're here to help. Our team is committed to responding promptly to all inquiries.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-em-purple/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-em-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p>61, 6th Avenue, Edenvale, 1609</p>
                    <p>Johannesburg, South Africa</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-em-purple/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-em-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p>(+27) 61 099 4222</p>
                    <p>(+27) 72 331 5015</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-em-purple/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-em-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p>info@evolutionmeeting.org</p>
                    <p>support@evolutionmeeting.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-em-purple/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-em-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Office Hours</h3>
                    <p>Monday – Friday: 9:00 – 16:00</p>
                    <p>Weekend & After Hours: Emergency support available via helpline</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Need Immediate Help?</h3>
                <p className="mb-4">
                  If you or someone you know is in immediate danger, please call:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-em-red rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-1">GBV Emergency Line</h4>
                    <a href="tel:+27610994222" className="text-em-red text-lg font-bold hover:underline">
                      (+27) 61 099 4222
                    </a>
                  </div>
                  <div className="border border-em-red rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-1">SA Police Services</h4>
                    <a href="tel:10111" className="text-em-red text-lg font-bold hover:underline">
                      10111
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">First Name*</label>
                      <Input required />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Last Name*</label>
                      <Input required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Email Address*</label>
                    <Input type="email" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
                    <Input type="tel" />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Reason for Contact*</label>
                    <select className="w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background">
                      <option value="" disabled selected>Please select</option>
                      <option value="support">I need support</option>
                      <option value="volunteer">I want to volunteer</option>
                      <option value="donate">Donation inquiry</option>
                      <option value="partnership">Partnership opportunity</option>
                      <option value="media">Media inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Message*</label>
                    <Textarea required rows={5} />
                  </div>
                  
                  <div className="flex items-start">
                    <input type="checkbox" id="privacy" className="mt-1 mr-2" required />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      I consent to The Evolution Meeting storing and processing my personal information according to their Privacy Policy.
                    </label>
                  </div>
                  
                  <Button className="w-full bg-em-purple hover:bg-em-purple-dark">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Find Us" 
            centered={true}
          />
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-5xl mx-auto">
            <div className="aspect-[16/9] w-full rounded-md overflow-hidden">
              <iframe 
                title="The Evolution Meeting Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.835138439284!2d28.142908576252575!3d-26.13680367679852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950ea12b3d8a29%3A0x3d5fe89b0c5ede2d!2s61%206th%20Ave%2C%20Edenvale%2C%20Johannesburg%2C%201609!5e0!3m2!1sen!2sza!4v1710871523912!5m2!1sen!2sza" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="section-padding bg-em-red text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">How Else Can We Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg">
              <CheckCircle className="h-10 w-10 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Need Support?</h3>
              <p className="mb-4">
                Our team is ready to provide confidential assistance for GBV and substance abuse issues.
              </p>
              <Button asChild className="bg-white text-em-red hover:bg-gray-100">
                <a href="tel:+27610994222">Call Our Helpline</a>
              </Button>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <CheckCircle className="h-10 w-10 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Want to Donate?</h3>
              <p className="mb-4">
                Your financial support enables us to continue providing essential services.
              </p>
              <Button asChild className="bg-white text-em-red hover:bg-gray-100">
                <a href="/donate">Make a Donation</a>
              </Button>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <CheckCircle className="h-10 w-10 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ready to Volunteer?</h3>
              <p className="mb-4">
                Join our team of dedicated volunteers making a difference in our community.
              </p>
              <Button asChild className="bg-white text-em-red hover:bg-gray-100">
                <a href="/volunteer">Get Involved</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
