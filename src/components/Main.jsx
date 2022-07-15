import React from "react";

export const Main = () => {
  return (
    <main>
      <div className="main_content common_width">
        <div className="presentation">
          <h1>
            Instafarm is helping people to live the healthiest, and have the
            best diet
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            laudantium, inventore hic molestiae quia voluptatibus provident
            voluptas.
          </p>
          <div className="input_wrapper">
            <input type="text" placeholder="Enter your email address" />
            <button>subscribe</button>
          </div>
        </div>
      </div>
    </main>
  );
};
