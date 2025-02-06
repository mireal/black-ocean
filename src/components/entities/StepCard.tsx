import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function StepCard({ keyName }: { keyName: string }) {
  const { t } = useTranslation();

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap={{ mobileP: "40px", tablet: "60px" }}
        borderLeft="1px solid rgba(255, 255, 255, 0.2)"
        padding="15px"
      >
        <Typography
          variant="h3"
          color="primary.main"
          fontSize="44px"
          fontWeight="600"
          textTransform="uppercase"
        >
          {t(`steps.cards.${keyName}.id`)}
        </Typography>

        <Box display="flex" flexDirection="column" gap="20px">
          <Typography
            variant="h4"
            color="primary.main"
            fontSize="22px"
            fontWeight="600"
            lineHeight="120%"
          >
            {t(`steps.cards.${keyName}.title`)}
          </Typography>

          <Typography
            variant="body1"
            color="primary.contrastText"
            fontSize="16px"
            lineHeight="125%"
          >
            {t(`steps.cards.${keyName}.description`)}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default StepCard;
