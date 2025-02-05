import { Grid2 } from "@mui/material";
import { NumberCardContent } from "../entities/NumberCard";
import NumberCard from "../entities/NumberCard";
import { ReactElement } from "react";

function NumberCardsBlock({ content }: { content: NumberCardContent[] }) {
    const elements: ReactElement[] = content.map((item, index) => (
        <Grid2 key={index} size={{ mobileP: 1, desktopS: 'auto' }} width={{ desktopS: '376px' }}>
            <NumberCard content={item}></NumberCard>
        </Grid2>
    ))

    return (
        <>
            <Grid2 container
                columns={{ mobileP: 1, mobileL: 2, desktopS: 3 }}

                sx={{
                    overflowX: { mobileP: 'hidden', desktopS: 'scroll' },
                    overflowY: 'hidden',
                    flexWrap: { mobileP: 'wrap', desktopS: 'nowrap' },
                    scrollbarWidth:0,
                    zIndex:2
                }}
            >
                {elements}
            </Grid2>
        </>
    )
}

export default NumberCardsBlock