import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import { Card } from "./Card";
import { categoryData } from "./category";
export const CategoryArea = () => {
  return (
    <div className="CategoryArea common_width">
      <div className="top_area">
        <h1>Featured Categories</h1>
        <nav>
          <li className="active">All</li>
          <li>Vegetables</li>
          <li>Fruits</li>
          <li>Coffe & teas</li>
          <li>Meat</li>
        </nav>
      </div>

      <Splide
        options={{
          padding: 0,
          perPage: 7,
          gap: 10,
          arrows: false,
          pagination: false,
          breakpoints: {
            1100: {
              perPage: 5,
            },
            650: {
              perPage: 3,
            },
            450: {
              perPage: 2,
            },
          },
        }}
      >
        {categoryData.map((EachData, key) => (
          <SplideSlide key={key}>
            <Card
              img={EachData.img}
              heading={EachData.title}
              para={EachData.item}
              bgColor={EachData.bgColor}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
