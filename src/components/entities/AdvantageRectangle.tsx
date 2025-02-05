import { Box, Typography } from '@mui/material'
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined'
import SquareIcon from '@mui/icons-material/Square'

function AdvantageRectangle({ filledRectangles }: { filledRectangles: number }) {
  const icons = []
  for (let i = 1; i <= 4; i++) {
    if (i <= filledRectangles) {
      icons.push(<SquareIcon sx={{ transform: 'scale(0.84)' }} />)
    } else {
      icons.push(<SquareOutlinedIcon sx={{ transform: 'scale(0.84)' }} />)
    }
  }

  return (
    <>
      <Typography
        variant="body1"
        sx={{
          color: 'primary.main',
          fontSize: '0'
        }}
      >
        <Box display="inline-flex" flexDirection="column" gap="5px">
          <Box display="inline-flex" gap="5px">
            {icons[0]}
            {icons[1]}
          </Box>
          <Box display="inline-flex" gap="5px">
            {icons[2]}
            {icons[3]}
          </Box>
        </Box>
      </Typography>
    </>
  )
}

export default AdvantageRectangle
