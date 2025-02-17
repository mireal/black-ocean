import { Box, Divider, Stack, Typography } from "@mui/material";
import AdvantageRectangle from "../entities/AdvantageRectangle";
import { useTranslation } from "react-i18next";

export default function WhyBlock({
  keyName,
  rectangles,
}: {
  keyName: string;
  rectangles: number;
}) {
  const { t } = useTranslation();

  return (
    <>
      <Box width="100%">
        <Divider />

        <Stack
          direction={{ mobileP: "column", tablet: "row" }}
          padding="20px 10px"
          justifyContent={{ mobileP: "flex-start", tablet: "space-between" }}
          spacing={{
            mobileP: "40px",
            tablet: "130px",
            desktopS: "100px",
            desktopM: "130px",
            desktopL: "158px",
          }}
        >
          <AdvantageRectangle filledRectangles={rectangles} />

          <Stack
            direction={{ mobileP: "column", tablet: "row" }}
            spacing={{
              mobileP: "15px",
              tablet: "60px",
              desktopS: "30px",
              desktopM: "60px",
            }}
          >
            <Box
              width={{
                mobileP: "180px",
                desktopS: "150px",
                desktopM: "180px",
                desktopL: "208px",
              }}
              flexShrink={0}
            >
              <Typography
                variant="body1"
                fontSize="18px"
                fontWeight="600"
                color="primary.main"
              >
                {t(`why.blocks.${keyName}.title`)}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              color="primary.contrastText"
              fontSize="18px"
              fontWeight="600"
              lineHeight="125%"
            >
              {t(`why.blocks.${keyName}.description`)}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
