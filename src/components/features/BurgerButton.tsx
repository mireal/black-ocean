import React from "react";
import BurgerIcon from "../entities/BurgerIcon";
import {
  Grid2,
  IconButton,
  Link,
  List,
  ListItem,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import NavbarLogo from "../entities/NavbarLogo";
import { useTranslation } from "react-i18next";
import LanguageButton from "./LanguageButton";

function BurgerButtonMenu() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { t } = useTranslation();

  return (
    <>
      <IconButton onClick={handleOpen}>
        <BurgerIcon />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        slotProps={{
          backdrop: {
            style: {
              backgroundColor: "#070B30",
            },
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "primary",
          }}
        >
          {/* navbar */}
          <Grid2
            container
            columns={2}
            justifyContent="space-between"
            padding="20px"
          >
            <Grid2>
              <NavbarLogo />
            </Grid2>

            <Grid2>
              <IconButton onClick={handleClose}>
                <CloseIcon color="primary" />
              </IconButton>
            </Grid2>
          </Grid2>

          <Stack
            mt="10vh"
            justifyContent="center"
            alignItems="center"
            gap={{ mobileP: "60px", mobileL: "100px" }}
          >
            {/* navigation links */}
            <List>
              <Typography
                variant="h4"
                color="primary.main"
                fontSize={{ mobileP: "34px", mobileL: "44px" }}
                sx={{
                  "& a, & a:visited, & a:active": {
                    color: "inherit",
                    justifyContent: "center",
                  },
                }}
              >
                <ListItem
                  component={"a"}
                  href="#about-section"
                  onClick={handleClose}
                >
                  {t('navbarLinks.about')}
                </ListItem>
                <ListItem component={"a"} href="#" onClick={handleClose}>
                  {t('navbarLinks.products')}
                </ListItem>
                <ListItem
                  component={"a"}
                  href="#why-section"
                  onClick={handleClose}
                >
                  {t('navbarLinks.whyWe')}
                </ListItem>
                <ListItem
                  component={"a"}
                  href="#contact-form"
                  onClick={handleClose}
                >
                  {t('navbarLinks.contacts')}
                </ListItem>
              </Typography>
            </List>

            {/* phone */}
            <Typography
              variant="h5"
              color="primary.main"
              fontSize={{ mobileP: "20px", mobileL: "28px" }}
            >
              <Link
                component={"a"}
                href="tel:+420773635962"
                sx={{ textDecoration: "none" }}
              >
                (+420) 773 635 962
              </Link>
            </Typography>

            {/* language switch */}
            <Typography
              variant="body1"
              fontSize={{ mobileP: "28px", mobileL: "34px" }}
              fontWeight={500}
            >
              <LanguageButton/>
            </Typography>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}

export default BurgerButtonMenu;
