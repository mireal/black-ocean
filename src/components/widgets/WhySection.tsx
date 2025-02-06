import { Box, Divider, Grid2, Stack, Typography } from "@mui/material";
import AdvantageRectangle from "../entities/AdvantageRectangle";
import StyledButtonDark from "../shared/StyledButtonDark";
import { useTranslation } from "react-i18next";

function WhySection() {
  const { t } = useTranslation();

  return (
    <>
      {/* section padding */}
      <Box
        id={"why-section"}
        paddingY={{ mobileP: "60px", tablet: "80px", desktopS: "120px" }}
        paddingX={{
          mobileP: "10px",
          mobileL: "16px",
          tablet: "20px",
          desktopS: "40px",
        }}
      >
        {/* header */}
        <Box mb="20px">
          <Typography
            variant="h2"
            color="primary.main"
            fontSize={{
              mobileP: "32px",
              tablet: "44px",
              desktopS: "54px",
              desktopM: "64px",
            }}
            fontWeight="600"
            textTransform="uppercase"
            paddingBottom={{ mobileP: "15px", mobileL: "20px", desktopS: "0" }}
          >
            {t("why.title")}
          </Typography>
        </Box>

        {/* content */}
        <Grid2 container columns={3}>
          <Grid2
            offset={{ mobileP: 0, desktopS: 1 }}
            size={{ mobileP: 3, desktopS: 2 }}
          >
            <Box mb="40px">
              {/* big paragraph */}
              <Typography
                variant="body1"
                color="primary.light"
                fontSize={{ mobileP: "20px", tablet: "24px" }}
                fontWeight="600"
                textTransform="uppercase"
              >
                {t("why.subtitle")}
              </Typography>
            </Box>

            <Stack>
              <Box>
                <Divider />

                <Stack
                  direction={{ mobileP: "column", tablet: "row" }}
                  spacing={{ mobileP: "15px", tablet: "60px" }}
                  useFlexGap
                  padding="20px 10px"
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection={{ mobileP: "column", tablet: "row" }}
                    gap="40px"
                    flex={1}
                  >
                    <AdvantageRectangle filledRectangles={1} />

                    <Typography
                      variant="body1"
                      fontSize="18px"
                      fontWeight="600"
                      color="primary.main"
                    >
                      {t("why.blocks.first.title")}
                    </Typography>
                  </Box>

                  <Box flex={1}>
                    <Typography
                      variant="body1"
                      color="primary.contrastText"
                      fontSize="18px"
                      lineHeight="125%"
                    >
                      {t("why.blocks.first.description")}
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              {/* second */}
              <Box>
                <Divider />

                <Stack
                  direction={{ mobileP: "column", tablet: "row" }}
                  spacing={{ mobileP: "15px", tablet: "60px" }}
                  useFlexGap
                  padding="20px 10px"
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection={{ mobileP: "column", tablet: "row" }}
                    gap="40px"
                    flex={1}
                  >
                    <AdvantageRectangle filledRectangles={2} />

                    <Typography
                      variant="body1"
                      fontSize="18px"
                      fontWeight="600"
                      color="primary.main"
                    >
                      {t("why.blocks.second.title")}
                    </Typography>
                  </Box>

                  <Box flex={1}>
                    <Typography
                      variant="body1"
                      color="primary.contrastText"
                      fontSize="18px"
                      lineHeight="125%"
                    >
                      {t("why.blocks.second.description")}
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              {/* third */}
              <Box>
                <Divider />

                <Stack
                  direction={{ mobileP: "column", tablet: "row" }}
                  spacing={{ mobileP: "15px", tablet: "60px" }}
                  useFlexGap
                  padding="20px 10px"
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection={{ mobileP: "column", tablet: "row" }}
                    gap="40px"
                    flex={1}
                  >
                    <AdvantageRectangle filledRectangles={3} />

                    <Typography
                      variant="body1"
                      fontSize="18px"
                      fontWeight="600"
                      color="primary.main"
                    >
                      {t("why.blocks.third.title")}
                    </Typography>
                  </Box>

                  <Box flex={1}>
                    <Typography
                      variant="body1"
                      color="primary.contrastText"
                      fontSize="18px"
                      lineHeight="125%"
                    >
                      {t("why.blocks.third.description")}
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              {/* fourth */}
              <Box>
                <Divider />

                <Stack
                  direction={{ mobileP: "column", tablet: "row" }}
                  spacing={{ mobileP: "15px", tablet: "60px" }}
                  useFlexGap
                  padding="20px 10px"
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection={{ mobileP: "column", tablet: "row" }}
                    gap="40px"
                    flex={1}
                  >
                    <AdvantageRectangle filledRectangles={4} />

                    <Typography
                      variant="body1"
                      fontSize="18px"
                      fontWeight="600"
                      color="primary.main"
                    >
                      {t("why.blocks.fourth.title")}
                    </Typography>
                  </Box>

                  <Box flex={1}>
                    <Typography
                      variant="body1"
                      color="primary.contrastText"
                      fontSize="18px"
                      lineHeight="125%"
                    >
                      {t("why.blocks.fourth.description")}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <StyledButtonDark sx={{ mt: "30px" }}>
                {t("why.button")}
              </StyledButtonDark>
            </Stack>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}

export default WhySection;
