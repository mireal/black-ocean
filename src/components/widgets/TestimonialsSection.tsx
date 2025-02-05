import { Box, Typography } from "@mui/material";
import TestimonialsContent from "../features/TestimonialsContent";
import { TestimonialContent } from "../entities/TestimonialBlock";

function TestimonialsSection() {
  const content: TestimonialContent[] = [
    {
      author: {
        imageSrc: "./assets/images/avatars/1.png",
        name: "Jan Novák",
        job: "CEO",
      },
      about:
        "Working with Black Ocean has been transformative for our business. Their tailored software solutions and expert traffic management have significantly increased our online visibility and revenue.",
      testimonials: [
        "Developed a custom CRM system",
        "Boosted web traffic and visibility",
        "Provided technical support",
      ],
    },
    {
      author: {
        imageSrc: "./assets/images/avatars/2.png",
        name: "Michael Johnson",
        job: "Founder",
      },
      about:
        "Their innovative approach to software development and web traffic optimization has made a noticeable difference in our operations. Black Ocean is truly a reliable partner for growth.",
      testimonials: [
        "Created business automation software",
        "Ran CPA and CPC campaigns",
        "Scaled digital operations",
      ],
    },
    {
      author: {
        imageSrc: "./assets/images/avatars/3.png",
        name: "Eva Kovářová",
        job: "Marketing Director",
      },
      about:
        "Black Ocean impressed us with their professionalism and attention to detail. They quickly understood our needs and delivered solutions that exceeded all our expectations.",
      testimonials: [
        "Analyzed the digital structure",
        "Enhanced SEO performance",
        "Delivered optimized workflows",
      ],
    },
    {
      author: {
        imageSrc: "./assets/images/avatars/4.png",
        name: "Daniel White",
        job: "COO",
      },
      about:
        "I was amazed by Black Ocean’s ability to handle complex challenges with ease. Their expertise and dedication helped us achieve our goals faster than anticipated.",
      testimonials: [
        "Designed scalable software.",
        "Optimized digital campaigns.",
        "Provided ongoing support.",
      ],
    },
    {
      author: {
        imageSrc: "./assets/images/avatars/5.png",
        name: "Sophia Brown",
        job: "Ecommerce Manager",
      },
      about:
        "Black Ocean’s team delivered exceptional results for our online store. Their strategies for web traffic optimization increased our conversions by 40% in just three months.",
      testimonials: [
        "Improved web traffic strategies.",
        "Boosted conversions by 40%.",
        "Enhanced website performance.",
      ],
    },
    {
      author: {
        imageSrc: "./assets/images/avatars/6.png",
        name: "Emma Wilson",
        job: "Project Manager",
      },
      about:
        "From consultation to execution, Black Ocean delivered with precision and creativity. Their traffic solutions brought us measurable results, and their team was a pleasure to work with.",
      testimonials: [
        "Designed scalable software.",
        "Optimized digital campaigns.",
        "Provided ongoing support.",
      ],
    },
  ];

  return (
    <>
      <Box
        paddingY={{ mobileP: "60px", tablet: "80px", desktopS: "120px" }}
        paddingX={{
          mobileP: "10px",
          mobileL: "16px",
          tablet: "20px",
          desktopS: "40px",
        }}
      >
        <Typography
          variant="h2"
          color="primary.main"
          fontSize={{
            mobileP: "32px",
            tablet: "44px",
            desktopS: "54px",
            desktopM: "64px",
          }}
          fontWeight="bold"
          textTransform="uppercase"
          mb="40px"
        >
          TESTIMONIALS
        </Typography>

        <TestimonialsContent content={content} />
      </Box>
    </>
  );
}

export default TestimonialsSection;
