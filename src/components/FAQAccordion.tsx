import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export function FAQAccordion() {
    return (
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is English Friendly Korea?</AccordionTrigger>
          <AccordionContent>
            English Friendly Korea is a curated directory of businesses and services in South Korea that are welcoming and accessible to English speakers. We aim to help foreigners navigate life in Korea more easily.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How are businesses selected?</AccordionTrigger>
          <AccordionContent>
            Businesses are selected based on community recommendations, reviews, and direct outreach. We prioritize places known for their English-speaking staff and foreigner-friendly services.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I suggest a business?</AccordionTrigger>
          <AccordionContent>
            Yes! We encourage community contributions. Please use our "Submit a Listing" form (coming soon!) to suggest new businesses you've had a good experience with.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Is the information up-to-date?</AccordionTrigger>
          <AccordionContent>
            We strive to keep our listings as current as possible. However, business details can change. If you notice any outdated information, please let us know through our contact page.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }
  
  export default FAQAccordion; // Add default export