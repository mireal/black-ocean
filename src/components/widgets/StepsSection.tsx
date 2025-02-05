import { Box, Grid2, Typography } from "@mui/material";
import StepCard from "../entities/StepCard";

function StepsSection() {
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
        sx={{
          backgroundImage: 'url("./assets/images/hero-bg.png")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
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
          paddingBottom={{ mobileP: "15px", mobileL: "20px", desktopS: "0" }}
        >
          THIS IS EXACTLY HOW IT WORKS
        </Typography>

        <Grid2 container columns={{ mobileP: 1, tablet: 3 }} rowGap="40px">
          {/* big paragraph */}
          <Grid2
            offset={{ mobileP: 0, desktopS: 1 }}
            size={{ mobileP: 1, tablet: 3, desktopS: 2 }}
          >
            <Typography
              variant="body1"
              color="primary.light"
              fontSize={{ mobileP: "20px", tablet: "24px" }}
              fontWeight="bold"
              textTransform="uppercase"
            >
              Over the long experience of working with clients, we have built
              our own scheme of work. Our cooperation scheme is extremely
              effective. We are able to provide you with the highest quality
              service and products.
            </Typography>
          </Grid2>
          <Grid2 size={1}>
            <StepCard
              content={{
                title: "//01",
                subtitle: "Your Request",
                paragraph: `If you are interested, you can contact us to discuss the tasks of your business.
                                    Before applying, you need to draw up a clear request.`,
              }}
            />
          </Grid2>

          <Grid2 size={1}>
            <StepCard
              content={{
                title: "//02",
                subtitle: "Custom Solution",
                paragraph: `At the second stage, our team processes your request and selects the best solutions for you. 
                                    With future results guaranteed.`,
              }}
            />
          </Grid2>

          <Grid2 size={1}>
            <StepCard
              content={{
                title: "//03",
                subtitle: "Launch Agreement",
                paragraph: `Client and Black Ocean agree the date and time of start usage of traffic and software for business.`,
              }}
            />
          </Grid2>
        </Grid2>

        {/* image container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { mobileP: "column", mobileL: "row" },
            justifyContent: { mobileP: "flex-start", mobileL: "space-between" },
            gap: "10px",
            mt: { mobileP: "60px", tablet: "80px" },
          }}
        >
          {/* small image */}
          <Box
            sx={{
              width: { mobileP: "50%", mobileL: "35%", tablet: "25%" },
            }}
          >
            <img
              src="./assets/images/steps-small.png"
              style={{ width: "100%" }}
            />
          </Box>

          {/* big image */}
          <Box
            sx={{
              width: { mobileP: "100%", mobileL: "50%" },
            }}
          >
            <img
              src="./assets/images/steps-big.png"
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default StepsSection;
