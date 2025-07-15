
import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TikTokIcon } from "@/components/ui/custom-icons";

const Footer = () => {
  return (
    <footer className="bg-[#482683] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="The Evolution Meeting" className="h-10 w-auto" />
              <span className="ml-2 text-xl font-semibold">The Evolution Meeting</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              We exist to end gender-based violence and support recovery from substance abuse.
            </p>
            <p className="text-sm text-gray-300">
              Reg No: 137-164<br />
              PBO: 9761722165<br />
              Est: 05 June 2014
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-white">Our Programs</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white">Events</Link></li>
              <li><Link to="/impact-stories" className="text-gray-300 hover:text-white">Impact Stories</Link></li>
              <li><Link to="/volunteer" className="text-gray-300 hover:text-white">Volunteer</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-white">Donate</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-em-red" />
                <span>61, 6th Avenue, Edenvale, 1609</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-em-red" />
                <div>
                  <p>(+27) 72 331 5015</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-em-red" />
                {/* Removed info@evolutionmeeting.org */}
              </li>
              <li className="flex items-center">
                <span className="mr-2">⏰</span>
                <span>Mon-Fri: 9:00–16:00</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our newsletter for updates on our work and ways to get involved.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-em-red hover:bg-em-red-dark">
                Subscribe
              </Button>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Follow Us</h4>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.facebook.com/www.evomeeting.org" target="_blank" rel="noopener noreferrer" className="text-white hover:text-em-red-light transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.tiktok.com/@please.advise8" target="_blank" rel="noopener noreferrer" className="text-white hover:text-em-red-light transition-colors" aria-label="TikTok">
                  <TikTokIcon className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/@morethancon" target="_blank" rel="noopener noreferrer" className="text-white hover:text-em-red-light transition-colors" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="https://x.com/Evomeeting2" target="_blank" rel="noopener noreferrer" className="text-white hover:text-em-red-light transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-6 text-sm text-center text-gray-300">
          <p>© {new Date().getFullYear()} The Evolution Meeting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
