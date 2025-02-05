import { Stack } from "@mui/material";
import TestimonialBlock, {
  TestimonialContent,
} from "../entities/TestimonialBlock";
import StyledButtonDark from "../shared/StyledButtonDark";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { useState } from "react";

function TestimonialsContent({ content }: { content: TestimonialContent[] }) {
  const [open, setOpen] = useState(true);
  const [buttonLabel, setButtonLabel] = useState("Show More");
  const [buttonIcon, setButtonIcon] = useState(<SouthEastIcon />);
  const [limit, setLimit] = useState(3);

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
    const buttonLabelChoice = open ? "Show Less" : "Show More";
    setButtonLabel(buttonLabelChoice);

    const buttonIconChoice = open ? <NorthEastIcon /> : <SouthEastIcon />;
    setButtonIcon(buttonIconChoice);

    const limitChoice = open ? content.length : 3;
    setLimit(limitChoice);
  };

  const testimonialBlocks = content
    .slice(0, limit)
    .map((item, index) => <TestimonialBlock content={item} key={index} />);

  return (
    <>
      <Stack direction="column">{testimonialBlocks}</Stack>

      <StyledButtonDark
        endIcon={buttonIcon}
        onClick={handleClick}
        sx={{ width: "100%" }}
      >
        {buttonLabel}
      </StyledButtonDark>
    </>
  );
}

export default TestimonialsContent;
