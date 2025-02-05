import {
  Avatar,
  Box,
  Divider,
  Grid2,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import SquareOutlinedIcon from "@mui/icons-material/Square";

export interface TestimonialContent {
  author: {
    imageSrc: string;
    name: string;
    job: string;
  };
  about: string;
  testimonials: string[];
}

function TestimonialBlock({ content }: { content: TestimonialContent }) {
  const testimonials = content.testimonials.map((item, index) => (
    <ListItem key={index} disableGutters disablePadding>
      <ListItemIcon
        sx={{
          minWidth: "30px",
          color: "primary.light",
        }}
      >
        <SquareOutlinedIcon sx={{ width: "0.6em" }} />
      </ListItemIcon>

      <ListItemText>{item}</ListItemText>
    </ListItem>
  ));

  return (
    <>
      <Box>
        <Divider sx={{ mb: "15px" }} />
        {/* main container */}
        <Grid2
          container
          columns={{ mobileP: 1, desktopS: 2, desktopM: 3 }}
          flexDirection={{ mobileP: "column", desktopS: "row-reverse" }}
          spacing="40px"
          pb={{ mobileP: "40px", desktopS: "20px" }}
        >
          {/* author + about */}
          <Grid2 size={{ mobileP: 1, desktopM: 2 }}>
            <Stack gap="40px">
              {/* avatar + credentials + info */}
              <Stack direction="row" gap="20px">
                <Avatar
                  src={content.author.imageSrc}
                  alt={content.author.name}
                  variant="square"
                  sx={{
                    width: "80px",
                    height: "80px",
                  }}
                />

                <Stack justifyContent="center">
                  <Typography
                    variant="h6"
                    color="primary.main"
                    fontSize="18px"
                    fontWeight="bold"
                    lineHeight="120%"
                  >
                    {content.author.name}
                  </Typography>

                  <Typography
                    variant="h6"
                    color="primary.contrastText"
                    fontSize="14px"
                    fontWeight="bold"
                    lineHeight="130%"
                  >
                    {content.author.job}
                  </Typography>
                </Stack>
              </Stack>

              {/* about */}
              <Typography
                color="primary.contrastText"
                fontSize="24px"
                fontWeight="bold"
                lineHeight="130%"
              >
                {content.about}
              </Typography>
            </Stack>
          </Grid2>

          {/* testimonials */}
          <Grid2 size={1}>
            <Typography
              color="primary.light"
              fontSize="16px"
              fontWeight="bold"
              lineHeight="125%"
            >
              <List>{testimonials}</List>
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}

export default TestimonialBlock;
