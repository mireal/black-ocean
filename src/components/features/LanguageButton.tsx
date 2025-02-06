import { Box, Button, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next';

const buttonStyles = {
    color:'primary.contrastText',
    fontSize:'inherit',
    padding: 0,
    margin: 0,
    minWidth: 0,
    '&:disabled': {
        color:'primary.main'
    }
}

export default function LanguageButton() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <Stack direction='row' alignItems='center' gap='13px'>
            <Button
                variant='text'
                disableElevation
                sx={buttonStyles}
                disabled={(i18n.language === 'en')}
                onClick={() => changeLanguage('en')}
            >
                ENG
            </Button>
            <Box display='span' color='primary.contrastText'>
                /
            </Box>
            <Button
                variant='text'
                disableElevation
                disabled={(i18n.language === 'cs')}
                
                sx={buttonStyles}
                onClick={() => changeLanguage('cs')}
            >
                CS
            </Button>
        </Stack>
    )
}
