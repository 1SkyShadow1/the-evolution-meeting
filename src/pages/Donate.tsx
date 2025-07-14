
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HeartHandshake } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<"payfast" | "paypal">("payfast");
  const isMobile = useIsMobile();

  // Helper to generate Payfast signature
  function generatePayfastSignature(data: Record<string, string | number | undefined | null>, passphrase?: string) {
    let pfOutput = "";
    for (const key of Object.keys(data)) {
      const val = data[key];
      if (val !== undefined && val !== null && val !== "") {
        pfOutput += `${key}=${encodeURIComponent(String(val).trim()).replace(/%20/g, "+")}&`;
      }
    }
    let getString = pfOutput.slice(0, -1);
    if (passphrase) {
      getString += `&passphrase=${encodeURIComponent(passphrase)}`;
    }
    return window.md5 ? window.md5(getString) : "";
  }

  const handlePayfastSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = donationAmount || Number(customAmount);
    const firstName = (document.getElementById("pf_first_name") as HTMLInputElement)?.value || "";
    const lastName = (document.getElementById("pf_last_name") as HTMLInputElement)?.value || "";
    const email = (document.getElementById("pf_email") as HTMLInputElement)?.value || "";
    const phone = (document.getElementById("pf_phone") as HTMLInputElement)?.value || "";
    const data: Record<string, string> = {
      merchant_id: "12836632",
      merchant_key: "c9oxvrapxfaeo",
      return_url: "https://www.evolutionmeeting.co.za/donate",
      cancel_url: "https://www.evolutionmeeting.co.za/donate",
      notify_url: "https://www.evolutionmeeting.co.za/payfast-notify",
      name_first: firstName,
      name_last: lastName,
      email_address: email,
      cell_number: phone,
      m_payment_id: Date.now().toString(),
      amount: amount ? amount.toFixed(2) : "0.00",
      item_name: "Donation",
      item_description: "Donation to The Evolution Meeting",
      email_confirmation: "1",
      confirmation_address: email,
    };
    data.signature = generatePayfastSignature(data, "");
    const form = document.createElement("form");
    form.action = "https://www.payfast.co.za/eng/process";
    form.method = "POST";
    form.style.display = "none";
    for (const key in data) {
      if (data[key]) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = data[key];
        form.appendChild(input);
      }
    }
    document.body.appendChild(form);
    form.submit();
  };

  const handlePaypalDonation = () => {
    window.open(`https://www.paypal.com/donate?business=Evolutionmeeting14%40gmail.com&currency_code=ZAR`, '_blank');
  };

  return (
    <Layout>
      <HeroSection
        title="DONATE"
        subtitle="Your Support Changes Lives"
        className={isMobile ? "pt-[250px]" : "pt-[300px] md:pt-[350px]"}
      />
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-lg">
            <SectionHeading 
              title="Your Donation Makes a Difference" 
              centered={true}
              isFirstSection={true}
            />
            <p className="text-lg mb-6 text-center">
              When you donate to The Evolution Meeting, you directly support survivors of gender-based violence and individuals recovering from substance abuse. Your generosity funds essential services, community education, and advocacy work that transforms lives.
            </p>
            <form onSubmit={paymentMethod === "payfast" ? handlePayfastSubmit : (e) => { e.preventDefault(); handlePaypalDonation(); }}>
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Select amount (ZAR):</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-3">
                  {[50, 100, 250, 500, 1000].map((amt) => (
                    <Button
                      key={amt}
                      type="button"
                      variant={donationAmount === amt ? "default" : "outline"}
                      className={donationAmount === amt ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                      onClick={() => { setDonationAmount(amt); setCustomAmount(""); }}
                      size={isMobile ? "sm" : "default"}
                    >
                      R {amt}
                    </Button>
                  ))}
                  <Button
                    type="button"
                    variant={customAmount ? "default" : "outline"}
                    className={customAmount ? "bg-em-purple text-white hover:bg-em-purple-dark" : ""}
                    size={isMobile ? "sm" : "default"}
                    onClick={() => { setDonationAmount(null); }}
                  >
                    Other
                  </Button>
                </div>
                <div className="mt-3">
                  <Input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={e => { setCustomAmount(e.target.value); setDonationAmount(null); }}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">First Name*</label>
                    <Input required id="pf_first_name" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Last Name*</label>
                    <Input required id="pf_last_name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email Address*</label>
                  <Input type="email" required id="pf_email" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
                  <Input type="tel" id="pf_phone" />
                </div>
              </div>
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Choose payment method:</p>
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  <Button
                    type="button"
                    variant={paymentMethod === "payfast" ? "default" : "outline"}
                    className={paymentMethod === "payfast" ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                    onClick={() => setPaymentMethod("payfast")}
                    size={isMobile ? "sm" : "default"}
                  >
                    <img src="https://www.payfast.co.za/assets/images/buttons/PayNow/PayNow-Red.png" alt="Payfast Pay Now" className="h-6 w-auto mr-1 inline" />
                    Payfast
                  </Button>
                  <Button
                    type="button"
                    variant={paymentMethod === "paypal" ? "default" : "outline"}
                    className={paymentMethod === "paypal" ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                    onClick={() => setPaymentMethod("paypal")}
                    size={isMobile ? "sm" : "default"}
                  >
                    <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" alt="PayPal" className="h-4 w-4 mr-1 inline" />
                    PayPal
                  </Button>
                </div>
              </div>
              {paymentMethod === "payfast" && (
                <div className="my-6 p-4 bg-orange-50 rounded-lg text-center">
                  <p className="mb-3 text-sm md:text-base">You will be redirected to Payfast to complete your donation after clicking "Complete Donation".</p>
                  <img 
                    src="https://www.payfast.co.za/assets/images/logos/pf-logo.svg" 
                    alt="Payfast" 
                    className="h-10 mx-auto"
                  />
                </div>
              )}
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
              <div className="mt-8">
                <Button 
                  type="submit" 
                  className="w-full bg-em-red hover:bg-em-red-dark text-base md:text-lg py-4 md:py-6"
                >
                  <HeartHandshake className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                  Complete Donation
                </Button>
                <p className="text-center text-xs md:text-sm text-gray-500 mt-4 flex items-center justify-center">
                  Your donation is secure and encrypted. You will receive a receipt via email.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
