import { Box, Divider, Typography } from '@mui/material'
import ServiceContent from '../features/ServiceContent'
import { ServiceBlockContent } from '../features/ServiceContent'
import StyledButton from '../shared/StyledButton'

function OurServices() {
  const blocks: ServiceBlockContent[] = [
    {
      title: 'iOS Apps',
      caption:
        'Black Ocean develops applications for macOS for any business need. Our experts can fulfill any of your whims.',
      content: [
        'Custom iOS applications tailored to your business needs.',
        'Tailored traffic solutions for your goals.',
        'Scalable solutions designed to adapt to market growth.'
      ]
    },
    {
      title: 'Android Apps',
      caption:
        'Our company creates Android apps for any business need. You will be satisfied with the result.',
      content: [
        'Android apps crafted for diverse business requirements.',
        'Intuitive interfaces optimized for user engagement.',
        'Seamless compatibility across Android devices.',
        'Regular updates and technical support to maintain app quality.'
      ]
    },
    {
      title: 'macOS',
      caption: 'We provide service creating macOS apps and technical support for macOS.',
      content: [
        'High-performance macOS app development.',
        'Native macOS feature integration.',
        'Comprehensive technical support tailored to your needs.',
        'Apps designed for scalability and future expansion.',
        'Fully customized solutions for your industry.'
      ]
    },
    {
      title: 'CRM',
      caption: 'Our specialists will build up the most effective CRM system for your business.',
      content: [
        'Customized CRM systems to optimize business processes.',
        'Automation tools to enhance customer engagement.',
        'Real-time reporting and analytics for data-driven decisions.',
        'Scalable and flexible solutions to grow with your business.'
      ]
    },
    {
      title: 'Analysis',
      caption:
        'Analyzing the digital business structure our team will find mistakes and opportunuties which will bring a profit.',
      content: [
        'Digital analysis to find growth areas.',
        'Insights to fix inefficiencies.',
        'Strategic recommendations backed by data.'
      ]
    },
    {
      title: 'Web-Traffic',
      caption: 'Black Ocean delivers effective web traffic using CPA, CPC, and CPL models.',
      content: [
        'Efficient web traffic via CPA, CPC, CPL.',
        'Targeted strategies to attract a solvent audience.',
        'Ongoing optimization to maximize conversions.',
        'Transparent reporting and analytics for campaign performance.',
        'Personalized traffic solutions to meet your business goals.'
      ]
    }
  ]

  return (
    <>
      <Box id={'services-section'}
        paddingY={{ mobileP: '60px', tablet: '80px', desktopS: '120px' }}
        paddingX={{ mobileP: '10px', mobileL: '16px', tablet: '20px', desktopS: '40px' }}
      >
        <Typography
          variant="h2"
          color="primary.main"
          fontSize={{ mobileP: '32px', tablet: '44px', desktopS: '54px', desktopM: '64px' }}
          mb={{ mobileP: '20px', tablet: '30px' }}
        >
          OUR SERVICES
        </Typography>
        <Divider />

        <ServiceContent blocks={blocks} />

        <Box display="flex" flexDirection="column" justifyContent="start" gap="20px">
          <Box height="100px" display="flex" justifyContent="center">
            <Divider orientation="vertical" sx={{ alignSelf: 'center' }} />
          </Box>
          <StyledButton
            variant="contained"
            sx={{
              paddingX: { mobileP: '72px', desktopS: '120px' },
              alignSelf: 'center',
              textWrap: 'nowrap'
            }}
          >
            Become a Client
          </StyledButton>
        </Box>
      </Box>
    </>
  )
}

export default OurServices
