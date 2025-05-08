
import React from "react";
import LandingPage from "../ui/landing-page";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ExampleLandingPage: React.FC = () => {
  const heroProps = {
    title: "Welcome to Evolution Meeting",
    subtitle: "Building stronger communities through support and connection",
    backgroundImage: "/lovable-uploads/f9d6ab5f-52f7-443c-997d-cf526e8b4dc1.png",
    button: {
      text: "Get Started",
      href: "/about"
    }
  };

  return (
    <LandingPage hero={heroProps}>
      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-bold text-center mb-10">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We provide comprehensive support services for those in need.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Building stronger communities through connection and engagement.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Fostering personal and collective growth through our programs.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-10">Join Us Today</h2>
          <p className="text-center max-w-2xl mx-auto mb-8">
            Be part of our mission to create positive change in our community. Together, we can make a difference.
          </p>
          <div className="flex justify-center">
            <Card className="max-w-md w-full">
              <CardHeader>
                <CardTitle>Get Involved</CardTitle>
                <CardDescription>Join our community today</CardDescription>
              </CardHeader>
              <CardContent>
                <p>There are many ways to get involved with our organization, from volunteering to attending events or donating to support our cause.</p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <a href="/volunteer" className="text-em-blue hover:text-em-blue-dark">Learn More →</a>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </LandingPage>
  );
};

export default ExampleLandingPage;
