import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Rating({ noOfStars = 5 }) {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  const onHoverState = (index) => {
    setHover(index);
  };

  const onClickState = (index) => {
    setRating(index);
  };

  const onMouseLeaveState = () => {
    setHover(rating);
  };

  return (
    <>
      <div className="flex justify-center align-middle text-4xl font-bold mt-9">
        Star Rating
      </div>
      <div className="flex justify-center align-middle mt-8">
        {[...Array(noOfStars)].map((_, i) => {
          i += 1;
          return (
            <FaStar
              key={i}
              size={50}
              color={i <= (hover || rating) ? "gold" : "grey"}
              onMouseEnter={() => onHoverState(i)}
              onClick={() => onClickState(i)}
              onMouseLeave={onMouseLeaveState}
            />
          );
        })}
      </div>
    </>
  );
}

export default Rating;
