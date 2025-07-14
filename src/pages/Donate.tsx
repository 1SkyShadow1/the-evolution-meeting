
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HeartHandshake } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Donate = () => {
  const [paymentMethod, setPaymentMethod] = useState<"payfast" | "paypal" | "eft">("payfast");
  const [eftAmount, setEftAmount] = useState(100);
  const eftBankDetails = {
    accountName: "THE EVOLUTION MEETING NPO",
    accountNumber: "63119800109",
    branchName: "GEZINA",
    branchCode: "250655",
    swiftCode: "FIRNZAJJ",
    accountType: "NPO account",
    reference: "Donation",
  };
  const handleCopyEftDetails = () => {
    const details = `Bank: First National Bank (FNB)\nAccount Name: ${eftBankDetails.accountName}\nAccount Number: ${eftBankDetails.accountNumber}\nBranch Name: ${eftBankDetails.branchName}\nBranch Code: ${eftBankDetails.branchCode}\nSWIFT Code: ${eftBankDetails.swiftCode}\nAccount Type: ${eftBankDetails.accountType}\nAmount: R${eftAmount}\nReference: ${eftBankDetails.reference}`;
    navigator.clipboard.writeText(details);
  };
  const isMobile = useIsMobile();

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
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">Choose payment method:</p>
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                <Button
                  type="button"
                  variant={paymentMethod === "payfast" ? "default" : "outline"}
                  className={paymentMethod === "payfast" ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                  onClick={() => setPaymentMethod("payfast")}
                  size={isMobile ? "sm" : "default"}
                >
                  <img src="https://my.payfast.io/images/buttons/DonateNow/Primary-Large-DonateNow.png" alt="Payfast Donate Now" className="h-6 w-auto mr-1 inline" />
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
                <Button
                  type="button"
                  variant={paymentMethod === "eft" ? "default" : "outline"}
                  className={paymentMethod === "eft" ? "bg-em-purple hover:bg-em-purple-dark" : ""}
                  onClick={() => setPaymentMethod("eft")}
                  size={isMobile ? "sm" : "default"}
                >
                  <span className="mr-1">🏦</span>
                  Bank EFT
                </Button>
              </div>
            </div>
            {paymentMethod === "payfast" && (
              <div className="my-6">
                {/* Official Payfast Donate Now form and button */}
                <script type="text/javascript" dangerouslySetInnerHTML={{__html:`
function customQuantitiesPayFast (formReference) {
formReference['amount'].value = formReference['amount'].value * formReference['custom_quantity'].value;
return true;
}
function actionPayFastJavascript ( formReference ) {
let shippingValidOrOff = typeof shippingValid !== 'undefined' ? shippingValid : true; 
let customValid = shippingValidOrOff ? customQuantitiesPayFast( formReference ) : false;
 if (typeof shippingValid !== 'undefined' && !shippingValid) {
return false;
}
if (typeof customValid !== 'undefined' && !customValid) {
return false;
}
return true;
}`}} />
                <form onSubmit="return actionPayFastJavascript( this );" name="PayFastPayNowForm" action="https://payment.payfast.io/eng/process" method="post">
                  <input required type="hidden" name="cmd" value="_paynow" />
                  <input required type="hidden" name="receiver" pattern="[0-9]" value="12836632" />
                  <table>
                    <tr>
                      <td><label id="PayFastAmountLabel" htmlFor="PayFastAmount">Amount: </label></td>
                      <td><input required id="PayFastAmount" type="number" step=".01" name="amount" min="5.00" placeholder="5.00" defaultValue="5" /></td>
                    </tr>
                  </table>
                  <table>
                    <tr>
                      <td><label htmlFor="custom_quantity">Quantity: </label></td>
                      <td><input required id="custom_quantity" type="number" name="custom_quantity" defaultValue="1" /></td>
                    </tr>
                  </table>
                  <input required type="hidden" name="item_name" maxLength={255} value="Donate Now" />
                  <input type="hidden" name="item_description" maxLength={255} value="Donate button" />
                  <table>
                    <tr>
                      <td colSpan={2} align="center">
                        <input type="image" src="https://my.payfast.io/images/buttons/DonateNow/Primary-Large-DonateNow.png" alt="Donate Now" title="Donate Now with Payfast" />
                      </td>
                    </tr>
                  </table>
                </form>
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
                <div className="mt-6">
                  <Button 
                    type="button" 
                    className="w-full bg-em-red hover:bg-em-red-dark text-base md:text-lg py-4 md:py-6"
                    onClick={handlePaypalDonation}
                  >
                    <HeartHandshake className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                    Donate with PayPal
                  </Button>
                </div>
              </div>
            )}
            {paymentMethod === "eft" && (
              <div className="my-6 p-4 bg-green-50 rounded-lg">
                <p className="mb-3 text-sm md:text-base">Use the details below to make an EFT (bank transfer) from your banking app or online banking. Please use your name as reference.</p>
                <div className="mb-4 flex flex-col gap-2">
                  <div>
                    <label className="font-semibold">Amount (ZAR):</label>
                    <div className="flex gap-2 mt-1">
                      {[50, 100, 250, 500].map((amt) => (
                        <Button key={amt} type="button" variant={eftAmount === amt ? "default" : "outline"} onClick={() => setEftAmount(amt)}>{`R${amt}`}</Button>
                      ))}
                      <Input
                        type="number"
                        min={1}
                        value={eftAmount}
                        onChange={e => setEftAmount(Number(e.target.value))}
                        className="w-24"
                        placeholder="Other"
                      />
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <span><b>Bank:</b> First National Bank (FNB)</span>
                    <span><b>Account Name:</b> {eftBankDetails.accountName}</span>
                    <span><b>Account Number:</b> {eftBankDetails.accountNumber}</span>
                    <span><b>Branch Name:</b> {eftBankDetails.branchName}</span>
                    <span><b>Branch Code:</b> {eftBankDetails.branchCode}</span>
                    <span><b>SWIFT Code:</b> {eftBankDetails.swiftCode}</span>
                    <span><b>Account Type:</b> {eftBankDetails.accountType}</span>
                    <span><b>Reference:</b> {eftBankDetails.reference}</span>
                    <span><b>Amount:</b> R{eftAmount}</span>
                  </div>
                  <Button type="button" className="mt-4 w-full bg-em-purple hover:bg-em-purple-dark text-white" onClick={handleCopyEftDetails}>
                    Copy All Details
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">After copying, open your banking app or online banking and paste the details to make your donation via EFT.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
