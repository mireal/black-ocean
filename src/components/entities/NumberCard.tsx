import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function NumberCard({ keyName }: { keyName: string }) {
  const { t } = useTranslation();

  return (
    <>
      <Box pt="40px" pr={{ mobileL: "20px", desktopS: "40px" }}>
        <Divider />
        <Typography
          variant="h2"
          fontSize="64px"
          fontWeight="600"
          color="primary.main"
          textTransform="uppercase"
          mb="20px"
        >
          {t(`numbers.blocks.${keyName}.numbers`)}
        </Typography>

        <Typography
          variant="h3"
          fontSize="22px"
          fontWeight="600"
          color="primary.main"
          textTransform="uppercase"
          mb="40px"
        >
          {t(`numbers.blocks.${keyName}.title`)}
        </Typography>

        <Typography
          variant="body1"
          color="primary.contrastText"
          fontSize="16px"
          lineHeight="125%"
        >
          {t(`numbers.blocks.${keyName}.description`)}
        </Typography>
      </Box>
    </>
  );
}

export default NumberCard;
