import { Typography, Link, Grid2, List, ListItem } from "@mui/material";
import BurgerButtonMenu from "./BurgerButton";
import NavbarLogo from "../entities/NavbarLogo";
function Navbar() {
  return (
    <>
      <Grid2
        container
        wrap="nowrap"
        paddingX={{ desktopS: 2 }}
        paddingTop="20px"
      >
        <Grid2
          size={{ mobileP: 6, desktopS: 3 }}
          alignSelf={{ mobileP: "center", desktopS: "start" }}
        >
          <NavbarLogo />
        </Grid2>

        {/* switch language */}
        <Grid2
          size={3}
          sx={{ display: { mobileP: "none", desktopS: "block" } }}
        >
          <Typography
            variant="body1"
            color="primary"
            fontSize={14}
            fontWeight={500}
          >
            EN / CS
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
              sx={{
                "& a, & a:visited, & a:active": {
                  color: "inherit",
                },
              }}
            >
              <ListItem component={"a"} href="#about-section" disablePadding>
                ABOUT
              </ListItem>
              <ListItem component={"a"} href="#services-section" disablePadding>
                SERVICES
              </ListItem>
              <ListItem component={"a"} href="#bridgify-section" disablePadding>
                BRIDGIFY
              </ListItem>
              <ListItem component={"a"} href="#why-section" disablePadding>
                WHY WE
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
          <Typography variant="h5">
            <Link component={"a"} sx={{ textDecoration: "none" }}>
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
