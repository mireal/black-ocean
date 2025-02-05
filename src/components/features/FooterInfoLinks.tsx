import { Box, Link, Stack, styled, Typography } from '@mui/material'

const FooterLink = styled(Link)(({ theme }) => ({
    margin: 0,
    color: 'inherit',
    '&:hover': {
        color: theme.palette.primary.contrastText
    }
})) as typeof Link

export default function FooterInfoLinks() {
    return (
        <>
            <Box>
                <Typography variant='h5'
                    color='primary.dark'
                    fontSize='16px'
                    fontWeight='bold'
                    noWrap>

                    <Stack
                        direction={{ mobileP: 'column-reverse', desktopS: 'row' }}
                        justifyContent='flex-start'
                        spacing='20px'
                    >
                        <Box flex='grow'> Black Ocean s. r. o. All rights reserved. </Box>

                        <Stack

                            direction={{ mobileP: 'column', tablet: 'row' }}
                            justifyContent='space-between'
                            flex='auto'
                        >
                            <Box display={{ mobileP: 'none', desktopS: 'block' }} />

                            <FooterLink underline='none' href='/policies/cookie'> Cookie Policy </FooterLink>
                            <FooterLink underline='none' href='/policies/privacy'> Privacy Policy </FooterLink>
                            <FooterLink underline='none' href='/policies/risk-management'> Risk Management Policy </FooterLink>
                            <FooterLink underline='none' href='/terms-and-conditions'> Terms and Conditions </FooterLink>
                        </Stack>
                    </Stack>
                </Typography>
            </Box>
        </>
    )
}
