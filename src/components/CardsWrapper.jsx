import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { CardSplide } from "./CardSplide";
export const CardsWrapper = () => {
  return (
    <div className="splider_wrapper">
      <Splide
        className="CardsWrapperSplider"
        aria-label="My Favorite Images"
        options={{
          perPage: 2,
          gap: 20,
          arrows: false,
        }}
      >
        <SplideSlide>
          <CardSplide />
        </SplideSlide>
        <SplideSlide>
          <CardSplide />
        </SplideSlide>{" "}
        <SplideSlide>
          <CardSplide />
        </SplideSlide>{" "}
        <SplideSlide>
          <CardSplide />
        </SplideSlide>{" "}
        <SplideSlide>
          <CardSplide />
        </SplideSlide>
      </Splide>
    </div>
  );
};
