"use client";

import { useState } from "react";

import styles from "./styles.module.scss";
import { faq } from "./faq";

export const Faq = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleFaqClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.faqWrapper}>
            <div className={styles.leftCol}>
                {faq.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.question} ${
                            index === activeIndex ? styles.active : ""
                        }`}
                        onClick={() => handleFaqClick(index)}
                    >
                        <h4>{item.question}</h4>
                    </div>
                ))}
            </div>
            <div className={styles.rightCol}>
                <h3>{faq[activeIndex].question}</h3>
                <p>{faq[activeIndex].answer}</p>
            </div>
        </div>
    );
};
