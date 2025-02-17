import { useEffect, useState } from "react";
import { Grid2 } from "@mui/material";
import NumberCard from "../entities/NumberCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

function NumberCardsBlock({ keys }: { keys: string[] }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isDesktop ? (
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={40}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          speed={1500}
          modules={[Autoplay]}
        >
          {keys.map((key) => (
            <SwiperSlide
              style={{
                width: "376px",
              }}
              key={key}
            >
              <NumberCard keyName={key}></NumberCard>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Grid2
          container
          columns={{ mobileP: 1, mobileL: 2 }}
          sx={{
            overflow: "hidden",
            flexWrap: "wrap",
            scrollbarWidth: 0,
            zIndex: 2,
          }}
        >
          {keys.map((key) => (
            <Grid2 key={key} size={1}>
              <NumberCard keyName={key}></NumberCard>
            </Grid2>
          ))}
        </Grid2>
      )}
    </>
  );
}

export default NumberCardsBlock;
