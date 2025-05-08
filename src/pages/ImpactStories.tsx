
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import ImpactStoryCard from "@/components/ui/impact-story-card";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

const ImpactStories = () => {
  // Updated impact stories data
  const featuredStory = {
    id: 1,
    title: "March for Substance Abuse and Gender Based Violence",
    excerpt: "The Evolution Meeting organized a powerful march in collaboration with Rainbow FM to raise awareness about substance abuse and gender-based violence in our community.",
    content: `
      <p>On May 5th, 2019, The Evolution Meeting joined forces with Rainbow FM to organize a landmark march against substance abuse and gender-based violence. Community members from all walks of life came together, carrying signs and raising their voices to demand change.</p>
      
      <p>The march was a powerful demonstration of community solidarity, drawing attention to the devastating effects of substance abuse and gender-based violence on families and communities. Law enforcement officials joined the march, showing their support for the cause and commitment to addressing these critical issues.</p>
      
      <p>This collaborative effort not only raised awareness but also connected those in need with resources and support services. The visibility created by events like this helps reduce stigma and encourages those affected to seek help.</p>
      
      <p>The Evolution Meeting continues to organize such community actions, believing in the power of collective voice to drive meaningful change in society.</p>
    `,
    image: "/lovable-uploads/0caaa20f-7a55-449c-ab6e-96d3a821619b.png",
    date: "May 5, 2019",
    author: "The Evolution Meeting Team"
  };

  const stories = [
    {
      id: 2,
      title: "Edenglen High School Substance Abuse and GBV Awareness Campaign",
      excerpt: "Students from Edenglen High School participated in our awareness program, learning about the dangers of substance abuse and how to prevent gender-based violence.",
      image: "/lovable-uploads/e59516f7-e31c-49a4-bc9d-52b84e4dcf66.png",
      date: "March 15, 2023",
      author: "School Outreach Program"
    },
    {
      id: 3,
      title: "Talk at Bedfordview High School on Substance Abuse",
      excerpt: "Our speakers addressed students and staff at Bedfordview High School, sharing valuable information about substance abuse prevention and support resources.",
      image: "/lovable-uploads/f25698a2-bc66-454f-9e74-358070475c22.png",
      date: "April 22, 2023",
      author: "Education Outreach Team"
    },
    {
      id: 4,
      title: "Community Champions: Teenagers Taking a Stand",
      excerpt: "How our school outreach program inspired a group of teenagers to launch an anti-GBV campaign that reached thousands in their community.",
      image: "/lovable-uploads/73570143-4523-4347-b986-ae8985cfbdf2.png",
      date: "February 10, 2023",
      author: "Youth Advocacy Program"
    },
    {
      id: 5,
      title: "Finding Voice: A Survivor Becomes an Advocate",
      excerpt: "After escaping an abusive relationship, Thabo found healing through advocacy, now leading community education workshops.",
      image: "/lovable-uploads/de82f759-0eba-4204-ad0b-d4cbbd04d57d.png",
      date: "January 17, 2023",
      author: "Thabo N."
    },
    {
      id: 6,
      title: "The Healing Power of Community: Maria's Journey",
      excerpt: "Isolated by abuse, Maria found connection and healing in our support groups, rebuilding her life one relationship at a time.",
      image: "/lovable-uploads/5c5a5c2a-9dee-466b-b745-dd0c539a21a0.png",
      date: "December 05, 2022",
      author: "Maria L."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="IMPACT STORIES"
        subtitle="Real Stories of Transformation and Hope"
        className="mb-0"
      />

      {/* Featured Story Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionHeading 
            title="Featured Story" 
            centered={true}
          />
          <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-5xl mx-auto border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-full">
                <img 
                  src={featuredStory.image} 
                  alt={featuredStory.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="text-sm text-em-purple font-semibold mb-2">{featuredStory.date}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{featuredStory.title}</h3>
                <div className="bg-em-purple/10 p-6 rounded-lg mb-6 border border-em-purple/20">
                  <Quote className="h-8 w-8 text-em-purple opacity-60 mb-2" />
                  <p className="italic text-gray-700">
                    "Community action is the cornerstone of change. When we come together to address issues like substance abuse and gender-based violence, we create a powerful force for transformation in our society."
                  </p>
                  <p className="text-right font-semibold mt-2 text-gray-800">— {featuredStory.author}</p>
                </div>
                <p className="mb-6 text-gray-600">{featuredStory.excerpt}</p>
                <Button className="bg-em-purple hover:bg-em-purple-dark transition-all duration-300">
                  Read Full Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Stories Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading 
            title="More Impact Stories" 
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map(story => (
              <ImpactStoryCard
                key={story.id}
                title={story.title}
                excerpt={story.excerpt}
                image={story.image}
                date={story.date}
                link={`/impact-stories/${story.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Submit a Story Section */}
      <section className="section-padding bg-gradient-to-r from-em-purple to-em-purple-dark text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Has The Evolution Meeting made a difference in your life? We invite you to share your story 
            of recovery, healing, or transformation. Your experiences can inspire others and show the 
            real impact of our work.
          </p>
          <Button asChild className="bg-white text-em-purple hover:bg-gray-100 shadow-lg">
            <a href="/contact">Submit Your Story</a>
          </Button>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionHeading 
            title="Voices of Change" 
            subtitle="Short Testimonials from Our Community"
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-em-purple/30 hover:shadow-lg transition-all duration-300">
              <Quote className="h-6 w-6 text-em-red opacity-60 mb-2" />
              <p className="italic mb-4 text-gray-700">
                "The substance abuse program gave me tools to maintain my sobriety that I use every day. Two years clean and counting."
              </p>
              <p className="font-semibold text-gray-800">— David T.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-em-purple/30 hover:shadow-lg transition-all duration-300">
              <Quote className="h-6 w-6 text-em-red opacity-60 mb-2" />
              <p className="italic mb-4 text-gray-700">
                "As a volunteer, I've seen how education changes attitudes about GBV in our community. It's making a real difference."
              </p>
              <p className="font-semibold text-gray-800">— Lerato M.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-em-purple/30 hover:shadow-lg transition-all duration-300">
              <Quote className="h-6 w-6 text-em-red opacity-60 mb-2" />
              <p className="italic mb-4 text-gray-700">
                "The helpline counselor talked me through a crisis and helped me find safety. I'll never forget that night."
              </p>
              <p className="font-semibold text-gray-800">— Anonymous Caller</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-em-purple/30 hover:shadow-lg transition-all duration-300">
              <Quote className="h-6 w-6 text-em-red opacity-60 mb-2" />
              <p className="italic mb-4 text-gray-700">
                "My daughter found hope here after addiction nearly took her life. The family counseling helped us heal together."
              </p>
              <p className="font-semibold text-gray-800">— Parent of Recovery Client</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-em-purple/30 hover:shadow-lg transition-all duration-300">
              <Quote className="h-6 w-6 text-em-red opacity-60 mb-2" />
              <p className="italic mb-4 text-gray-700">
                "The March for Justice showed me I wasn't alone in fighting for change. It was empowering to find my community."
              </p>
              <p className="font-semibold text-gray-800">— Event Participant</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-em-purple/30 hover:shadow-lg transition-all duration-300">
              <Quote className="h-6 w-6 text-em-red opacity-60 mb-2" />
              <p className="italic mb-4 text-gray-700">
                "I never thought I could leave. The legal advocates helped me navigate the system and start fresh with my children."
              </p>
              <p className="font-semibold text-gray-800">— GBV Survivor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Help Us Create More Success Stories</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-600">
            Your support makes these transformations possible. Together, we can help more individuals heal and build lives free from violence and addiction.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-em-red hover:bg-em-red-dark shadow-lg transition-all duration-300">
              <a href="/donate">Donate Today</a>
            </Button>
            <Button asChild variant="outline" className="border-em-purple text-em-purple hover:bg-em-purple hover:text-white transition-all duration-300">
              <a href="/volunteer">Become a Volunteer</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ImpactStories;
