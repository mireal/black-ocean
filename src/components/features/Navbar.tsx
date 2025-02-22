import { Typography, Link, Grid2, List, ListItem } from "@mui/material";
import BurgerButtonMenu from "./BurgerButton";
import NavbarLogo from "../entities/NavbarLogo";
import { useTranslation } from "react-i18next";
import LanguageButton from "./LanguageButton";

function Navbar() {
  const { t } = useTranslation();

  return (
    <>
      <Grid2
        container
        wrap="nowrap"
        paddingTop={{ mobileP: 0, desktopS: "20px" }}
        height={{ mobileP: "82px", desktopS: "146px" }}
        width="100%"
      >
        {/* logo */}
        <Grid2
          size={{ mobileP: 6, desktopS: 4 }}
          alignSelf={{ mobileP: "center", desktopS: "start" }}
        >
          <NavbarLogo />
        </Grid2>

        {/* switch language */}
        <Grid2
          size={2}
          sx={{
            display: { mobileP: "none", desktopS: "block" },
          }}
        >
          <Typography variant="body1" fontSize={14} fontWeight={600}>
            <LanguageButton />
          </Typography>
        </Grid2>

        {/* nav links */}
        <Grid2
          size={3}
          sx={{
            display: { mobileP: "none", desktopS: "block" },
          }}
        >
          <List disablePadding>
            <Typography
              variant="h6"
              color="primary.main"
              textTransform="uppercase"
              fontSize="14px"
              fontWeight="600"
              sx={{
                "& a, & a:visited, & a:active": {
                  color: "inherit",
                },
              }}
            >
              <ListItem component={"a"} href="#about-section" disablePadding>
                {t("navbarLinks.about")}
              </ListItem>
              <ListItem component={"a"} href="#services-section" disablePadding>
                {t("navbarLinks.services")}
              </ListItem>
              <ListItem component={"a"} href="#bridgify-section" disablePadding>
                {t("navbarLinks.bridgify")}
              </ListItem>
              <ListItem component={"a"} href="#why-section" disablePadding>
                {t("navbarLinks.whyWe")}
              </ListItem>
            </Typography>
          </List>
        </Grid2>

        {/* phone */}
        <Grid2
          size={{ mobileP: 0, desktopS: 3 }}
          sx={{
            display: { mobileP: "none", desktopS: "flex" },
            justifyContent: "flex-end",
          }}
        >
          <Typography variant="h5" fontWeight="600" fontSize="18px">
            <Link
              component={"a"}
              href="tel:+420773635962"
              sx={{ textDecoration: "none" }}
            >
              (+420) 773 635 962
            </Link>
          </Typography>
        </Grid2>

        {/* burger button */}
        <Grid2
          size={6}
          sx={{
            display: { mobileP: "flex", desktopS: "none" },
            justifyContent: "flex-end",
          }}
          alignSelf="center"
        >
          {/* <BurgerIcon /> */}
          <BurgerButtonMenu />
        </Grid2>
      </Grid2>
    </>
  );
}

export default Navbar;
