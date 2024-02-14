"use client";

import { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import { FaqProps } from "./module.props";

export const Faq = ({ faq }: FaqProps) => {
    const [activeFaqIndex, setActiveFaqIndex] = useState<number>(0);
    const [isActiveClass, setIsActiveClass] = useState<boolean>(false);

    const handleFaqClick = (index: number) => {
        setActiveFaqIndex(index);
    };

    useEffect(() => {
        setIsActiveClass(true);

        const timeoutId = setTimeout(() => {
            setIsActiveClass(false);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [activeFaqIndex]);

    return (
        <div className={styles.faqWrapper}>
            <div className={styles.leftCol}>
                {faq.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.question} ${
                            index === activeFaqIndex ? styles.active : ""
                        }`}
                        onClick={() => handleFaqClick(index)}
                    >
                        <h4>{item.question}</h4>
                    </div>
                ))}
            </div>
            <div className={styles.rightCol}>
                <div
                    className={`${styles.answerWrapper} ${
                        isActiveClass ? styles.answerWrapperActive : ""
                    }`}
                >
                    <h3>{faq[activeFaqIndex].question}</h3>
                    <p>{faq[activeFaqIndex].answer}</p>
                </div>
            </div>
        </div>
    );
};
