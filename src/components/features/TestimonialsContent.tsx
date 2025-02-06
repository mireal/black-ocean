import { Stack } from "@mui/material";
import TestimonialBlock from "../entities/TestimonialBlock";
import StyledButtonDark from "../shared/StyledButtonDark";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function TestimonialsContent({ keys }: { keys: string[] }) {
  const { t } = useTranslation();

  const [open, setOpen] = useState(true);
  const [buttonLabel, setButtonLabel] = useState(t('testimonials.button more'));
  const [buttonIcon, setButtonIcon] = useState(<SouthEastIcon />);
  const [limit, setLimit] = useState(3);

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
    const buttonLabelChoice = open ? t('testimonials.button less') : t('testimonials.button more');
    setButtonLabel(buttonLabelChoice);

    const buttonIconChoice = open ? <NorthEastIcon /> : <SouthEastIcon />;
    setButtonIcon(buttonIconChoice);

    const limitChoice = open ? keys.length : 3;
    setLimit(limitChoice);
  };

  const testimonialBlocks = keys
    .slice(0, limit)
    .map((key) => <TestimonialBlock keyName={key} key={key} />);

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
