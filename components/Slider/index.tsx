"use client";

import { useRef } from "react";
import Slider from "react-slick";

import { SliderItem } from "./Item";
import { SliderProps } from "./component.props";
import styles from './styles.module.scss'

export const MainSlider = ({ sliderSlides }: SliderProps): JSX.Element => {
    const slider = useRef<Slider>(null);

    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: "custom-dots",
        customPaging: function (i: number) {
            return (
                <div
                    onClick={() =>
                        slider.current && slider.current.slickGoTo(i)
                    }
                >
                    {i + 1}
                </div>
            );
        },
    };

    return (
        <section className={styles.main}>
            <Slider ref={slider} {...settings}>
                {sliderSlides.map((slide, index) => (
                    <SliderItem key={index} {...slide} />
                ))}
            </Slider>
        </section>
    );
};
