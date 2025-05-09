import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HeartHandshake, CheckCircle, DollarSign, Gift, CreditCard, Wallet, Calendar, CreditCard as CardIcon, Lock } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useIsMobile } from "@/hooks/use-mobile";

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal" | "eft">("card");
  const [showCardFields, setShowCardFields] = useState(false);
  const form = useForm();
  const isMobile = useIsMobile();

  const handleAmountSelect = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setDonationAmount(null);
  };

  const handlePaymentMethodChange = (method: "card" | "paypal" | "eft") => {
    setPaymentMethod(method);
    setShowCardFields(method === "card");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process donation - in a real app this would connect to a payment processor
    alert("Thank you for your donation! This is a demo, so no actual payment will be processed.");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="DONATE"
        subtitle="Your Support Changes Lives"
        className={isMobile ? "pt-[250px]" : "pt-[300px] md:pt-[350px]"} // Adjusted padding for mobile
      />

      {/* Donation Form Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
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
                    <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1 flex-shrink-0" />
                    <span><strong>R100 provides</strong> a counseling session for a survivor</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1 flex-shrink-0" />
                    <span><strong>R250 supports</strong> a recovery group meeting for 10 people</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1 flex-shrink-0" />
                    <span><strong>R500 enables</strong> a community education workshop</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-em-red mr-2 mt-1 flex-shrink-0" />
                    <span><strong>R1,000 funds</strong> emergency assistance for a family in crisis</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-3">Other Ways to Support</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Gift className="h-5 w-5 text-em-purple mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">In-Kind Donations</h4>
                      <p>We accept clothing, toiletries, non-perishable foods, and other essential items.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="h-5 w-5 text-em-purple mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Corporate Partnerships</h4>
                      <p>Partner with us through funding, employee volunteerism, or matched giving programs.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <img 
                    src="/lovable-uploads/136d1178-dd74-408a-9889-e094c981a5e4.png" 
                    alt="Donation box" 
                    className="w-full rounded-lg shadow-md" 
                  />
                </div>
              </div>
              
              <div className="text-sm text-gray-600">
                <p>The Evolution Meeting is a registered non-profit organization (Reg No: 137-164) and Public Benefit Organization (PBO: 9761722165). All donations are tax-deductible.</p>
              </div>
            </div>
            
            <motion.div 
              className="bg-white p-4 md:p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Secure Donation Form</h3>
              
              <form onSubmit={handleSubmit}>
                {/* Donation Type Selection */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Select donation type:</p>
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <Button 
                      type="button"
                      variant={donationType === "one-time" ? "default" : "outline"}
                      className={donationType === "one-time" ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                      onClick={() => setDonationType("one-time")}
                      size={isMobile ? "sm" : "default"}
                    >
                      One-time
                    </Button>
                    <Button 
                      type="button"
                      variant={donationType === "monthly" ? "default" : "outline"}
                      className={donationType === "monthly" ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                      onClick={() => setDonationType("monthly")}
                      size={isMobile ? "sm" : "default"}
                    >
                      Monthly
                    </Button>
                  </div>
                </div>
                
                {/* Amount Selection */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Select amount (ZAR):</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-3">
                    <Button 
                      type="button"
                      variant={donationAmount === 50 ? "default" : "outline"}
                      className={donationAmount === 50 ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                      onClick={() => handleAmountSelect(50)}
                      size={isMobile ? "sm" : "default"}
                    >
                      R 50
                    </Button>
                    <Button 
                      type="button"
                      variant={donationAmount === 100 ? "default" : "outline"}
                      className={donationAmount === 100 ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                      onClick={() => handleAmountSelect(100)}
                      size={isMobile ? "sm" : "default"}
                    >
                      R 100
                    </Button>
                    <Button 
                      type="button"
                      variant={donationAmount === 250 ? "default" : "outline"}
                      className={donationAmount === 250 ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                      onClick={() => handleAmountSelect(250)}
                      size={isMobile ? "sm" : "default"}
                    >
                      R 250
                    </Button>
                    <Button 
                      type="button"
                      variant={donationAmount === 500 ? "default" : "outline"}
                      className={donationAmount === 500 ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                      onClick={() => handleAmountSelect(500)}
                      size={isMobile ? "sm" : "default"}
                    >
                      R 500
                    </Button>
                    <Button 
                      type="button"
                      variant={donationAmount === 1000 ? "default" : "outline"}
                      className={donationAmount === 1000 ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                      onClick={() => handleAmountSelect(1000)}
                      size={isMobile ? "sm" : "default"}
                    >
                      R 1,000
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      className={customAmount ? "bg-em-purple text-white hover:bg-em-purple-dark" : ""}
                      size={isMobile ? "sm" : "default"}
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

                {/* Payment Method Selection */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Select payment method:</p>
                  <div className="grid grid-cols-3 gap-2 md:gap-3">
                    <Button 
                      type="button"
                      variant={paymentMethod === "card" ? "default" : "outline"}
                      className={paymentMethod === "card" ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                      onClick={() => handlePaymentMethodChange("card")}
                      size={isMobile ? "sm" : "default"}
                    >
                      <CreditCard className="mr-1 md:mr-2 h-4 w-4" />
                      <span className={isMobile ? "hidden sm:inline" : ""}>Card</span>
                    </Button>
                    <Button 
                      type="button"
                      variant={paymentMethod === "paypal" ? "default" : "outline"}
                      className={paymentMethod === "paypal" ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                      onClick={() => handlePaymentMethodChange("paypal")}
                      size={isMobile ? "sm" : "default"}
                    >
                      <Wallet className="mr-1 md:mr-2 h-4 w-4" />
                      <span className={isMobile ? "hidden sm:inline" : ""}>PayPal</span>
                    </Button>
                    <Button 
                      type="button"
                      variant={paymentMethod === "eft" ? "default" : "outline"}
                      className={paymentMethod === "eft" ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                      onClick={() => handlePaymentMethodChange("eft")}
                      size={isMobile ? "sm" : "default"}
                    >
                      <DollarSign className="mr-1 md:mr-2 h-4 w-4" />
                      <span className={isMobile ? "hidden sm:inline" : ""}>EFT</span>
                    </Button>
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

                {/* Credit Card Details - Only show when card is selected */}
                {paymentMethod === "card" && (
                  <div className="space-y-4 mb-6 p-3 md:p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold flex items-center">
                      <Lock className="h-4 w-4 mr-2 text-em-purple" />
                      Secure Card Payment
                    </h4>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Card Number*</label>
                      <div className="relative">
                        <Input placeholder="1234 5678 9012 3456" required maxLength={19} />
                        <CardIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Expiry Date*</label>
                        <div className="relative">
                          <Input placeholder="MM/YY" required maxLength={5} />
                          <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">CVV*</label>
                        <Input placeholder="123" required maxLength={4} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Name on Card*</label>
                      <Input required />
                    </div>
                  </div>
                )}

                {/* PayPal Section */}
                {paymentMethod === "paypal" && (
                  <div className="my-6 p-4 bg-blue-50 rounded-lg text-center">
                    <p className="mb-3 text-sm md:text-base">You will be redirected to PayPal to complete your donation after clicking "Complete Donation".</p>
                    <img 
                      src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" 
                      alt="PayPal" 
                      className="h-10 mx-auto"
                    />
                  </div>
                )}
                
                {/* Actions */}
                <div className="mt-8">
                  <Button type="submit" className="w-full bg-em-red hover:bg-em-red-dark text-base md:text-lg py-4 md:py-6">
                    <HeartHandshake className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                    Complete Donation
                  </Button>
                  <p className="text-center text-xs md:text-sm text-gray-500 mt-4 flex items-center justify-center">
                    <Lock className="h-3 md:h-4 w-3 md:w-4 mr-1" />
                    Your donation is secure and encrypted. You will receive a receipt via email.
                  </p>
                </div>
              </form>
            </motion.div>
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

      {/* PayPal Section - Enhanced */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionHeading 
            title="Donate via PayPal" 
            centered={true}
          />
          <div className="max-w-xl mx-auto text-center">
            <p className="mb-6">
              You can also donate instantly and securely using PayPal. Click the button below to proceed.
            </p>
            <div className="bg-blue-50 p-8 rounded-lg shadow-md">
              <img 
                src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" 
                alt="PayPal" 
                className="h-16 mx-auto mb-6"
              />
              <p className="mb-4">PayPal allows you to donate securely using your credit card, debit card, or PayPal balance.</p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-lg py-4 px-8 mb-4">
                Donate with PayPal
              </Button>
              <p className="text-sm text-gray-500 mt-2">
                PayPal accepts Visa, Mastercard, American Express, and Discover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories Teaser */}
      <section className="section-padding bg-gray-50">
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
