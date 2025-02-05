import { Button, styled } from '@mui/material'

const StyledButtonDark = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: `1px solid white`,
  borderRadius: '0',
  color: 'white',
  padding: '18px 50px',

  fontSize: '18px',
  fontWeight: 'bold',

  '&:hover': {
    backgroundColor: 'white',
    border: `1px solid white`,
    color: 'black'
  }
})) as typeof Button

export default StyledButtonDark
