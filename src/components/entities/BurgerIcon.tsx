import { IconButton, SvgIcon } from "@mui/material";

const BurgerIcon = () => (
  <IconButton sx={{ padding: "0" }}>
    <SvgIcon>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M34 3H0V0H34V3Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M34 13H0V10H34V13Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M34 23H11V20H34V23Z"
          fill="white"
        />
      </svg>
    </SvgIcon>
  </IconButton>
);

export default BurgerIcon;
