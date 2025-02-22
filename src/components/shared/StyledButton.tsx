import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `1px solid black`,
  borderRadius: "0",
  color: "#010418",
  padding: "18px 50px",

  fontSize: "18px",
  fontWeight: "600",

  "&:hover": {
    backgroundColor: "#010418",
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
  },
})) as typeof Button;

export default StyledButton;
