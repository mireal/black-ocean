import { Box, Grid2, Typography } from "@mui/material";
import { NumberCardContent } from "../entities/NumberCard";
import NumberCardsBlock from "../features/NumberCardsBlock";

function NumbersSection() {
  const content: NumberCardContent[] = [
    {
      number: "50+",
      title: "Projects Delivered",
      paragraph:
        "Proven expertise across diverse industries, ensuring exceptional outcomes.",
    },
    {
      number: "99%",
      title: "Success Rate",
      paragraph:
        "Trusted by clients worldwide for reliable and effective solution",
    },
    {
      number: "30+",
      title: "Traffic & Software Projects",
      paragraph:
        "Fueling creativity and dedication behind every successful project.",
    },
    {
      number: "20+",
      title: "Specialists",
      paragraph:
        "A highly skilled team dedicated to solving complex challenges.",
    },
    {
      number: "5",
      title: "Ongoing Projects",
      paragraph:
        "Continuously driving innovation and delivering value to our clients.",
    },
    {
      number: "1000+",
      title: "Cups of Coffe",
      paragraph:
        "Fueling creativity and dedication behind every successful project.",
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
        {/* section title */}
        <Typography
          variant="h2"
          color="primary.main"
          fontSize={{
            mobileP: "32px",
            tablet: "44px",
            desktopS: "54px",
            desktopM: "64px",
          }}
          textTransform="uppercase"
          mb={{ mobileP: "20px", tablet: "30px" }}
          display={{ mobileP: "block", desktopL: "flex" }}
          justifyContent="space-between"
        >
          <Box
            sx={{
              textAlign: "left",
              display: "inline-block",
            }}
          >
            Trust the numbers
          </Box>
          <Box
            display={{ mobileP: "none", mobileL: "inline-block" }}
            marginX={{ mobileP: "30px", desktopL: 0 }}
          >
            /
          </Box>
          <Box
            sx={{
              display: { mobileP: "block", desktopL: "inline-block" },
              textAlign: { mobileP: "left", mobileL: "right" },
            }}
          >
            Trust Black Ocean
          </Box>
        </Typography>

        <Grid2 container columns={3}>
          <Grid2
            offset={{ mobileP: 0, desktopS: 1 }}
            size={{ mobileP: 3, desktopS: 2 }}
          >
            <Typography
              variant="body1"
              color="primary.light"
              fontSize={{ mobileP: "20px", tablet: "24px" }}
              fontWeight="600"
              textTransform="uppercase"
            >
              When you work with us, you’re choosing a team that values
              excellence in every detail, from project completion to ongoing
              support.
            </Typography>
          </Grid2>
        </Grid2>

        <NumberCardsBlock content={content} />
      </Box>
    </>
  );
}

export default NumbersSection;
