
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import ImpactStoryCard from "@/components/ui/impact-story-card";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

const ImpactStories = () => {
  // Mock impact stories data
  const featuredStory = {
    id: 1,
    title: "From Darkness to Light: A Survivor's Journey",
    excerpt: "When Nomsa first came to our shelter, she had lost all hope. Today, she runs her own support group helping other women escape abuse.",
    content: `
      <p>When I first arrived at The Evolution Meeting's shelter, I had nothing but the clothes on my back and a broken spirit. After enduring years of abuse from my husband, I finally found the courage to leave when he threatened our children.</p>
      
      <p>The team at The Evolution Meeting didn't just offer me a safe place to stay—they helped me rebuild my entire life. Through counseling, I began to heal the deep emotional wounds of abuse. Their legal advocates supported me through the protection order process and custody arrangements.</p>
      
      <p>Most importantly, they helped me recognize my own strength. In the support groups, I connected with other survivors who understood my journey. Their stories gave me hope that I could not only survive but thrive.</p>
      
      <p>Today, three years later, I have my own apartment and a job I love. I've even started a community support group for other women in my neighborhood who are experiencing abuse. When I look back at the frightened woman who arrived at the shelter that night, I barely recognize her.</p>
      
      <p>Without The Evolution Meeting and their donors who make these services possible, I don't know where I—or my children—would be today. They didn't just save my life; they helped me create a new one filled with purpose and joy.</p>
    `,
    image: "/lovable-uploads/29ccc5e1-a424-43e3-a911-d1bd3e986d88.png",
    date: "May 12, 2026",
    author: "Nomsa M."
  };

  const stories = [
    {
      id: 2,
      title: "Breaking the Cycle: John's Road to Recovery",
      excerpt: "After three failed attempts at sobriety, John found our program. Two years later, he's sober, employed, and reunited with his children.",
      image: "/lovable-uploads/f25698a2-bc66-454f-9e74-358070475c22.png",
      date: "April 28, 2026",
      author: "John K."
    },
    {
      id: 3,
      title: "Community Champions: Teenagers Taking a Stand",
      excerpt: "How our school outreach program inspired a group of teenagers to launch an anti-GBV campaign that reached thousands.",
      image: "/lovable-uploads/e59516f7-e31c-49a4-bc9d-52b84e4dcf66.png",
      date: "April 05, 2026",
      author: "Edenvale High School Students"
    },
    {
      id: 4,
      title: "A Family Healed: Sarah's Story of Recovery",
      excerpt: "Sarah's addiction tore her family apart. Through recovery and family counseling, they found a path to forgiveness and reunion.",
      image: "/lovable-uploads/73570143-4523-4347-b986-ae8985cfbdf2.png",
      date: "March 17, 2026",
      author: "Sarah M."
    },
    {
      id: 5,
      title: "Finding Voice: A Survivor Becomes an Advocate",
      excerpt: "After escaping an abusive relationship, Thabo found healing through advocacy, now leading community education workshops.",
      image: "/lovable-uploads/de82f759-0eba-4204-ad0b-d4cbbd04d57d.png",
      date: "March 03, 2026",
      author: "Thabo N."
    },
    {
      id: 6,
      title: "The Healing Power of Community: Maria's Journey",
      excerpt: "Isolated by abuse, Maria found connection and healing in our support groups, rebuilding her life one relationship at a time.",
      image: "/lovable-uploads/5c5a5c2a-9dee-466b-b745-dd0c539a21a0.png",
      date: "February 22, 2026",
      author: "Maria L."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/lovable-uploads/29ccc5e1-a424-43e3-a911-d1bd3e986d88.png"
        title="IMPACT STORIES"
        subtitle="Real Stories of Transformation and Hope"
      />

      {/* Featured Story Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading 
            title="Featured Story" 
            centered={true}
          />
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-full">
                <img 
                  src={featuredStory.image} 
                  alt={featuredStory.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="text-sm text-gray-500 mb-2">{featuredStory.date}</div>
                <h3 className="text-2xl font-bold mb-4">{featuredStory.title}</h3>
                <div className="bg-em-purple/10 p-4 rounded-lg mb-6">
                  <Quote className="h-8 w-8 text-em-purple opacity-50 mb-2" />
                  <p className="italic">
                    "Without The Evolution Meeting and their donors who make these services possible, I don't know where I—or my children—would be today. They didn't just save my life; they helped me create a new one filled with purpose and joy."
                  </p>
                  <p className="text-right font-semibold mt-2">— {featuredStory.author}</p>
                </div>
                <p className="mb-6">{featuredStory.excerpt}</p>
                <Button className="bg-em-purple hover:bg-em-purple-dark">
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
      <section className="section-padding bg-em-purple text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Has The Evolution Meeting made a difference in your life? We invite you to share your story 
            of recovery, healing, or transformation. Your experiences can inspire others and show the 
            real impact of our work.
          </p>
          <Button asChild className="bg-white text-em-purple hover:bg-gray-100">
            <a href="/contact">Submit Your Story</a>
          </Button>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading 
            title="Voices of Change" 
            subtitle="Short Testimonials from Our Community"
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Quote className="h-6 w-6 text-em-red opacity-50 mb-2" />
              <p className="italic mb-4">
                "The substance abuse program gave me tools to maintain my sobriety that I use every day. Two years clean and counting."
              </p>
              <p className="font-semibold">— David T.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Quote className="h-6 w-6 text-em-red opacity-50 mb-2" />
              <p className="italic mb-4">
                "As a volunteer, I've seen how education changes attitudes about GBV in our community. It's making a real difference."
              </p>
              <p className="font-semibold">— Lerato M.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Quote className="h-6 w-6 text-em-red opacity-50 mb-2" />
              <p className="italic mb-4">
                "The helpline counselor talked me through a crisis and helped me find safety. I'll never forget that night."
              </p>
              <p className="font-semibold">— Anonymous Caller</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Quote className="h-6 w-6 text-em-red opacity-50 mb-2" />
              <p className="italic mb-4">
                "My daughter found hope here after addiction nearly took her life. The family counseling helped us heal together."
              </p>
              <p className="font-semibold">— Parent of Recovery Client</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Quote className="h-6 w-6 text-em-red opacity-50 mb-2" />
              <p className="italic mb-4">
                "The March for Justice showed me I wasn't alone in fighting for change. It was empowering to find my community."
              </p>
              <p className="font-semibold">— Event Participant</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Quote className="h-6 w-6 text-em-red opacity-50 mb-2" />
              <p className="italic mb-4">
                "I never thought I could leave. The legal advocates helped me navigate the system and start fresh with my children."
              </p>
              <p className="font-semibold">— GBV Survivor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Help Us Create More Success Stories</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Your support makes these transformations possible. Together, we can help more individuals heal and build lives free from violence and addiction.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-em-red hover:bg-em-red-dark">
              <a href="/donate">Donate Today</a>
            </Button>
            <Button asChild variant="outline" className="border-em-purple text-em-purple hover:bg-em-purple hover:text-white">
              <a href="/volunteer">Become a Volunteer</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ImpactStories;
