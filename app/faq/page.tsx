"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-background py-24"
    >
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            Bakery FAQ
          </span>

          <h2 className="mt-5 text-4xl font-bold text-foreground md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Find answers about our cakes, ordering process, delivery,
            customization, and payment options.
          </p>
        </div>


        {/* FAQ Accordion */}
        <Accordion
          type="single"
          collapsible
          className="space-y-5"
        >

          {[
            {
              question: "How can I place an order?",
              answer:
                "You can place an order through our website or contact us through WhatsApp, phone, or email for custom cake requests.",
            },
            {
              question: "How early should I order a custom cake?",
              answer:
                "We recommend placing custom cake orders 2–3 days earlier to prepare your design with fresh ingredients.",
            },
            {
              question: "Do you provide cake delivery?",
              answer:
                "Yes, delivery is available depending on your location and product availability.",
            },
            {
              question: "Can I customize my cake?",
              answer:
                "Yes! You can customize flavor, size, design, colors, theme, and personalized messages.",
            },
            {
              question: "Do you offer eggless cakes?",
              answer:
                "Yes, we provide fresh and delicious eggless cakes with premium quality.",
            },
            {
              question: "Which payment methods do you accept?",
              answer:
                "We accept Cash on Delivery and secure online payment methods.",
            },
          ].map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="
                rounded-2xl
                border
                border-border
                bg-card
                px-6
                shadow-sm
                transition-all
                hover:shadow-lg
              "
            >
              <AccordionTrigger
                className="
                  text-left
                  text-lg
                  font-semibold
                  text-foreground
                  hover:no-underline
                "
              >
                {faq.question}
              </AccordionTrigger>

              <AccordionContent
                className="
                  text-muted-foreground
                  leading-7
                "
              >
                {faq.answer}
              </AccordionContent>

            </AccordionItem>
          ))}

        </Accordion>

      </div>
    </section>
  );
}