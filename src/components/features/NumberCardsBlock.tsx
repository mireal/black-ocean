import { Grid2 } from "@mui/material";
import NumberCard from "../entities/NumberCard";

function NumberCardsBlock({ keys }: { keys: string[] }) {
  return (
    <>
      <Grid2
        container
        columns={{ mobileP: 1, mobileL: 2, desktopS: 3 }}
        sx={{
          overflowX: { mobileP: "hidden", desktopS: "scroll" },
          overflowY: "hidden",
          flexWrap: { mobileP: "wrap", desktopS: "nowrap" },
          scrollbarWidth: 0,
          zIndex: 2,
        }}
      >
        {keys.map((key) => (
          <Grid2
            key={key}
            size={{ mobileP: 1, desktopS: "auto" }}
            width={{ desktopS: "376px" }}
          >
            <NumberCard keyName={key}></NumberCard>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}

export default NumberCardsBlock;
