import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="ABOUT US"
        subtitle="Our Story and Vision"
      />

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Our Story" 
                centered={false}
              />
              <p className="mb-4 text-lg">
                The Evolution Meeting was founded in 2014 in response to the growing crisis of gender-based violence 
                and substance abuse in South African communities. What began as a small support group in Edenvale has 
                evolved into a comprehensive organization addressing these interlinked social challenges.
              </p>
              <p className="mb-4">
                Our founders recognized that GBV and substance abuse often co-occur and share root causes such as 
                trauma, inequality, and social disempowerment. By addressing both issues holistically, we've been 
                able to create more effective, lasting solutions.
              </p>
              <p>
                Today, The Evolution Meeting stands as a beacon of hope for those affected by these issues, 
                providing direct support services, community education, and advocacy for policy change.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-em-red absolute bottom-0 right-0 w-72 h-72 rounded-full opacity-20 -z-10 translate-x-10 translate-y-10"></div>
                <img 
                  src="/images/community-engagement.jpg" 
                  alt="The Evolution Meeting Community" 
                  className="rounded-lg shadow-xl max-w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading 
                title="Our Vision" 
                centered={false}
              />
              <p className="text-lg">
                We envision South African communities where all people live free from gender-based violence and 
                substance abuse, with equal access to support, justice, and opportunities for healing and growth.
              </p>
            </div>
            <div>
              <SectionHeading 
                title="Our Mission" 
                centered={false}
              />
              <p className="text-lg">
                To provide comprehensive support services for survivors of gender-based violence and those 
                affected by substance abuse, while working to prevent these issues through community education, 
                advocacy, and social transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionHeading 
            title="Our Journey" 
            subtitle="Key Milestones Since 2014"
            centered={true}
          />
          <div className="relative border-l-2 border-em-purple ml-6 md:ml-0 md:mx-auto md:max-w-3xl">
            {/* 2014 */}
            <div className="mb-12 md:ml-[50%] md:pl-8 md:relative">
              <div className="absolute -left-3 md:-left-3 w-6 h-6 rounded-full bg-em-purple"></div>
              <div className="md:absolute md:-left-28 md:top-0 md:w-24 md:text-right">
                <div className="font-bold text-em-purple text-xl">2014</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Foundation</h3>
                <p>The Evolution Meeting is established and registered as a nonprofit organization with the mission to address gender-based violence in Edenvale.</p>
              </div>
            </div>

            {/* 2016 */}
            <div className="mb-12 md:mr-[50%] md:pr-8 md:relative">
              <div className="absolute -left-3 md:left-[calc(100%+12px)] w-6 h-6 rounded-full bg-em-red"></div>
              <div className="md:absolute md:left-[calc(100%+24px)] md:top-0 md:w-24">
                <div className="font-bold text-em-red text-xl">2016</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Expanded Focus</h3>
                <p>In response to community needs, we expanded our mission to include substance abuse recovery programs, recognizing the interconnection between these issues.</p>
              </div>
            </div>

            {/* 2018 */}
            <div className="mb-12 md:ml-[50%] md:pl-8 md:relative">
              <div className="absolute -left-3 md:-left-3 w-6 h-6 rounded-full bg-em-purple"></div>
              <div className="md:absolute md:-left-28 md:top-0 md:w-24 md:text-right">
                <div className="font-bold text-em-purple text-xl">2018</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Support Center</h3>
                <p>Opened our first dedicated support center providing counseling, legal assistance, and safe spaces for survivors of abuse.</p>
              </div>
            </div>

            {/* 2020 */}
            <div className="mb-12 md:mr-[50%] md:pr-8 md:relative">
              <div className="absolute -left-3 md:left-[calc(100%+12px)] w-6 h-6 rounded-full bg-em-red"></div>
              <div className="md:absolute md:left-[calc(100%+24px)] md:top-0 md:w-24">
                <div className="font-bold text-em-red text-xl">2020</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">COVID Response</h3>
                <p>Adapted our services to respond to the pandemic-related surge in GBV cases and substance abuse, launching a 24/7 helpline and virtual support groups.</p>
              </div>
            </div>

            {/* 2022 */}
            <div className="mb-12 md:ml-[50%] md:pl-8 md:relative">
              <div className="absolute -left-3 md:-left-3 w-6 h-6 rounded-full bg-em-purple"></div>
              <div className="md:absolute md:-left-28 md:top-0 md:w-24 md:text-right">
                <div className="font-bold text-em-purple text-xl">2022</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Education Initiative</h3>
                <p>Launched our comprehensive community education program, reaching thousands of individuals in schools, workplaces, and community centers.</p>
              </div>
            </div>

            {/* 2024 */}
            <div className="md:ml-[50%] md:pl-8 md:relative">
              <div className="absolute -left-3 md:-left-3 w-6 h-6 rounded-full bg-em-blue"></div>
              <div className="md:absolute md:-left-28 md:top-0 md:w-24 md:text-right">
                <div className="font-bold text-em-blue text-xl">2024</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">A Decade of Impact</h3>
                <p>Celebrating 10 years of transformative work and launching new initiatives to expand our reach and impact throughout South Africa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="section-padding bg-em-purple text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Registration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Established</h3>
              <p className="text-2xl">05 June 2014</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Registration Number</h3>
              <p className="text-2xl">137-164</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">PBO Number</h3>
              <p className="text-2xl">9761722165</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Help us continue building a South Africa free from gender-based violence and substance abuse.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-em-red hover:bg-em-red-dark">
              <Link to="/donate">Support Our Work</Link>
            </Button>
            <Button asChild variant="outline" className="border-em-purple text-em-purple hover:bg-em-purple hover:text-white">
              <Link to="/volunteer">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
