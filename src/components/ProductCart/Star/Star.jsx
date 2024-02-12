import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

export const Star = ({ rating }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let numbers = index + 0.5;
    return (
      <span>
        {rating >= index + 1 ? (
          <IoIosStar className="star_icon" />
        ) : rating >= numbers ? (
          <IoIosStarHalf className="star_icon" />
        ) : (
          <IoIosStarOutline className="star_icon" />
        )}
      </span>
    );
  });

  return (
    <>
      <div>{ratingStar}</div>
    </>
  );
};
