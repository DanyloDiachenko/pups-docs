"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { SupportFormProps } from "./component.props";
import styles from "./styles.module.scss";
import { Loader } from "../../Loader";
import { NotifcationsApi } from "@/api/sendNotification.api";
import { toast } from "react-toastify";

export const SupportForm = ({ strings }: SupportFormProps) => {
    const [fields, setFields] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const setFieldsHandler = (
        field: "name" | "email" | "subject" | "message",
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { value } = e.target;

        setFields({
            ...fields,
            [field]: value,
        });
    };

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        const response = await NotifcationsApi.sendNotifcation(fields);

        if (response.error) {
            toast.error(response.error);
        } else {
            toast.success("Ви успішно надіслали повідомлення!");
        }

        setIsLoading(false);
    };

    return (
        <>
            <form className={styles.form} onSubmit={submit}>
                <label htmlFor="name">
                    <input
                        name="name"
                        type="text"
                        placeholder={strings.support.feeback.yourName}
                        required
                        onChange={(e) => setFieldsHandler("name", e)}
                    />
                </label>
                <label htmlFor="email">
                    <input
                        name="email"
                        type="email"
                        placeholder={strings.support.feeback.yourEmail}
                        required
                        onChange={(e) => setFieldsHandler("email", e)}
                    />
                </label>
                <label htmlFor="topic">
                    <input
                        name="topic"
                        type="text"
                        placeholder={strings.support.feeback.topic}
                        required
                        onChange={(e) => setFieldsHandler("subject", e)}
                    />
                </label>
                <label htmlFor="message">
                    <textarea
                        name="message"
                        placeholder={strings.support.feeback.message}
                        required
                        onChange={(e) => setFieldsHandler("message", e)}
                    />
                </label>
                <button type="submit" className={styles.button}>
                    {strings.support.feeback.submit}
                </button>
            </form>
            {isLoading && <Loader />}
        </>
    );
};
