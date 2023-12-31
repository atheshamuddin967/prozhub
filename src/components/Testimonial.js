import React from "react";
import Marquee from "react-fast-marquee";
import TestimItem from "./TestimItem";
import review from "../data/Reviews";

function Testimonial() {
  return (
    <div className="container-fluid p">
      <div className="text-center">
        <div className="heading">
          <h2>Testimonial</h2>
        </div>
      </div>

      <Marquee>
        {review.map((item) => (
          <TestimItem item={item} />
        ))}
      </Marquee>
    </div>
  );
}

export default Testimonial;
