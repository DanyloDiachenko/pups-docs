"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

import styles from "./styles.module.scss";
import { IOption, IOptionsObject, initialOptions } from "./options";
import { getCookie } from "@/helpers/cookies.helper";
import { CalculatorPupsFormProps } from "./component.props";
import {
    ICreateOrderPayload,
    OrderStatus,
} from "@/interfaces/orders.interface";
import { CreateOrderApi } from "@/api/createOrder.api";
import { Loader } from "@/components/Loader";

interface ISelectedOptions {
    capacity: number;
    power: number;
    charger: number;
    isAutoLighter: boolean;
    usbQuantity: number;
    typecQuantity: number;
    outletQuantity: number;
    armor: boolean;
}

export const CalculatorPupsForm = ({
    language,
    strings,
}: CalculatorPupsFormProps) => {
    const router = useRouter();

    const [selectedOptions, setSelectedOptions] = useState<ISelectedOptions>({
        capacity: initialOptions.capacity[0].value as number,
        power: initialOptions.power[0].value as number,
        charger: initialOptions.charger[0].value as number,
        isAutoLighter: initialOptions.isAutoLighter[0].value as boolean,
        usbQuantity: initialOptions.usbQuantity[0].value as number,
        typecQuantity: initialOptions.typecQuantity[0].value as number,
        outletQuantity: initialOptions.outletQuantity[0].value as number,
        armor: initialOptions.armor[0].value as boolean,
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleOptionChange = (
        optionType: keyof ISelectedOptions,
        value: string | number | boolean,
    ) => {
        setSelectedOptions({
            ...selectedOptions,
            [optionType]: value,
        });
    };

    const submitCalculator = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        const token = getCookie("token");

        if (!token) {
            toast.error("Спершу увійдіть в акаунт!");

            router.push(`/${language}/auth`);

            return;
        }

        const createOrderPayload: ICreateOrderPayload = {
            capacity: selectedOptions.capacity,
            power: selectedOptions.power,
            charger: selectedOptions.charger,
            isAutoLighter: selectedOptions.isAutoLighter,
            usbQuantity: selectedOptions.usbQuantity,
            typecQuantity: initialOptions.typecQuantity[0].value as number,
            outletQuantity: initialOptions.outletQuantity[0].value as number,
            armor: initialOptions.armor[0].value as boolean,
            //
            price: calculateTotalPrice(),
            status: OrderStatus.placed,
            id: Date.now(),
        };

        const response = await CreateOrderApi.createOrder(createOrderPayload);

        if (response.data) {
            toast.success("Замовлення створено успішно!");
        } else {
        }

        setIsLoading(false);
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

        return total;
    };

    return (
        <>
            <form className={styles.form} onSubmit={submitCalculator}>
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
                                checked={
                                    selectedOptions.capacity === option.value
                                }
                                onChange={() =>
                                    handleOptionChange("capacity", option.value)
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
                    {initialOptions.power.map((option) => (
                        <label
                            key={option.id}
                            className={styles.variant}
                            htmlFor={option.id}
                        >
                            <input
                                type="radio"
                                id={option.id}
                                name="inverter"
                                checked={selectedOptions.power === option.value}
                                onChange={() =>
                                    handleOptionChange(
                                        "power",
                                        option.value as number,
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
                                checked={
                                    selectedOptions.charger === option.value
                                }
                                onChange={() =>
                                    handleOptionChange("charger", option.value)
                                }
                            />
                            <span className={styles.checkmark}></span>
                            <span>
                                {option.label}{" "}
                                {strings.buyPups.constructor.amperesShort}
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
                    {initialOptions.isAutoLighter.map((option, index) => (
                        <label
                            key={option.id}
                            className={styles.variant}
                            htmlFor={option.id}
                        >
                            <input
                                type="radio"
                                id={option.id}
                                name="cigarette"
                                checked={
                                    selectedOptions.isAutoLighter ===
                                    option.value
                                }
                                onChange={() =>
                                    handleOptionChange(
                                        "isAutoLighter",
                                        option.value,
                                    )
                                }
                            />
                            <span className={styles.checkmark}></span>
                            <span>
                                {option.label}{" "}
                                {index === 0
                                    ? strings.buyPups.constructor.noShort
                                    : strings.buyPups.constructor.yesShort}
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
                    {initialOptions.usbQuantity.map((option) => (
                        <label
                            key={option.id}
                            className={styles.variant}
                            htmlFor={option.id}
                        >
                            <input
                                type="radio"
                                id={option.id}
                                name="usb"
                                checked={
                                    selectedOptions.usbQuantity === option.value
                                }
                                onChange={() =>
                                    handleOptionChange(
                                        "usbQuantity",
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
                    {initialOptions.typecQuantity.map((option) => (
                        <label
                            key={option.id}
                            className={styles.variant}
                            htmlFor={option.id}
                        >
                            <input
                                type="radio"
                                id={option.id}
                                name="typec"
                                checked={
                                    selectedOptions.typecQuantity ===
                                    option.value
                                }
                                onChange={() =>
                                    handleOptionChange(
                                        "typecQuantity",
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
                    {initialOptions.outletQuantity.map((option) => (
                        <label
                            key={option.id}
                            className={styles.variant}
                            htmlFor={option.id}
                        >
                            <input
                                type="radio"
                                id={option.id}
                                name="rozette"
                                checked={
                                    selectedOptions.outletQuantity ===
                                    option.value
                                }
                                onChange={() =>
                                    handleOptionChange(
                                        "outletQuantity",
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
                                checked={selectedOptions.armor === option.value}
                                onChange={() =>
                                    handleOptionChange("armor", option.value)
                                }
                            />
                            <span className={styles.checkmark}></span>
                            <span>
                                {option.label}{" "}
                                {index === 0
                                    ? strings.buyPups.constructor.noShort
                                    : strings.buyPups.constructor.yesShort}
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
                        <span>{calculateTotalPrice().toFixed(2)}</span>{" "}
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
            {isLoading && <Loader />}
        </>
    );
};
