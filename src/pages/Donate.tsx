
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HeartHandshake, CheckCircle, DollarSign, Gift } from "lucide-react";
import { useState } from "react";

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");

  const handleAmountSelect = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setDonationAmount(null);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/donate-bg.jpg"
        title="DONATE"
        subtitle="Your Support Changes Lives"
      />

      {/* Donation Form Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading 
                title="Your Donation Makes a Difference" 
                centered={false}
              />
              <p className="text-lg mb-6">
                When you donate to The Evolution Meeting, you directly support survivors of gender-based violence 
                and individuals recovering from substance abuse. Your generosity funds essential services, community 
                education, and advocacy work that transforms lives.
              </p>
              
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">How Your Donation Helps:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                    <span><strong>R100 provides</strong> a counseling session for a survivor</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                    <span><strong>R250 supports</strong> a recovery group meeting for 10 people</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                    <span><strong>R500 enables</strong> a community education workshop</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1" />
                    <span><strong>R1,000 funds</strong> emergency assistance for a family in crisis</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-3">Other Ways to Support</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Gift className="h-5 w-5 text-em-purple mr-2 mt-1" />
                    <div>
                      <h4 className="font-semibold">In-Kind Donations</h4>
                      <p>We accept clothing, toiletries, non-perishable foods, and other essential items.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="h-5 w-5 text-em-purple mr-2 mt-1" />
                    <div>
                      <h4 className="font-semibold">Corporate Partnerships</h4>
                      <p>Partner with us through funding, employee volunteerism, or matched giving programs.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-sm text-gray-600">
                <p>The Evolution Meeting is a registered non-profit organization (Reg No: 137-164) and Public Benefit Organization (PBO: 9761722165). All donations are tax-deductible.</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Secure Donation Form</h3>
              
              {/* Donation Type Selection */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Select donation type:</p>
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant={donationType === "one-time" ? "default" : "outline"}
                    className={donationType === "one-time" ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                    onClick={() => setDonationType("one-time")}
                  >
                    One-time
                  </Button>
                  <Button 
                    variant={donationType === "monthly" ? "default" : "outline"}
                    className={donationType === "monthly" ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                    onClick={() => setDonationType("monthly")}
                  >
                    Monthly
                  </Button>
                </div>
              </div>
              
              {/* Amount Selection */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Select amount (ZAR):</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
                  <Button 
                    variant={donationAmount === 50 ? "default" : "outline"}
                    className={donationAmount === 50 ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                    onClick={() => handleAmountSelect(50)}
                  >
                    R 50
                  </Button>
                  <Button 
                    variant={donationAmount === 100 ? "default" : "outline"}
                    className={donationAmount === 100 ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                    onClick={() => handleAmountSelect(100)}
                  >
                    R 100
                  </Button>
                  <Button 
                    variant={donationAmount === 250 ? "default" : "outline"}
                    className={donationAmount === 250 ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                    onClick={() => handleAmountSelect(250)}
                  >
                    R 250
                  </Button>
                  <Button 
                    variant={donationAmount === 500 ? "default" : "outline"}
                    className={donationAmount === 500 ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                    onClick={() => handleAmountSelect(500)}
                  >
                    R 500
                  </Button>
                  <Button 
                    variant={donationAmount === 1000 ? "default" : "outline"}
                    className={donationAmount === 1000 ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                    onClick={() => handleAmountSelect(1000)}
                  >
                    R 1,000
                  </Button>
                  <Button 
                    variant="outline"
                    className={customAmount ? "bg-em-purple text-white hover:bg-em-purple-dark" : ""}
                  >
                    Other
                  </Button>
                </div>
                <div className="mt-3">
                  <Input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="w-full"
                  />
                </div>
              </div>
              
              {/* Personal Information */}
              <div className="space-y-4 mb-6">
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
              </div>
              
              {/* Actions */}
              <div className="mt-8">
                <Button className="w-full bg-em-red hover:bg-em-red-dark text-lg py-6">
                  <HeartHandshake className="mr-2 h-5 w-5" />
                  Complete Donation
                </Button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Your donation is secure and encrypted. You will receive a receipt via email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EFT Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Donate via EFT" 
            centered={true}
          />
          <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="mb-6 text-center">
              You can make a direct bank transfer to our account using the following details:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Account Name:</span>
                <span>The Evolution Meeting</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Bank:</span>
                <span>Standard Bank</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Account Number:</span>
                <span>12345678910</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Branch Code:</span>
                <span>051001</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Reference:</span>
                <span>Donation - [Your Name]</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">SWIFT Code:</span>
                <span>SBZAZAJJ</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Please email proof of payment to <a href="mailto:donations@evolutionmeeting.org" className="text-em-purple hover:underline">donations@evolutionmeeting.org</a> to receive your tax receipt.
              </p>
              <div className="bg-em-purple/10 p-4 rounded-lg inline-block">
                <img 
                  src="https://placehold.co/200x200/png?text=QR+Code" 
                  alt="QR Code for Bank Details" 
                  className="w-32 h-32 mx-auto"
                />
                <p className="text-sm mt-2">Scan to save bank details</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories Teaser */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <SectionHeading 
            title="The Impact of Your Giving" 
            subtitle="Real Stories of Transformation"
            centered={true}
          />
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg mb-6">
              "The Evolution Meeting was my lifeline when I had nowhere else to turn. Through their counseling and 
              support groups, I found the strength to leave my abusive relationship and rebuild my life. Today, I am 
              safe, employed, and helping other survivors. None of this would have been possible without donors who 
              funded these essential services."
            </p>
            <p className="font-semibold">- Nomsa M., Survivor and Advocate</p>
          </div>
          <Button asChild variant="outline" className="border-em-purple text-em-purple hover:bg-em-purple hover:text-white">
            <a href="/impact-stories">Read More Impact Stories</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
