import React from "react";

export const GridWrapper = () => {
  return (
    <section className="grid_container_area common_width">
      <div className="grid_inner_area">
        <div className="left_side order_now no_order">
          <button>Save time!</button>
          <h1>This guy in your inbox!</h1>
          <p>Want a vegeatable or fruit? We send you</p>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg"
          alt=""
        />
      </div>
      <div className="grid_inner_area">
        <img
          src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg"
          alt=""
        />
        <div className="left_side order_now no_order">
          <button>Save time!</button>
          <h1>This guy in your inbox!</h1>
          <p>Want a vegeatable or fruit? We send you</p>
        </div>
      </div>
      <div className="grid_inner_area">
        <div className="left_side order_now">
          <h1>Organic Food</h1>
          <p>More than 95% of our farms are organic</p>
          <button>
            Order Now
            <img src="./assets/img/li_arrow-right.svg" alt="" />
          </button>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_1280.jpg"
          alt=""
        />
      </div>
    </section>
  );
};
