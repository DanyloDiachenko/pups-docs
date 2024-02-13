"use client";

import { ChangeEvent, useState } from "react";

import styles from "./styles.module.scss";

export const Authorization = () => {
    const [activeSection, setActiveSection] = useState<"login" | "register">(
        "login",
    );
    const [fields, setFields] = useState<{ email: string; password: string }>({
        email: "",
        password: "",
    });

    const setFieldsHandler = (
        field: "email" | "password",
        e: ChangeEvent<HTMLInputElement>,
    ) => {
        const { value } = e.target;

        setFields({
            ...fields,
            [field]: value,
        });
    };

    const submit = () => {};

    return (
        <>
            <div className={styles.sections}>
                <h2
                    className={activeSection === "login" ? styles.active : ""}
                    onClick={() => setActiveSection("login")}
                >
                    Увійти
                </h2>
                <h2
                    className={
                        activeSection === "register" ? styles.active : ""
                    }
                    onClick={() => setActiveSection("register")}
                >
                    Зареєструватися
                </h2>
            </div>
            <form className={styles.form} onSubmit={submit}>
                <label htmlFor="email">
                    <input
                        name="email"
                        type="email"
                        placeholder="Ваша пошта"
                        required
                        onChange={(e) => setFieldsHandler("email", e)}
                    />
                </label>
                <label htmlFor="password">
                    <input
                        name="password"
                        type="password"
                        placeholder="Ваш Пароль"
                        required
                        onChange={(e) => setFieldsHandler("password", e)}
                    />
                </label>
                <button type="submit" className={styles.button}>
                    Підтвердити
                </button>
            </form>
        </>
    );
};
