import { Box, Grid2, Stack, Typography } from "@mui/material";
import NumberCardsBlock from "../features/NumberCardsBlock";
import { useTranslation } from "react-i18next";

function NumbersSection() {
  const { t } = useTranslation();
  const keys = ["first", "second", "third", "fourth", "fifth", "sixth"];

  return (
    <Stack alignItems="center">
      <Box
        maxWidth="1440px"
        width="100%"
        paddingY={{ mobileP: "60px", tablet: "80px", desktopS: "120px" }}
        paddingX={{
          mobileP: "10px",
          mobileL: "16px",
          tablet: "20px",
          desktopS: "36px",
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
          whiteSpace={{ mobileP: "break-spaces", tablet: "nowrap" }}
          letterSpacing="-2px"
          lineHeight="110%"
          noWrap
        >
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            mb={{ mobileP: "20px", tablet: "30px" }}
          >
            <Box
              display={{ mobileP: "hidden", mobileL: "inline" }}
              flexBasis="auto"
            >
              {t("numbers.title 1")}
            </Box>
            <Box
              paddingX="30px"
              display={{ mobileP: "none", mobileL: "block" }}
              flexBasis="auto"
            >
              /
            </Box>
            <Box flex="auto" textAlign={{ mobileP: "left", mobileL: "right" }}>
              {t("numbers.title 2")}
            </Box>
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
              {t("numbers.subtitle")}
            </Typography>
          </Grid2>
        </Grid2>

        <NumberCardsBlock keys={keys} />
      </Box>
    </Stack>
  );
}

export default NumbersSection;
