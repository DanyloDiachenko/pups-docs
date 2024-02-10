"use client";

import { FormEvent, useState } from "react";

import {
    IOption,
    IOptionsObject,
    initialOptions,
    initialPupsOptions,
} from "./options";
import styles from "./styles.module.scss";
import { dictionaries } from "../dictionaries";

interface ISelectedOptions {
    capacity: string;
    inverter: string;
    charger: string;
    cigarette: string;
    usb: string;
    typec: string;
    rozette: string;
    armor: string;
}

interface PageProps {
    params: {
        lang: string;
    };
}

const Page = ({ params }: PageProps) => {
    const language = params.lang;
    const strings = dictionaries[language as keyof typeof dictionaries];

    const [selectedOptions, setSelectedOptions] = useState<ISelectedOptions>({
        capacity: initialOptions.capacity[0].value,
        inverter: initialOptions.inverter[0].value,
        charger: initialOptions.charger[0].value,
        cigarette: initialOptions.cigarette[0].value,
        usb: initialOptions.usb[0].value,
        typec: initialOptions.typec[0].value,
        rozette: initialOptions.rozette[0].value,
        armor: initialOptions.armor[0].value,
    });
    const [selectedPupsOption, setSelectedPupsOption] = useState<IOption>(
        initialPupsOptions[0],
    );

    const handleOptionChange = (
        optionType: keyof ISelectedOptions,
        value: string,
    ) => {
        setSelectedOptions({
            ...selectedOptions,
            [optionType]: value,
        });
    };

    const calculateTotalPrice = () => {
        let total = 0;

        Object.keys(selectedOptions).forEach((optionKey) => {
            const key = optionKey as keyof IOptionsObject &
                keyof ISelectedOptions;

            const selectedOption = initialOptions[key].find(
                (option: IOption) => option.value === selectedOptions[key],
            );

            if (selectedOption) {
                total += selectedOption.price;
            }
        });

        return total.toFixed(2);
    };

    const submitCalculator = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const submitReadyPups = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <>
            <h1>{strings.buyPups.title}</h1>
            <div className={styles.content}>
                <div className={styles.calculator}>
                    <h2>{strings.buyPups.constructor.title}</h2>
                    <form onSubmit={submitCalculator}>
                        <>
                            <div className={styles.title}>
                                {strings.buyPups.constructor.capacity}
                            </div>
                            {initialOptions.capacity.map((option) => (
                                <label
                                    key={option.id}
                                    className={styles.variant}
                                    htmlFor={option.id}
                                >
                                    <input
                                        type="radio"
                                        id={option.id}
                                        name="capacity"
                                        value={option.value}
                                        checked={
                                            selectedOptions.capacity ===
                                            option.value
                                        }
                                        onChange={() =>
                                            handleOptionChange(
                                                "capacity",
                                                option.value,
                                            )
                                        }
                                    />
                                    <span className={styles.checkmark}></span>
                                    <span>
                                        {option.label}
                                        <span className={styles.price}>
                                            {`(${option.price} ${strings.common.uah})`}
                                        </span>
                                    </span>
                                </label>
                            ))}
                        </>
                        <>
                            <div className={styles.title}>
                                {strings.buyPups.constructor.power}
                            </div>
                            {initialOptions.inverter.map((option) => (
                                <label
                                    key={option.id}
                                    className={styles.variant}
                                    htmlFor={option.id}
                                >
                                    <input
                                        type="radio"
                                        id={option.id}
                                        name="inverter"
                                        value={option.value}
                                        checked={
                                            selectedOptions.inverter ===
                                            option.value
                                        }
                                        onChange={() =>
                                            handleOptionChange(
                                                "inverter",
                                                option.value,
                                            )
                                        }
                                    />
                                    <span className={styles.checkmark}></span>
                                    <span>
                                        {option.label}{" "}
                                        {strings.buyPups.constructor.powerShort}
                                        <span className={styles.price}>
                                            {`(${option.price} ${strings.common.uah})`}
                                        </span>
                                    </span>
                                </label>
                            ))}
                        </>
                        <>
                            <div className={styles.title}>
                                {strings.buyPups.constructor.charger}
                            </div>
                            {initialOptions.charger.map((option) => (
                                <label
                                    key={option.id}
                                    className={styles.variant}
                                    htmlFor={option.id}
                                >
                                    <input
                                        type="radio"
                                        id={option.id}
                                        name="charger"
                                        value={option.value}
                                        checked={
                                            selectedOptions.charger ===
                                            option.value
                                        }
                                        onChange={() =>
                                            handleOptionChange(
                                                "charger",
                                                option.value,
                                            )
                                        }
                                    />
                                    <span className={styles.checkmark}></span>
                                    <span>
                                        {option.label}{" "}
                                        {
                                            strings.buyPups.constructor
                                                .amperesShort
                                        }
                                        <span className={styles.price}>
                                            {`(${option.price} ${strings.common.uah})`}
                                        </span>
                                    </span>
                                </label>
                            ))}
                        </>
                        <>
                            <div className={styles.title}>
                                {strings.buyPups.constructor.autoLighter}
                            </div>
                            {initialOptions.cigarette.map((option, index) => (
                                <label
                                    key={option.id}
                                    className={styles.variant}
                                    htmlFor={option.id}
                                >
                                    <input
                                        type="radio"
                                        id={option.id}
                                        name="cigarette"
                                        value={option.value}
                                        checked={
                                            selectedOptions.cigarette ===
                                            option.value
                                        }
                                        onChange={() =>
                                            handleOptionChange(
                                                "cigarette",
                                                option.value,
                                            )
                                        }
                                    />
                                    <span className={styles.checkmark}></span>
                                    <span>
                                        {option.label}{" "}
                                        {index === 0
                                            ? strings.buyPups.constructor
                                                  .noShort
                                            : strings.buyPups.constructor
                                                  .yesShort}
                                        <span className={styles.price}>
                                            {`(${option.price} ${strings.common.uah})`}
                                        </span>
                                    </span>
                                </label>
                            ))}
                        </>
                        <>
                            <div className={styles.title}>
                                {strings.buyPups.constructor.usb}
                            </div>
                            {initialOptions.usb.map((option) => (
                                <label
                                    key={option.id}
                                    className={styles.variant}
                                    htmlFor={option.id}
                                >
                                    <input
                                        type="radio"
                                        id={option.id}
                                        name="usb"
                                        value={option.value}
                                        checked={
                                            selectedOptions.usb === option.value
                                        }
                                        onChange={() =>
                                            handleOptionChange(
                                                "usb",
                                                option.value,
                                            )
                                        }
                                    />
                                    <span className={styles.checkmark}></span>
                                    <span>
                                        {option.label}
                                        <span className={styles.price}>
                                            {`(${option.price} ${strings.common.uah})`}
                                        </span>
                                    </span>
                                </label>
                            ))}
                        </>
                        <>
                            <div className={styles.title}>
                                {strings.buyPups.constructor.typeC}
                            </div>
                            {initialOptions.typec.map((option) => (
                                <label
                                    key={option.id}
                                    className={styles.variant}
                                    htmlFor={option.id}
                                >
                                    <input
                                        type="radio"
                                        id={option.id}
                                        name="typec"
                                        value={option.value}
                                        checked={
                                            selectedOptions.typec ===
                                            option.value
                                        }
                                        onChange={() =>
                                            handleOptionChange(
                                                "typec",
                                                option.value,
                                            )
                                        }
                                    />
                                    <span className={styles.checkmark}></span>
                                    <span>
                                        {option.label}
                                        <span className={styles.price}>
                                            {`(${option.price} ${strings.common.uah})`}
                                        </span>
                                    </span>
                                </label>
                            ))}
                        </>
                        <>
                            <div className={styles.title}>
                                {strings.buyPups.constructor.rozette}
                            </div>
                            {initialOptions.rozette.map((option) => (
                                <label
                                    key={option.id}
                                    className={styles.variant}
                                    htmlFor={option.id}
                                >
                                    <input
                                        type="radio"
                                        id={option.id}
                                        name="rozette"
                                        value={option.value}
                                        checked={
                                            selectedOptions.rozette ===
                                            option.value
                                        }
                                        onChange={() =>
                                            handleOptionChange(
                                                "rozette",
                                                option.value,
                                            )
                                        }
                                    />
                                    <span className={styles.checkmark}></span>
                                    <span>
                                        {option.label}
                                        <span className={styles.price}>
                                            {`(${option.price} ${strings.common.uah})`}
                                        </span>
                                    </span>
                                </label>
                            ))}
                        </>
                        <>
                            <div className={styles.title}>
                                {strings.buyPups.constructor.armor}
                            </div>
                            {initialOptions.armor.map((option, index) => (
                                <label
                                    key={option.id}
                                    className={styles.variant}
                                    htmlFor={option.id}
                                >
                                    <input
                                        type="radio"
                                        id={option.id}
                                        name="armor"
                                        value={option.value}
                                        checked={
                                            selectedOptions.armor ===
                                            option.value
                                        }
                                        onChange={() =>
                                            handleOptionChange(
                                                "armor",
                                                option.value,
                                            )
                                        }
                                    />
                                    <span className={styles.checkmark}></span>
                                    <span>
                                        {option.label}{" "}
                                        {index === 0
                                            ? strings.buyPups.constructor
                                                  .noShort
                                            : strings.buyPups.constructor
                                                  .yesShort}
                                        <span className={styles.price}>
                                            {`(${option.price} ${strings.common.uah})`}
                                        </span>
                                    </span>
                                </label>
                            ))}
                        </>
                        <p className={styles.description}>
                            <span className={styles.price}>
                                {strings.buyPups.constructor.price}:{" "}
                                <span>{calculateTotalPrice()}</span>{" "}
                                {strings.common.uah}
                            </span>
                            {strings.buyPups.constructor.description}
                            <br />
                            {strings.buyPups.constructor.descriptionAdditional}
                        </p>
                        <button className={styles.submit}>
                            {strings.buyPups.constructor.submit}
                        </button>
                    </form>
                </div>
                <div className={styles.readyVariants}>
                    <h2>{strings.buyPups.ready.title}</h2>
                    <form onSubmit={submitReadyPups}>
                        <>
                            <div className={styles.title}>
                                {strings.buyPups.ready.variantsTitle}
                            </div>
                            {initialPupsOptions.map((option) => (
                                <label
                                    key={option.id}
                                    className={styles.variant}
                                    htmlFor={option.id}
                                >
                                    <input
                                        type="radio"
                                        id={option.id}
                                        name="PUPS"
                                        value={option.value}
                                        checked={
                                            selectedPupsOption.id === option.id
                                        }
                                        onChange={() =>
                                            setSelectedPupsOption(option)
                                        }
                                    />
                                    <span className={styles.checkmark}></span>
                                    <span>
                                        {option.label}
                                        <span className={styles.price}>
                                            {`(${option.price} ${strings.common.uah})`}
                                        </span>
                                    </span>
                                </label>
                            ))}
                        </>
                        <p className={styles.description}>
                            {strings.buyPups.ready.description}
                        </p>
                        <button className={styles.submit}>
                            {strings.buyPups.ready.submit}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Page;
