import React from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    id: 'item-1',
    question: 'What is English Friendly Korea?',
    answer: 'English Friendly Korea is a curated directory of businesses and services in South Korea that are welcoming and accessible to English speakers. We aim to help foreigners navigate life in Korea more easily.',
  },
  {
    id: 'item-2',
    question: 'How are businesses selected?',
    answer: 'Businesses are selected based on community recommendations, reviews, and direct outreach. We prioritize places known for their English-speaking staff and foreigner-friendly services.',
  },
  {
    id: 'item-3',
    question: 'Can I suggest a business?',
    answer: 'Yes! We encourage community contributions. Please use our "Submit a Listing" form to suggest new businesses you\'ve had a good experience with.',
  },
  {
    id: 'item-4',
    question: 'Is the information up-to-date?',
    answer: 'We strive to keep our listings as current as possible. However, business details can change. If you notice any outdated information, please let us know through our contact page.',
  },
];

export function FAQAccordion() {
  return (
    <RadixAccordion.Root
      type="single"
      collapsible
      className="w-full max-w-3xl mx-auto space-y-4"
    >
      {faqs.map((faq) => (
        <RadixAccordion.Item
          key={faq.id}
          value={faq.id}
          className="bg-white border-2 border-black shadow-brutal overflow-hidden focus-within:ring-2 focus-within:ring-pink-400 focus-within:ring-offset-2"
        >
          <RadixAccordion.Header className="flex">
            <RadixAccordion.Trigger
              className={cn(
                'flex flex-1 items-center justify-between p-4 font-bold text-lg text-left',
                'hover:bg-yellow-400 group focus:outline-none'
              )}
            >
              {faq.question}
              <ChevronDownIcon
                className="h-5 w-5 shrink-0 text-black transition-transform duration-200 group-data-[state=open]:rotate-180"
                aria-hidden
              />
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>
          <RadixAccordion.Content
            className={cn(
              'overflow-hidden text-base data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up',
              'p-4 pt-0 text-neutral-700'
            )}
          >
            {faq.answer}
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
}

export default FAQAccordion;