declare module "react-slick" {
  import { Component, ReactNode } from "react";

  export interface SliderProps {
    children?: ReactNode;
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    nextArrow?: ReactNode;
    prevArrow?: ReactNode;
    [key: string];
  }

  export default class Slider extends Component<SliderProps> {}
}
