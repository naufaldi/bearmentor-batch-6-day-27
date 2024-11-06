import React from "react";
import Button from "./button";

interface CardProps {
  title: string;
  description: string;
  image: string;
}


function Card({ title, description, image }: CardProps) {
  // create example props in card

  console.log("card", title, description, image);

  return (
    <>
      <div>
        <h1>naufaldi</h1>
        <p>29</p>
        <button>click</button>
      </div>
      <div className="bg-pink p-4 rounded-md shadow-md h-[300px] w-[300px]">card</div>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>{image}</div>
      <Button text={title} />
    </>
  )
}

export default Card