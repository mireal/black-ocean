import {
  Box,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import SquareOutlinedIcon from "@mui/icons-material/Square";
import { useTranslation } from "react-i18next";

function ServiceBlock({ nameKey }: { nameKey: string }) {
  const { t } = useTranslation();

  const content = t(`services.blocks.${nameKey}.content`, {
    returnObjects: true,
  }) as string[];

  return (
    <>
      <Box>
        <Box
          display="flex"
          flexDirection={{ mobileP: "column", tablet: "row-reverse" }}
          paddingTop="10px"
          paddingBottom="40px"
          gap={4}
        >
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            gap={{ mobileP: "15px", tablet: "25px" }}
          >
            <Typography
              variant="h3"
              color="primary.main"
              fontSize={{ mobileP: "26px", tablet: "34px" }}
              fontWeight={"600"}
              lineHeight={"110%"}
            >
              {t(`services.blocks.${nameKey}.title`)}
            </Typography>

            <Typography
              variant="body1"
              color="primary.light"
              fontSize={"16px"}
              fontWeight={"600"}
              lineHeight={"125%"}
            >
              {content.map((_, index) => (
                <ListItem key={index} disableGutters disablePadding>
                  <ListItemIcon
                    sx={{
                      minWidth: "30px",
                      color: "white",
                    }}
                  >
                    <SquareOutlinedIcon sx={{ width: "0.6em" }} />
                  </ListItemIcon>
                  <ListItemText>
                    {t(`services.blocks.${nameKey}.content.${index}`)}
                  </ListItemText>
                </ListItem>
              ))}
            </Typography>
          </Box>
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            gap={{ mobileP: "10px", tablet: "15px" }}
          >
            <Typography
              variant="body1"
              color="primary.contrastText"
              fontSize={"14px"}
              fontWeight={"600"}
              lineHeight={"125%"}
              width={{ mobileP: "100%", tablet: "40vw", desktopS: "25vw" }}
            >
              {t(`services.blocks.${nameKey}.description`)}
            </Typography>
          </Box>
        </Box>
        <Divider />
      </Box>
    </>
  );
}

function ServiceContent({ keys }: { keys: string[] }) {
  return (
    <>
      <Box display="flex" flexDirection="column">
        {keys.map((key) => (
          <ServiceBlock key={key} nameKey={key} />
        ))}
      </Box>
    </>
  );
}

export default ServiceContent;
