import { IconButton } from "@mui/material";
import { useState } from "react";

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are you able to work with existing templates?",
      answer:
        "Of course! Whether it’s Shopify 1.0 or 2.0, our team of Shopify developers is highly experienced. The only exception would be if the theme was previously modified by someone inexperienced, leading to bugs and issues. However, rest assured that we will still offer you a solution.",
    },
    {
      question: "Can we use our own designers for the UX?",
      answer:
        "Yes, we don’t have in-house UX designers for this reason. Most of our clients prefer to choose a designer based on their style, so we don’t want to limit them. Our team will work together with your designer, ensuring everything follows Shopify standards and that, as a store owner, you’ll be able to manage everything easily.",
    },
    {
      question:
        "Does your Shopify agency have a minimum project size requirement?",
      answer:
        "Simply put, we don’t. We understand that not all stores need the same amount of work every month and that sometimes urgent issues arise that can’t wait. The only thing we ask of our clients is to group tasks together during the month to avoid fragmenting the work.",
    },
    {
      question: "What are your fees?",
      answer:
        "To provide a quote, we need all the details and a full understanding of the project, whether big or small. This approach reflects our commitment to trustworthiness, as we want to ensure we offer the correct solution to your problem. A few years ago, we wrote an interesting article on this topic, which we suggest you check out here. We typically don’t ask for retainer contracts unless that’s what you need.",
    },
    {
      question: "Do you work with Shopify Plus",
      answer:
        "Yes, our team is highly experienced in Shopify Plus development.",
    },
    {
      question: "Can you help with ongoing maintenance and support?",
      answer:
        "We’re proud to say that nearly all of our clients choose to continue working with us as their exclusive Shopify agency partner after their initial project. This is something we take great pride in and is a key part of our core philosophy. Every store aims to grow and expand, and to achieve that, they need a trusted Shopify agency as a partner to support them every step of the way.",
    },
    {
      question: "Whare is your Shopify Agency Based?",
      answer:
        "Previously, our headquarters were based in London, UK. However, we relocated to Barcelona, Spain a few years ago. Despite this, our client base is truly global, as our work does not require a face-to-face approach, allowing us to effectively serve clients worldwide.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      style={{
        // width: "100%",
        margin: "2rem auto",
        maxWidth: 1300,
        padding: "2rem",
      }}
    >
      <h2
        style={{
          color: "white",
          fontWeight: 400,
          fontSize: "50px",
          fontFamily: "'Codec pro', sans-serif",
        }}
      >
        FAQ
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <div
            onClick={() => toggleAccordion(index)}
            style={{
              cursor: "pointer",
              padding: "10px",
              borderRadius: "4px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              color: "white",
            }}
          >
            <IconButton
              style={{
                fontSize: "18px",
                background: "rgb(184, 0, 64)",
                color: "white",
                borderRadius: "30px",
                width: "27px",
                height: "27px",
                textAlign: "center",
              }}
            >
              {activeIndex === index ? "-" : "+"}
            </IconButton>
            <span
              style={{
                fontFamily: "'Codec pro', sans-serif",
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            >
              {faq.question}
            </span>
          </div>
          <div
            style={{
              maxHeight: activeIndex === index ? "400px" : "0",
              overflow: "hidden",
              transition: "all 0.5s ease-in-out",
              padding: activeIndex === index ? "1rem 3rem" : "0 3rem",
              color: "white",
              fontSize: "16px",
              borderRadius: activeIndex === index ? "4px" : "0",
              fontFamily: "'Codec pro', sans-serif",
              lineHeight: "1.5",
            }}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
