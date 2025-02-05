import { ReactElement } from 'react'
import { Box, Divider, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import SquareOutlinedIcon from '@mui/icons-material/Square'

interface ServiceBlockContent {
  title: string
  caption: string
  content: string[]
}

function ServiceBlock({ blockContent }: { blockContent: ServiceBlockContent }) {
  const elements: ReactElement[] = []

  blockContent.content.forEach((text, index) => {
    elements.push(
      <ListItem key={index} disableGutters disablePadding>
        <ListItemIcon
          sx={{
            minWidth: '30px',
            color: 'white'
          }}
        >
          <SquareOutlinedIcon sx={{ width: '0.6em' }} />
        </ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItem>
    )
  })

  return (
    <>
      <Box>
        <Box
          display="flex"
          flexDirection={{ mobileP: 'column', tablet: 'row-reverse' }}
          paddingTop="10px"
          paddingBottom="40px"
          gap={4}
        >
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            gap={{ mobileP: '15px', tablet: '25px' }}
          >
            <Typography
              variant="h3"
              color="primary.main"
              fontSize={{ mobileP: '26px', tablet: '34px' }}
              fontWeight={'600'}
              lineHeight={'110%'}
            >
              {blockContent.title}
            </Typography>

            <Typography
              variant="body1"
              color="primary.light"
              fontSize={'16px'}
              fontWeight={'600'}
              lineHeight={'125%'}
            >
              {elements}
            </Typography>
          </Box>
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            gap={{ mobileP: '10px', tablet: '15px' }}
          >
            <Typography
              variant="body1"
              color="primary.contrastText"
              fontSize={'14px'}
              fontWeight={'600'}
              lineHeight={'125%'}
              width={{ mobileP: '100%', tablet: '40vw', desktopS: '25vw' }}
            >
              {blockContent.caption}
            </Typography>
          </Box>
        </Box>
        <Divider />
      </Box>
    </>
  )
}

function ServiceContent({ blocks }: { blocks: ServiceBlockContent[] }) {
  const elements: ReactElement[] = []

  for (const block of blocks) {
    elements.push(<ServiceBlock blockContent={block} />)
  }
  return (
    <>
      <Box display="flex" flexDirection="column">
        {elements}
      </Box>
    </>
  )
}

export type { ServiceBlockContent }
export default ServiceContent
