import { Box, Divider, Typography } from "@mui/material"

export interface NumberCardContent {
    number: string,
    title: string,
    paragraph: string
}

function NumberCard({ content }: { content: NumberCardContent }) {
    return (
        <>
            <Box pt='40px' pr={{mobileL:'20px', desktopS:'40px'}}>
                <Divider/>
                <Typography
                    variant="h2"
                    fontSize='64px'
                    fontWeight='bold'
                    color="primary.main"
                    textTransform="uppercase"
                    mb='20px'>
                        {content.number}
                </Typography>

                <Typography
                    variant="h3"
                    fontSize='22px'
                    fontWeight='bold'
                    color="primary.main"
                    textTransform="uppercase"
                    mb='40px'>
                    {content.title}
                </Typography>

                <Typography
                    variant="body1"
                    color="primary.contrastText"
                    fontSize="16px"
                    lineHeight="125%"
                >
                    {content.paragraph}
                </Typography>

            </Box>
        </>
    )
}

export default NumberCard