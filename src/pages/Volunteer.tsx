import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Heart, HelpingHand, Users, FileText, Megaphone, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Volunteer = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/volunteer-bg.jpg"
        title="VOLUNTEER / JOIN US"
        subtitle="Make a Difference in Your Community"
      />

      {/* Why Volunteer Section */}
      <section className="section-padding pt-16 md:pt-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Why Volunteer With Us?" 
                centered={false}
                isFirstSection={true}
              />
              <p className="text-lg mb-4">
                Volunteers are the heart of our organization. Your time, skills, and compassion directly 
                support survivors of gender-based violence and individuals recovering from substance abuse.
              </p>
              <p className="mb-6">
                By volunteering with The Evolution Meeting, you'll not only make a tangible difference in 
                the lives of those we serve, but you'll also gain valuable experience, develop new skills, 
                and become part of a dedicated community working for positive social change.
              </p>
              
              <h3 className="text-xl font-bold mb-3">As a volunteer, you'll:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                  <span>Directly impact lives in your community</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                  <span>Receive comprehensive training in your area of service</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                  <span>Develop valuable skills and experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                  <span>Join a supportive network of like-minded individuals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                  <span>Be part of creating lasting social change</span>
                </li>
              </ul>
              
              <Button asChild className="bg-em-purple hover:bg-em-purple-dark">
                <a href="#volunteer-application">Apply to Volunteer</a>
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src="/images/community-engagement.jpg" 
                alt="Volunteers at The Evolution Meeting" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Volunteer Opportunities" 
            subtitle="Find Your Perfect Role"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Heart className="h-10 w-10 text-em-purple mr-3" />
                <h3 className="text-xl font-bold">Crisis Support</h3>
              </div>
              <p className="mb-4">
                Provide emotional support and resources to individuals in crisis through our helpline 
                or in-person at our center. Extensive training provided.
              </p>
              <ul className="text-sm text-gray-600 mb-4">
                <li className="mb-1">• 4+ hours per week commitment</li>
                <li className="mb-1">• Training: 40 hours</li>
                <li>• Background check required</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <HelpingHand className="h-10 w-10 text-em-purple mr-3" />
                <h3 className="text-xl font-bold">Support Group Facilitator</h3>
              </div>
              <p className="mb-4">
                Lead or co-lead support groups for survivors of GBV or individuals in recovery. 
                Training and supervision provided.
              </p>
              <ul className="text-sm text-gray-600 mb-4">
                <li className="mb-1">• 3+ hours per week commitment</li>
                <li className="mb-1">• Training: 20 hours</li>
                <li>• Experience in counseling or group facilitation preferred</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Users className="h-10 w-10 text-em-purple mr-3" />
                <h3 className="text-xl font-bold">Community Educator</h3>
              </div>
              <p className="mb-4">
                Deliver workshops and presentations on GBV prevention and substance abuse awareness 
                in schools, workplaces, and community settings.
              </p>
              <ul className="text-sm text-gray-600 mb-4">
                <li className="mb-1">• Flexible hours (2-8 hours per month)</li>
                <li className="mb-1">• Training: 16 hours</li>
                <li>• Public speaking experience helpful</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FileText className="h-10 w-10 text-em-purple mr-3" />
                <h3 className="text-xl font-bold">Administrative Support</h3>
              </div>
              <p className="mb-4">
                Assist with office tasks, data entry, phone calls, and organizing resources. 
                Help keep our operations running smoothly.
              </p>
              <ul className="text-sm text-gray-600 mb-4">
                <li className="mb-1">• 2-4 hours per week commitment</li>
                <li className="mb-1">• Training: 4 hours</li>
                <li>• Office or administrative experience helpful</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Megaphone className="h-10 w-10 text-em-purple mr-3" />
                <h3 className="text-xl font-bold">Events & Outreach</h3>
              </div>
              <p className="mb-4">
                Help plan and implement awareness events, fundraisers, and community outreach activities. 
                Use your creativity and organizational skills.
              </p>
              <ul className="text-sm text-gray-600 mb-4">
                <li className="mb-1">• Project-based (varies by event)</li>
                <li className="mb-1">• Training: 2-4 hours</li>
                <li>• Event planning or marketing experience helpful</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-10 w-10 text-em-purple mr-3" />
                <h3 className="text-xl font-bold">Social Media & Communications</h3>
              </div>
              <p className="mb-4">
                Support our online presence through content creation, social media management, 
                newsletter development, and public relations.
              </p>
              <ul className="text-sm text-gray-600 mb-4">
                <li className="mb-1">• 2-6 hours per week commitment</li>
                <li className="mb-1">• Training: 4 hours</li>
                <li>• Communications, marketing, or social media experience helpful</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="mb-4">
              Don't see a role that matches your skills? We're always open to discussing how your unique 
              talents could support our mission.
            </p>
            <Button asChild variant="outline" className="border-em-purple text-em-purple hover:bg-em-purple hover:text-white">
              <a href="#volunteer-application">Contact Us About Custom Roles</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Volunteer Process Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading 
            title="Our Volunteer Process" 
            subtitle="From Application to Service"
            centered={true}
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process Steps */}
              <div className="border-l-2 border-em-purple ml-6 md:mx-auto md:max-w-3xl">
                {/* Step 1 */}
                <div className="mb-12 md:ml-[50%] md:pl-8 md:relative">
                  <div className="absolute -left-3 md:-left-3 w-6 h-6 rounded-full bg-em-purple"></div>
                  <div className="md:absolute md:-left-28 md:top-0 md:w-24 md:text-right">
                    <div className="font-bold text-em-purple text-xl">Step 1</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-bold text-lg mb-2">Application</h3>
                    <p>Complete the volunteer application form below with your contact information, interests, and availability.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="mb-12 md:mr-[50%] md:pr-8 md:relative">
                  <div className="absolute -left-3 md:left-[calc(100%+12px)] w-6 h-6 rounded-full bg-em-red"></div>
                  <div className="md:absolute md:left-[calc(100%+24px)] md:top-0 md:w-24">
                    <div className="font-bold text-em-red text-xl">Step 2</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-bold text-lg mb-2">Interview</h3>
                    <p>Join us for a brief interview (in-person or virtual) to discuss your interests, skills, and our volunteer opportunities.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="mb-12 md:ml-[50%] md:pl-8 md:relative">
                  <div className="absolute -left-3 md:-left-3 w-6 h-6 rounded-full bg-em-purple"></div>
                  <div className="md:absolute md:-left-28 md:top-0 md:w-24 md:text-right">
                    <div className="font-bold text-em-purple text-xl">Step 3</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-bold text-lg mb-2">Background Check</h3>
                    <p>Complete a background check process, which varies depending on the volunteer role (especially for roles working directly with clients).</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="mb-12 md:mr-[50%] md:pr-8 md:relative">
                  <div className="absolute -left-3 md:left-[calc(100%+12px)] w-6 h-6 rounded-full bg-em-red"></div>
                  <div className="md:absolute md:left-[calc(100%+24px)] md:top-0 md:w-24">
                    <div className="font-bold text-em-red text-xl">Step 4</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-bold text-lg mb-2">Training</h3>
                    <p>Participate in role-specific training to prepare you for your volunteer responsibilities and learn about our organization.</p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="md:ml-[50%] md:pl-8 md:relative">
                  <div className="absolute -left-3 md:-left-3 w-6 h-6 rounded-full bg-em-blue"></div>
                  <div className="md:absolute md:-left-28 md:top-0 md:w-24 md:text-right">
                    <div className="font-bold text-em-blue text-xl">Step 5</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-bold text-lg mb-2">Begin Volunteering</h3>
                    <p>Start your volunteer service with ongoing support, supervision, and opportunities for growth and development.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section id="volunteer-application" className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Volunteer Application" 
            subtitle="Take the First Step to Making a Difference"
            centered={true}
          />
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">First Name*</label>
                    <Input required />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Last Name*</label>
                    <Input required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Email Address*</label>
                    <Input type="email" required />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Phone Number*</label>
                    <Input type="tel" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Address</label>
                  <Input className="mb-2" placeholder="Street Address" />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <Input placeholder="City" />
                    <Input placeholder="Postal Code" />
                    <Input placeholder="Province" className="col-span-2 md:col-span-1" />
                  </div>
                </div>
              </div>
              
              {/* Interests */}
              <div>
                <h3 className="text-xl font-bold mb-4">Volunteer Interests</h3>
                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-1">Which volunteer roles interest you?* (Select all that apply)</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="crisis" className="mr-2" />
                      <label htmlFor="crisis">Crisis Support</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="group" className="mr-2" />
                      <label htmlFor="group">Support Group Facilitator</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="education" className="mr-2" />
                      <label htmlFor="education">Community Educator</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="admin" className="mr-2" />
                      <label htmlFor="admin">Administrative Support</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="events" className="mr-2" />
                      <label htmlFor="events">Events & Outreach</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="social" className="mr-2" />
                      <label htmlFor="social">Social Media & Communications</label>
                    </div>
                    <div className="flex items-center col-span-1 md:col-span-2">
                      <input type="checkbox" id="other" className="mr-2" />
                      <label htmlFor="other">Other (please specify below)</label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-1">If "Other," please specify or tell us about your skills/interests:</label>
                  <Textarea rows={3} />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-1">Availability* (Select all that apply)</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="weekday-morning" className="mr-2" />
                      <label htmlFor="weekday-morning">Weekday Mornings</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="weekday-afternoon" className="mr-2" />
                      <label htmlFor="weekday-afternoon">Weekday Afternoons</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="weekday-evening" className="mr-2" />
                      <label htmlFor="weekday-evening">Weekday Evenings</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="weekends" className="mr-2" />
                      <label htmlFor="weekends">Weekends</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-600 mb-1">How many hours can you commit per month?*</label>
                  <select className="w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background">
                    <option value="" disabled selected>Please select</option>
                    <option value="1-5">1-5 hours</option>
                    <option value="6-10">6-10 hours</option>
                    <option value="11-20">11-20 hours</option>
                    <option value="21+">21+ hours</option>
                  </select>
                </div>
              </div>
              
              {/* Experience */}
              <div>
                <h3 className="text-xl font-bold mb-4">Experience & Background</h3>
                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-1">Why are you interested in volunteering with The Evolution Meeting?*</label>
                  <Textarea required rows={3} />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-1">Briefly describe any relevant experience or skills:</label>
                  <Textarea rows={3} />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Have you volunteered before? If yes, please describe:</label>
                  <Textarea rows={3} />
                </div>
              </div>
              
              {/* Agreement */}
              <div>
                <div className="flex items-start mb-4">
                  <input type="checkbox" id="background-check" className="mt-1 mr-2" required />
                  <label htmlFor="background-check" className="text-sm text-gray-600">
                    I understand that a background check may be required depending on the volunteer role.
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input type="checkbox" id="privacy-policy" className="mt-1 mr-2" required />
                  <label htmlFor="privacy-policy" className="text-sm text-gray-600">
                    I consent to The Evolution Meeting storing and processing my personal information according to their Privacy Policy.
                  </label>
                </div>
              </div>
              
              <Button className="w-full bg-em-purple hover:bg-em-purple-dark">
                Submit Application
              </Button>
              
              <p className="text-center text-sm text-gray-500">
                Thank you for your interest in volunteering! We will contact you within 3-5 business days.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Volunteer Testimonials */}
      <section className="section-padding bg-em-purple text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What Our Volunteers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="italic mb-6">
                "Volunteering on the crisis line has been the most rewarding experience. Knowing I've been there for someone during their darkest moment gives meaning to my life."
              </p>
              <p className="font-semibold">— Thandi M., Crisis Support Volunteer (2 years)</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="italic mb-6">
                "As someone in long-term recovery, being able to facilitate support groups lets me turn my past struggles into hope for others. The Evolution Meeting provided excellent training and support."
              </p>
              <p className="font-semibold">— James B., Support Group Facilitator (3 years)</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="italic mb-6">
                "I started volunteering for administrative tasks, but I've learned so much about GBV and community support. The team treats volunteers like valuable colleagues."
              </p>
              <p className="font-semibold">— Priya N., Administrative Volunteer (1 year)</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading 
            title="Frequently Asked Questions" 
            centered={true}
          />
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">Do I need special qualifications to volunteer?</h3>
              <p>
                Most roles don't require specific qualifications—we provide training. The most important qualities 
                are compassion, reliability, and commitment to our mission. Some specialized roles may require 
                relevant experience or education.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">How much time do I need to commit?</h3>
              <p>
                Volunteer commitments vary by role. Some positions require regular weekly hours, while others 
                are project-based or event-specific. We work with you to find a schedule that fits your availability 
                while meeting our program needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">Do volunteers receive training?</h3>
              <p>
                Yes, all volunteers receive role-specific training. Training ranges from a few hours for administrative 
                roles to 40+ hours for crisis support positions. Ongoing supervision and continuing education are also provided.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">Can I volunteer if I have personal experience with GBV or substance abuse?</h3>
              <p>
                Yes, many of our volunteers have lived experience, which can be invaluable. For direct service roles, we generally 
                recommend being at least 1-2 years into your own recovery or healing journey to ensure you're in a place to support others.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">What support do volunteers receive?</h3>
              <p>
                All volunteers receive regular supervision, ongoing training opportunities, and emotional support. We recognize that 
                this work can be challenging, and we prioritize volunteer well-being and self-care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Your time and skills can make a real difference in our community. We look forward to welcoming you to our volunteer family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-em-red hover:bg-em-red-dark">
              <a href="#volunteer-application">Apply Now</a>
            </Button>
            <Button asChild variant="outline" className="border-em-purple text-em-purple hover:bg-em-purple hover:text-white">
              <Link to="/contact">Contact Us With Questions</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Volunteer;
