import Navbar from '../features/Navbar'
import HeroContent from '../features/HeroContent'
import { Box } from '@mui/material'

function HeroSection() {
  return (
    <>
      <Box
        height={'100vh'}
        width={'100vw'}
        paddingX={{ mobileP: '10px', mobileL: '16px', tablet: '20px', desktopS: '40px' }}
        sx={{
          backgroundImage: 'url("./src/assets/images/hero-bg.png")',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <Navbar />
        <HeroContent />
      </Box>
    </>
  )
}

export default HeroSection
