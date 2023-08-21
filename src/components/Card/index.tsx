import React from "react";

type CardProps = {
  gender?: string;
};

export const Card = ({ gender }: CardProps) => {
  const boy = require("../../assets/boy.png");
  const girl = require("../../assets/girl.png");
  const imageSource = gender === "female" ? girl : boy;

  return <img src={imageSource} alt="Gender" />;
};
