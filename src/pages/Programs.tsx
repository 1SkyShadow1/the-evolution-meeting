
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Brain, Users, CheckCircle } from "lucide-react";

const Programs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/gbv-support.jpg"
        title="OUR PROGRAMS"
        subtitle="Comprehensive Support for Healing and Recovery"
      />

      {/* GBV Support Section */}
      <section id="gbv" className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-10 w-10 text-em-purple mr-3" />
                <SectionHeading 
                  title="Gender-Based Violence Support" 
                  centered={false}
                />
              </div>
              <p className="mb-4 text-lg">
                Our Gender-Based Violence (GBV) support program provides comprehensive assistance to survivors, 
                helping them rebuild their lives in a safe and supportive environment.
              </p>
              <p className="mb-6">
                We recognize that recovering from violence requires addressing physical, emotional, legal, and social needs. 
                Our holistic approach ensures that survivors receive the full spectrum of support required for healing and empowerment.
              </p>
              
              <h3 className="text-xl font-bold mb-3">Our Services Include:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                  <span><strong>Crisis Intervention:</strong> Immediate support and safety planning for individuals in danger</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                  <span><strong>Trauma Counseling:</strong> Individual and group therapy with trained professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                  <span><strong>Legal Advocacy:</strong> Assistance with protection orders, court accompaniment, and legal resources</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                  <span><strong>Support Groups:</strong> Peer communities that foster healing through shared experiences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                  <span><strong>Referral Services:</strong> Connections to safe housing, medical care, and additional resources</span>
                </li>
              </ul>
              
              <Button asChild className="bg-em-purple hover:bg-em-purple-dark">
                <Link to="/contact">Contact Us for Support</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src="/images/gbv-support.jpg" 
                alt="Gender-Based Violence Support" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Substance Abuse Recovery Section */}
      <section id="substance-abuse" className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <img 
                src="/images/substance-abuse.jpg" 
                alt="Substance Abuse Recovery" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <Brain className="h-10 w-10 text-em-purple mr-3" />
                <SectionHeading 
                  title="Substance Abuse Recovery" 
                  centered={false}
                />
              </div>
              <p className="mb-4 text-lg">
                Our Substance Abuse Recovery program helps individuals break free from addiction and develop healthier coping mechanisms 
                through evidence-based approaches and compassionate support.
              </p>
              <p className="mb-6">
                We understand that addiction affects every aspect of a person's life—from physical and mental health to relationships 
                and economic stability. Our program addresses these dimensions to support long-term recovery and well-being.
              </p>
              
              <h3 className="text-xl font-bold mb-3">Our Services Include:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                  <span><strong>Assessment & Treatment Planning:</strong> Personalized recovery plans based on individual needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                  <span><strong>Individual Counseling:</strong> One-on-one therapy sessions with addiction specialists</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                  <span><strong>Group Therapy:</strong> Peer support groups for shared healing and accountability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                  <span><strong>Family Support:</strong> Resources and counseling for family members affected by addiction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                  <span><strong>Aftercare Programs:</strong> Ongoing support to maintain sobriety and prevent relapse</span>
                </li>
              </ul>
              
              <Button asChild className="bg-em-purple hover:bg-em-purple-dark">
                <Link to="/contact">Seek Help Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement Section */}
      <section id="community" className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Users className="h-10 w-10 text-em-purple mr-3" />
                <SectionHeading 
                  title="Community Engagement & Education" 
                  centered={false}
                />
              </div>
              <p className="mb-4 text-lg">
                Our Community Engagement & Education program works to prevent gender-based violence and substance abuse 
                through awareness, education, and community mobilization.
              </p>
              <p className="mb-6">
                We believe that lasting change requires addressing the root causes of these issues, including harmful cultural norms, 
                lack of awareness, and systemic inequalities. Through education and advocacy, we're building safer, more informed communities.
              </p>
              
              <h3 className="text-xl font-bold mb-3">Our Initiatives Include:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                  <span><strong>School Programs:</strong> Age-appropriate education on healthy relationships and substance prevention</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                  <span><strong>Community Workshops:</strong> Interactive sessions on recognizing and responding to GBV and addiction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                  <span><strong>Workplace Training:</strong> Programs for companies to create safer, more supportive environments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                  <span><strong>Awareness Campaigns:</strong> Public initiatives like #JusticeForCwecwe to raise visibility and inspire action</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                  <span><strong>Community Partnerships:</strong> Collaborations with local organizations to maximize impact</span>
                </li>
              </ul>
              
              <Button asChild className="bg-em-purple hover:bg-em-purple-dark">
                <Link to="/volunteer">Get Involved</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src="/images/community-engagement.jpg" 
                alt="Community Engagement & Education" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="section-padding bg-em-purple text-white">
        <div className="container mx-auto text-center">
          <SectionHeading 
            title="Our Impact" 
            subtitle="Making a Difference in South African Communities"
            centered={true}
            className="text-white"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p>GBV survivors supported annually</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">300+</div>
              <p>Individuals in recovery programs</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <p>Community members educated</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">10</div>
              <p>Years serving South Africa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Help Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Support?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            If you or someone you know is experiencing gender-based violence or struggling with substance abuse, 
            we're here to help. All services are confidential and focused on your well-being.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-em-red hover:bg-em-red-dark">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="border-em-purple text-em-purple hover:bg-em-purple hover:text-white">
              <a href="tel:+27610994222">Call Helpline: (+27) 61 099 4222</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
