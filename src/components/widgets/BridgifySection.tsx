import { Box, Grid2, Typography } from '@mui/material'
import StyledButton from '../shared/StyledButton'
import SouthEastSharpIcon from '@mui/icons-material/SouthEastSharp'

function BridgifySection() {
  return (
    <>
      {/* section padding */}
      <Box id={'bridgify-section'}
        paddingY={{ mobileP: '60px', tablet: '80px', desktopS: '120px' }}
        paddingX={{ mobileP: '10px', mobileL: '16px', tablet: '20px', desktopS: '40px' }}
        sx={{
          backgroundImage: 'url("./src/assets/images/bridgify-bg.png")',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        {/* title */}
        <Typography
          variant="h2"
          color="primary.main"
          fontSize={{ mobileP: '32px', tablet: '44px', desktopS: '54px', desktopM: '64px' }}
          fontWeight="bold"
          textTransform="uppercase"
        >
          Bridgify: Simplify Your Online Business
        </Typography>

        {/* content header */}
        <Grid2 container columns={6} paddingTop="20px">
          <Grid2 offset={{ desktopS: 2 }}>
            <Typography
              variant="body1"
              color="primary.light"
              fontSize={{ mobileP: '20px', tablet: '24px' }}
              fontWeight="bold"
              textTransform="uppercase"
            >
              At Black Ocean, we not only deliver tailored web traffic and software solutions but
              also innovate with our proprietary tools. One such product is Bridgify – an advanced
              eCommerce solution designed to streamline online store management and boost business
              efficiency.
            </Typography>
          </Grid2>
        </Grid2>

        {/* content paragraph */}
        <Grid2 container columns={4}>
          <Grid2 offset={{ mobileP: 0, tablet: 1, desktopS: 2 }} pt="30px">
            <Typography
              variant="body1"
              color="primary.contrastText"
              fontSize="18px"
              lineHeight="125%"
            >
              <Box
                display="flex"
                flexDirection="column"
                gap="20px"
                mr={{ mobileP: 0, desktopS: '64px', desktopM: '184px', desktopL: '268px' }}
              >
                <Box>
                  Bridgify specializes in building and optimizing online stores on the Odoo
                  platform. It offers automation for up to 10 business tasks and modular
                  functionality to adapt to your specific needs.
                </Box>
                <Box mb="20px">
                  With tools like SEO, Google Analytics integration, and promo creation, Bridgify
                  helps businesses scale efficiently. Ongoing support and training make it your
                  trusted partner for seamless eCommerce success.
                </Box>

                <StyledButton endIcon={<SouthEastSharpIcon />}>DISCOVER BRIDGIFY</StyledButton>
              </Box>
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </>
  )
}

export default BridgifySection
