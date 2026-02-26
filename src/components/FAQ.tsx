import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "How do I get started?",
    answer: (
      <span>
        Download our app from the{" "}
        <a 
          href="https://apps.apple.com/us/app/instacoach/id6479509952" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Apple Appstore
        </a>
        {" "}or{" "}
        <a 
          href="https://play.google.com/store/apps/details?id=com.instacoach.clientApp" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Android Playstore
        </a>
      </span>
    )
  },
  {
    question: "Can I switch programs if my goals change?",
    answer: "Yes — you can switch programs anytime. Just know that you can only be in one program at a time, so when you change programs, your new one will replace your current one."
  },
  {
    question: "Is Instacoach only for older athletes?",
    answer: "Instacoach works for kids, beginners, and advanced players. We offer beginner-friendly programs created by college and pro athletes, designed to be safe, simple, and easy to follow at any age."
  },
  {
    question: "How much does Instacoach cost?",
    answer: "Starting a program is free. You can begin training right away, and choose to upgrade to Pro for extra features if you want."
  }
];

export function FAQ() {
  return (
    <div id="faq" className="bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-center text-4xl lg:text-5xl text-gray-900 mb-12">
          FAQs
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg px-6 border-0 shadow-sm"
            >
              <AccordionTrigger className="hover:no-underline text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}