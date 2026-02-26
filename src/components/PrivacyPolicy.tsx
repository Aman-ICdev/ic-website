import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-blue-600 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 gap-2 pl-0 hover:pl-2 transition-all"
            onClick={onBack}
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </Button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-slate-900">Privacy Policy</h1>
        <p className="text-slate-600 mb-8">Effective Date: June 1, 2025</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <p>
              This Privacy Policy (“Policy”) describes the types of Personal Information we collect when you interact with us, including but not limited to information provided when you access our websites (including www.Instacoach.com) and however, else you may interact with us (collectively, the “Service(s)” or “Intro Service(s)”). This Policy applies to all Intro Services, regardless of the platform or device used; it describes all Personal Information collected, used, transmitted, disclosed, stored, or maintained by us, including both electronic and paper records.
            </p>
            <p className="mt-4">
              Please read this Policy carefully to fully understand how we collect, use, share, and protect your Personal Information. If you do not agree with this Privacy Policy, please do not use our Services.
            </p>
            <p className="mt-4">
              This Privacy Policy explains:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>What information may be used when you collect this service</li>
              <li>Our use of cookies and other technology on our web-based Services</li>
              <li>How we may use and share information we collect about you</li>
              <li>The choices we offer, including how to access and update information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information We Collect and Use</h2>
            
            <h3 className="text-xl font-medium text-slate-900 mb-2">Information You Give Us</h3>
            <p className="mb-4">When you sign up for and use our Services as a customer or Expert (including when you use our online chatbot), we may collect and store Personal Information you provide, including:</p>
            
            <div className="space-y-4">
              <div>
                <span className="font-semibold">Personal Identifiers.</span> We receive personal identifiers you provide (including, for example, information such as your name, email address, mailing address, telephone number, signature, or similar identifiers) and use them to respond to and complete your requests (including providing notifications and answers related to questions you submit), communicate with you for registration, customer service, and informational purposes (including sending you confirmation emails, notices, updates, invoices, and security alerts), and communicate with you for marketing purposes (including sending you news, promotions, special offers, information, offering you other products and services that we, our affiliates, or others believe may be of interest to you). If you win a prize on the site, we may use your address for shipping purposes. We may also create internal identification and reference codes to identify you in our electronic systems.
              </div>
              
              <div>
                <span className="font-semibold">Communications and Submissions.</span> We collect the information and content you submit when you submit questions, the calls you make with an expert, respond to questions as an expert, post information on our websites (including public testimonials and forum posts you may choose to submit), or otherwise voluntarily communicate with Instacoach. We also collect information you submit through contact, sign-up, and profile forms, email communications, and other submissions (including reviews and surveys), and when you speak with our customer service agents. We use this information to respond to and fulfill your requests, establish and manage our customer relations and customer service, and to provide and improve our websites, products, and services.
              </div>
              
              <div>
                <span className="font-semibold">Instacoach Referral Information.</span> If you use our referral program to recommend potential experts, to tell a friend about Instacoach, or to send a copy of a call to a friend, you may need to provide contact information for yourself and the friend. We will automatically send your friend a one-time email inviting him or her to visit the Sites. Instacoach stores this information for the sole purpose of sending this one-time email and tracking the success of our referral program.
              </div>
              
              <div>
                <span className="font-semibold">Financial Information.</span> We receive financial information such as payment card or PayPal™ information, and other related information to process payments for products and services you purchase and to issue expert and referral payments to you.
              </div>
              
              <div>
                <span className="font-semibold">Commercial Information.</span> We collect and generate commercial information and transaction information (such as records of products and services purchased on our websites or services you have enrolled in). We use this information to respond to and fulfill requests, improve our product and service offerings, communicate with you, tailor our marketing efforts, and for internal reporting purposes.
              </div>
              
              <div>
                <span className="font-semibold">Inferences from the information listed above.</span> We will use the information listed above to draw inferences about your preferences to help us develop and provide better products and services.
              </div>
              
              <div>
                <span className="font-semibold">Audio and Visual Information.</span> We receive any digital photos you share with us through our Services. We may also record customer service telephone calls for quality purposes and to meet our legal obligations. We will record video calls between you and experts.
              </div>
              
              <div>
                <span className="font-semibold">Privacy Choices.</span> We receive and retain any opt-outs or other choices related to how we collect, us, and disclose Personal Information.
              </div>
            </div>

            <h3 className="text-xl font-medium text-slate-900 mt-6 mb-2">Information Third Parties Provide About You</h3>
            <p className="mb-4">We may, from time to time, supplement the information we collect about you online with outside records from third parties in order to enhance our ability to serve you, to tailor our content to you and to offer you opportunities to purchase products or services that we believe may be of interest to you. These third party sources include:</p>
            
            <div className="space-y-4">
              <div>
                <span className="font-semibold">Social Networks and Publicly Available Data.</span> Our websites include social media features, such widgets like the “Share” button and similar functions. These features may collect your IP address, the pages you are visiting on our websites, and may set cookies to enable them to function as you have requested. Social media features and widgets are either hosted by a third party or directly on our websites.
              </div>
              
              <div>
                <span className="font-semibold">Information That Is Collected from Marketing Partners and Data Providers.</span> We may collect information about you from marketing partners and data providers, including but not limited to, personal identifiers, commercial information, and generally available information that helps us offer you products and services we think may interest you.
              </div>
              
              <div>
                <span className="font-semibold">Information Collected from Affiliates.</span> We may collect information about you from Instacoach affiliates’ websites and other places where we show you ads. We may collect information from these services such as personal identifiers, commercial information, and other generally available information.
              </div>
              
              <div>
                <span className="font-semibold">Information Other Users Provide about You.</span> Other users may provide us your personal identifiers (such as your email address) or other information in order to invite you to use the Instacoach Services or share content from the Instacoach Services with you. In this case, we will use the information for the purposes for which it was provided.
              </div>
            </div>

            <h3 className="text-xl font-medium text-slate-900 mt-6 mb-2">Other Information We Collect</h3>
            <p className="mb-4">We also may collect other information about you, your device, or your use of the services in ways that we describe to you at the point of collection or otherwise with your consent. You may choose not to provide us with certain types of information, but doing so may affect your ability to use some of the Instacoach Services.</p>

            <h3 className="text-xl font-medium text-slate-900 mt-6 mb-2">Information We Get from Your Use of The Instacoach Services</h3>
            <p className="mb-4">We collect information about the Instacoach Services that you use and how you use them, like when you open one of our emails or view and interact with our ads and content (collectively, “Usage Information”). We use this information to provide and improve our products and services, tailor your experience on and across our websites and other services, tailor our marketing efforts, and to create aggregate internal reports on website usage and activity, such as views of certain pages and content. Usage Information includes:</p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">Device Information.</span> We collect device-specific information (such as your hardware model, operating system version, unique device identifiers, and mobile network information, including phone number).</li>
              <li><span className="font-semibold">Browsing Information.</span> This includes the URL that referred you to the Instacoach Services, the areas within the Instacoach Services that you visit, how long you spend on the Instacoach Devices, and the time of day of your visit.</li>
              <li><span className="font-semibold">IP Address.</span> An IP address is a string of numbers associated with the device and/or local network you connect to or use to access the Internet.</li>
              <li><span className="font-semibold">Location Information.</span> Many mobile devices permit applications to access real-time geolocation information. We may collect and use such information with your consent when you use our websites. We use various technologies to determine location, including IP address, GPS, and other sensors that may, for example, provide us with information on nearby devices, Wi-Fi access points and cell towers and provide geo-location information.</li>
              <li><span className="font-semibold">Inferences from the information listed above.</span> We may use the information listed above to draw inferences about your preferences to help us provide you with personalized content and offers and help us develop and provide better products and services.</li>
            </ul>

            <h3 className="text-xl font-medium text-slate-900 mt-6 mb-2">Automatic Collection of Information from Cookies and Other Technology</h3>
            <p className="mb-4">We and our partners use various technologies to collect and store information when you visit the Instacoach Services, which we use for the same purposes as Usage Information and to help us improve our websites and communications. This automatic information collection may include using cookies or similar technologies to identify your browser or device</p>
            
            <div className="space-y-4">
              <div>
                <span className="font-semibold">Cookies.</span> A cookie is a small file containing a string of characters that is sent to your computer when you visit a website. When you visit the website again, the cookie allows that site to recognize your browser. Cookies may store user preferences and other information. You can reset your browser to refuse all cookies or to indicate when a cookie is being sent. However, some website features or services may not function properly without cookies.
              </div>
              
              <div>
                <span className="font-semibold">Mobile Identifiers.</span> We may use software development kits (“SDKs”) that make use of mobile advertising identifiers (i.e., IDFA on Apple mobile devices or Advertising ID on Android mobile devices), which function similarly to cookies on mobile devices. You may reset your IDFA or Advertising ID in the settings on your mobile device.
              </div>
              
              <div>
                <span className="font-semibold">Web Beacons.</span> Small graphic images or other web programming code called web beacons (also known as “1×1 GIFs,” “one pixel GIFs,” or “clear GIFs”) may be included in our web pages and e-mail messages. Web beacons may be invisible to you, but any electronic image or other web programming code inserted into a web page or e-mail can act as a web beacon. Web beacons or similar technologies may be used for a number of purposes, including, without limitation, to count visitors to the Instacoach Services, to monitor how users navigate the Instacoach Services, to make cookies more effective, and to analyze how our emails, articles, and links were opened, viewed, and used.
              </div>
              
              <div>
                <span className="font-semibold">SMS.</span> The SMS Privacy Policy outlines how we collect, use, and protect the personal information that you provide to us, including when you interact with us through SMS messaging. When you send a text message to our US toll-free number, we collect certain information such as your phone number and the contents of the message. In order to comply with applicable laws and regulations, we also collect and store records of your consent to receive SMS messages from us. We may also collect additional information that you provide to us in order to fulfill your request, such as your name, email address, or booking details.
              </div>
            </div>

            <p className="mt-4">
              We use the phone number and consent data that we collect from you in order to provide our services to you. This includes sending SMS messages to your phone number in order to communicate with you about your account, bookings, or other relevant information. We may also use your information to improve our services, to personalize your experience with us, or to provide you with marketing materials that we believe may be of interest to you. We do not share your personal information with third parties, except as required by law or as necessary to provide our services to you. We may share your information with our trusted service providers who assist us in operating our business, such as payment processors.
            </p>
            <p className="mt-4">
              We take appropriate measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We use secure technologies and procedures to help safeguard your information, and we regularly review and update our security measures to ensure that they remain effective. You have the right to access, correct, or delete your personal information at any time. You can also opt-out of receiving marketing materials from us.
            </p>
            <p className="mt-4">
              ** Most browsers will tell you how to stop accepting new cookies, how to receive notification of new cookies, and how to disable existing cookies. For more information about cookies and how to disable them, or restrict the categories of cookies you wish to accept, you can consult the information at www.allaboutcookies.org/manage-cookies/.
            </p>
            <p className="mt-4">
              Please note that rejecting cookies does not mean that you will no longer see ads when you visit the Instacoach Services. Also, without cookies, you may not be able to take full advantage of all of the Instacoach Services and some parts of the Instacoach Services may not function properly.
            </p>
            <p className="mt-4">
              <span className="font-semibold">Anonymous or Aggregated Information.</span> We de-identify or aggregate data we receive and may use and disclose it for any business purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">How We Disclose Personal Information</h2>
            <div className="space-y-4">
              <div>
                <span className="font-semibold">Service Providers.</span> We share any of the Personal information described above with service providers (including but not limited to payment processors, fraud detection vendors, service-related technology providers, and survey administrators) that provide services to you and us, including to help us maintain our databases and websites, administer emails, display content, and analyze website usage activity. For example, we may provide your personal identifiers and commercial information to communications and marketing vendors so they can send you marketing communications and other communications on our behalf. We require that service providers use Personal Information only for the purposes specified in our agreements.
              </div>
              
              <div>
                <span className="font-semibold">Our Partners From Whom You Have Request Information.</span> We may share your personal identifiers and commercial information with other companies from whom you request to receive a specific product or service so they can market their products or services to you. If you do not want your Personal Information shared with these companies, you may contact us using the information in our “How to Contact Us” section below.
              </div>
              
              <div>
                <span className="font-semibold">Within Our Organization.</span> We may share any of your Personal Information with parents, subsidiaries, joint venture partners, and other entities under common control subject to this Privacy Policy.
              </div>
              
              <div>
                <span className="font-semibold">Social Networks.</span> You may interact with certain features of the Instacoach Services that cause certain categories of Personal Information to be published to your social networks. To understand the precise categories of Personal Information shared in this manner, please review the privacy policies of the relevant social networks and/or log out of the applicable service before you use our online services.
              </div>
              
              <div>
                <span className="font-semibold">Public Disclosures Using Non-Restricted Services.</span> As explained in the Instacoach Terms of Service, information provided by you in the content of your calls, questions, answers, and other communications on our websites (including testimonials and community forum posts you submit), in expert profiles describing your experiences and qualifications, and in signatures attached to postings on our websites ("Posts") may not be private or confidential. Posts may be collected, copied, or used by others without your or our knowledge, and the security and other protective provisions of this Policy will not apply. Also, please keep in mind that publicly posting your account or contact information may result in the transmission of unsolicited messages from persons and entities over which we have no control. Please exercise caution and good judgment when disclosing any Personal Information to any public services, including in Posts on the Instacoach Services. Note that we cannot be responsible for any online postings by a family member, friend, acquaintance or other person or entity outside of our control.
                <br className="mt-2" />
                If you wish to update or delete a Post, you may contact us using the “How to Contact Us” information below. In some cases, we may not be able to remove your Personal Information, in which case we will let you know and explain why.
              </div>
              
              <div>
                <span className="font-semibold">Sweepstakes, Contests, and Promotions.</span> Instacoach may offer sweepstakes, contests, and other promotions (“Promotion(s)”) that may require registration. By participating in a Promotion, you are agreeing to the terms, conditions or official rules that govern that Promotion, which may contain specific requirements of you, including, except where prohibited by law, allowing the sponsor(s) of the Promotion to use your name, voice and/or likeness in advertising or marketing associated with the Promotion. If you choose to enter a Promotion, Personal Information may be disclosed to third parties or the public in connection with the administration of such Promotion, including, without limitation, in connection with winner selection, prize fulfillment, and as required by law or permitted by the Promotion’s official rules, such as on a winners list.
              </div>
              
              <div>
                <span className="font-semibold">Business Transfers.</span> In the event of a merger, acquisition, financing due diligence, reorganization, bankruptcy, receivership, sale of company assets (whether by private sale, through operation of law, as part of a divestiture plan, or otherwise), your Personal Information, and any other information that we have collected, may be disclosed to the persons and/or entities assuming control of the relevant business unit or as otherwise necessary to complete the transaction as permitted by law or contract.
              </div>
              
              <div>
                <span className="font-semibold">Legal and Similar Disclosures.</span> We may disclose Personal Information about you with law enforcement, the courts, our advisors, attorneys, and others who participate in the legal process, if necessary to do so by law or based on our good faith belief that it is necessary to enforce or apply our contracts, conform or comply with the law or is necessary to protect us, the users of the websites, or others.
              </div>
              
              <div>
                <span className="font-semibold">Otherwise with Your Consent or At Your Direction.</span> In addition to the sharing described in this Privacy Policy, we may share information about you with third parties whenever you consent to or direct such sharing
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Opt-Out Choices</h2>
            <p>We offer you choices regarding the collection, use, and sharing of your Personal Information on the Instacoach Services.</p>
            <p className="mt-2">Upon request, Instacoach will provide you with information about whether we hold any of your Personal Information. You may also exercise your preferences in the following manner:</p>
            
            <div className="mt-4 space-y-4">
              <div>
                <span className="font-semibold">Email Communications.</span> When you receive promotional communications from us, you may indicate a preference to stop receiving further promotional communications from us, and you will have the opportunity to “opt-out” by following the unsubscribe instructions provided in the promotional email you receive or by contacting us directly at privacyrequest@Instacoach.com. Regardless of your indicated email preferences, we may send you administrative emails regarding the Intro Services, including, for example, notices of updates to our online terms or this Privacy Policy, registration and expert application-related communications (as appropriate), and communications and updates related to questions you are asking or answering, Posts you make, and other information related to your account.
              </div>
              
              <div>
                <span className="font-semibold">Update or Delete Your Account information.</span> If you wish to verify, correct, update or delete any of the Personal Information provided to us in connection with your account on the Intro Services, you may do so through the Edit Profile page when you log in to your account. Please note that we may be required (by applicable law or otherwise) to keep certain information and not delete it, in which case we will comply with your deletion request only after we have fulfilled such requirements. It may not always be possible to completely remove or delete all of your information from our databases without some residual data remaining in our archives because of backups and other reasons. If you would like to make a request related to the Personal Information we have about you, you may contact us at privacyrequest@Instacoach.com.
              </div>
              
              <div>
                <span className="font-semibold">Opt-out of Personalized Advertising.</span> We do not sell your personal information to third parties, but if you do not wish for our third-party partners to provide you with personalized advertising based on your browsing activity and interest, you may opt-out of receiving such advertisements on our websites by contacting us at privacyrequest@Instacoach.com.
              </div>
            </div>

            <p className="mt-4">Upon request, Intro will provide you with information about whether we hold any of your Personal Information. You may also exercise your preferences in the following manner:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Visit the Digital Advertising Alliance (DAA) Opt-Out Page (http://www.aboutads.info/choices). The DAA Opt-Out Page provides a tool that identifies its member companies that have Cookies on your browser and provides links to those companies.</li>
              <li>Update the privacy settings in the Help section of your browser, or in the Settings tab on your mobile device.</li>
              <li>You may also click on the Ad Choices icon in certain advertisements.</li>
              <li>You may opt out of additional third party advertising networks by going to the Network Advertising Initiative’s Website (http://www.networkadvertising.org/managing/opt_out.asp) and following the directions provided.</li>
            </ul>
            <p className="mt-4">Additionally, many network advertising programs allow you to view and manage the interest categories they have compiled from your online browsing activities. These interest categories help determine the types of personalized advertisements you may receive.</p>
            <p className="mt-4">Please note that even if you choose to remove your information or “opt out,” you may continue to see advertisements while you are browsing online; however, those advertisements will no longer be tailored to your interests. Additionally, information regarding your usage may still be collected for research, analytics or internal operations purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">California Privacy Rights</h2>
            <p>Under the California Consumer Privacy Act of 2018 (“CCPA”), California residents have the right to request:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The deletion of the Personal Information we have about them</li>
              <li>To know additional information about whether and how we have collected, used, and disclosed Personal Information about them</li>
              <li>To know specific pieces of Personal Information we have about them</li>
            </ul>
            <p className="mt-2">California residents also have the right not to receive discriminatory treatment if they exercise the rights list above.</p>
            
            <h3 className="text-xl font-medium text-slate-900 mt-6 mb-2">Requests for Deletion and to Know About Information Collected</h3>
            <p>If you make a request for deletion of Personal Information or a request to know about Personal Information we have collected, we may require that you provide information and follow procedures so that we can verify the request and your jurisdiction before responding to it. The verification steps we take may differ depending on the request you make. We will match the information that you provide in your request to information we already have on file to verify your identity. If we are able to verify your request, we will process it. If we cannot verify your request, we may ask you for additional information to help us verify your request.</p>
            <p className="mt-4">California residents will be required to submit their first and last name and email address and may also be asked to provide their telephone number or address so that we can verify the request. Please provide as much of the requested information as possible to help us verify the request. We will only use the information received in a request for the purposes of responding to the request.</p>
            <p className="mt-4">California law permits California residents to use an authorized agent to make privacy rights requests. We require the authorized agent to provide proof of the California resident’s written permission (for example, a power of attorney) that shows the authorized agent has the authority to submit a request for the California resident. An authorized agent must follow the process described below to make a request. We will additionally require the authorized agent to verify his/her own identity.</p>
            
            <p className="mt-4">You may submit a request to us by:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Emailing us at privacyrequest@Instacoach.com</li>
            </ul>

            <h3 className="text-xl font-medium text-slate-900 mt-6 mb-2">Other California Requirements</h3>
            <p>If you are a California resident under the age of 18, and a registered user of any site where this policy is posted, you may request and obtain removal of content or information you have publicly posted to the Intro Services by contacting us at privacyrequest@Instacoach.com.</p>
            <p className="mt-2">Intro does not currently take actions to respond to “Do Not Track” signals.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Nevada Privacy Rights</h2>
            <p>We do not sell consumers’ covered information for monetary consideration (as defined in Chapter 603A of the Nevada Revised Statutes). However, if you are a Nevada resident, you have the right to submit a request directing us not to sell your Personal Information. To submit such a request, please contact us using the information in the “How to Contact Us” section below.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information on the Intro Services</h2>
            <p>Intro is a United States company and the Intro Services are provided from the United States. If you are a user who resides outside the United States, please be aware that information we collect will be transferred to and processed in the United States and may be processed and stored in other countries outside the United States which may have data protection laws that differ from the laws in your country. By using the Intro Services, or providing us with any information, you consent to the collection, processing, maintenance and transfer of such information in and to the United States and other applicable countries in which the privacy laws may not be as comprehensive as, or equivalent to, those in the country where you reside and/or are a citizen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information Processing and Transfer</h2>
            <p>We maintain procedural, technical, and physical safeguards to help protect against loss, misuse or unauthorized access, disclosure, alteration, or destruction of the Personal Information you provide via the Intro Services. Unfortunately, no transmission of data is guaranteed to be completely secure. It may be possible for third parties not under our control to intercept or access transmissions or private communications unlawfully. Therefore, any transmission of Personal Information to us is made at your own risk.</p>
            <p className="mt-4">We retain your account information and the information provided by you in the form of Posts indefinitely until such time that we determine it has no further commercial significance, at which time we may delete and/or aggregate and store it indefinitely. We may also retain and use this information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">How We Protect and Retain Your Information</h2>
            <p>We maintain procedural, technical, and physical safeguards to help protect against loss, misuse or unauthorized access, disclosure, alteration, or destruction of the Personal Information you provide via the Intro Services. Unfortunately, no transmission of data is guaranteed to be completely secure. It may be possible for third parties not under our control to intercept or access transmissions or private communications unlawfully. Therefore, any transmission of Personal Information to us is made at your own risk.</p>
            <p className="mt-4">We retain your account information and the information provided by you in the form of Posts indefinitely until such time that we determine it has no further commercial significance, at which time we may delete and/or aggregate and store it indefinitely. We may also retain and use this information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Third Party Links</h2>
            <p>The Intro Services may from time to time contain links to third party websites/services for your convenience and/or information (for example, sites linking via banner ads). If you access other sites using the links provided, you may leave the Intro Services. When you access these other sites, please understand that the operators of these websites may collect information from you which will be used by them in accordance with their privacy policies and terms of use, which may differ from ours. We do not endorse or control the policies or practices of third party websites that we do not control or operate.</p>
            <p className="mt-4">You should always carefully read the privacy policy of any site you access in order to understand their specific privacy and information usage practices.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Children’s Personal Information</h2>
            <p>Except where otherwise indicated, we do not knowingly collect or store any Personal Information from children under the age of 13. If a parent or guardian becomes aware that his or her child under the age of 13 has provided us with information without his or her consent, he or she should contact us at privacyrequest@Instacoach.com. As required by law, we will delete such information from our files within a reasonable time.</p>
            <p className="mt-4">We may also delete Personal Information from our websites, as well as Posts and other information, from users we believe are under the age of 18.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Updates to this Privacy Policy</h2>
            <p>From time to time, we may revise this Policy to reflect changes in the law or technology, or changes in our practices regarding information collection and use. If we make material revisions to the way we collect or use your Personal Information so that we are using it for purposes or sharing data with third parties that you have not consented to, we will provide you with notice of those changes and may do so by announcing the change through the Intro Services. You agree that we may notify you about material changes in the way we treat Personal Information by placing a notice on the Intro Services. You should check our online services frequently for updates.</p>
            <p className="mt-4">Any changes to this Policy will become effective as of the Effective Date on the top of this page. By continuing to use the Intro Services after the most current Effective Date, you will be deemed to have understood and agreed to such changes. If you do not agree with the terms of this Policy, as it may be amended from time to time, in whole or in part, please do not continue to use the Intro Services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Additional Terms</h2>
            <p>This Policy may be supplemented from time to time by additional terms, privacy statements, or notices that explain how we collect, use and share information in specific circumstances (“Additional Terms”). For example, Additional Terms may contain details about how we collect Personal Information in specific contexts.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">How to Contact Us</h2>
            <p>If you have any questions or suggestions regarding this Privacy Policy, contact us at privacyrequest@Instacoach.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
