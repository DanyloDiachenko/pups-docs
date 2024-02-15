"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

import styles from "./styles.module.scss";
import { IOption, initialPupsOptions } from "./options";
import { CalculatorPupsFormProps } from "./component.props";
import { Loader } from "@/components/Loader";
import { getCookie } from "@/helpers/cookies.helper";
import {
    ICreateOrderPayload,
    OrderStatus,
} from "@/interfaces/orders.interface";
import { CreateOrderApi } from "@/api/createOrder.api";

export const ReadyPupsForm = ({
    language,
    strings,
}: CalculatorPupsFormProps) => {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [selectedPupsVersion, setSelectedPupsVersion] = useState<number>(
        initialPupsOptions[0].value as number,
    );

    const submitReadyPups = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        const token = getCookie("token");

        if (!token) {
            toast.error("Спершу увійдіть в акаунт!");

            router.push(`/${language}/auth`);

            return;
        }

        const createOrderPayload: ICreateOrderPayload = {
            capacity: -1,
            power: -1,
            charger: -1,
            isAutoLighter: false,
            usbQuantity: -1,
            typecQuantity: -1,
            outletQuantity: -1,
            armor: false,
            //
            price: -1,
            status: OrderStatus.Placed,
            readyPupsVersion: selectedPupsVersion,
        };

        const response = await CreateOrderApi.createOrder(createOrderPayload);

        if (response.data) {
            toast.success("Замовлення створено успішно!");
        } else {
            console.log(response);
        }

        setIsLoading(false);
    };

    return (
        <>
            <form onSubmit={submitReadyPups} className={styles.form}>
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
                                checked={selectedPupsVersion === option.value}
                                onChange={() =>
                                    setSelectedPupsVersion(
                                        option.value as number,
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
                <p className={styles.description}>
                    {strings.buyPups.ready.description}
                </p>
                <button className={styles.submit}>
                    {strings.buyPups.ready.submit}
                </button>
            </form>
            {isLoading && <Loader />}
        </>
    );
};
