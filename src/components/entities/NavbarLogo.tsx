import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NavbarLogo() {
  return (
    <>
      <Link component={RouterLink} to="/" target="_blank">
        <img
          src="../assets/icons/black_ocean_logo.svg"
          className="logo"
          alt="Black ocean logo"
        />
      </Link>
    </>
  );
}
