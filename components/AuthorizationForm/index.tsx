"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

import styles from "./styles.module.scss";
import { AuthApi } from "@/api/auth.api";
import { setCookie } from "@/helpers/cookies.helper";
import { AuthorizationFormProps } from "./component.props";
import { Loader } from "../Loader";

export const Authorization = ({
    language,
    strings,
}: AuthorizationFormProps) => {
    const router = useRouter();

    const [activeSection, setActiveSection] = useState<"login" | "register">(
        "login",
    );
    const [fields, setFields] = useState<{ email: string; password: string }>({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

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

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        if (activeSection === "login") {
            const response = await AuthApi.login(fields);

            if (response.error) {
                toast.error(response.error);
            } else {
                toast.success("Ви успішно увійшли в акаунт!");

                response.token && setCookie("token", response.token);

                setTimeout(() => {
                    router.push(`/${language}/profile`);
                }, 2000);
            }
        } else {
            const response = await AuthApi.register(fields);

            if (response.error) {
                toast.error(response.error);
            } else {
                toast.success("Ви успішно зареєструвалися!");

                response.token && setCookie("token", response.token);

                setTimeout(() => {
                    router.push(`/${language}/profile`);
                }, 2000);
            }
        }

        setIsLoading(false);
    };

    return (
        <>
            <div className={styles.sections}>
                <h2
                    className={activeSection === "login" ? styles.active : ""}
                    onClick={() => setActiveSection("login")}
                >
                    {strings.auth.signIn}
                </h2>
                <h2
                    className={
                        activeSection === "register" ? styles.active : ""
                    }
                    onClick={() => setActiveSection("register")}
                >
                    {strings.auth.signUp}
                </h2>
            </div>
            <form className={styles.form} onSubmit={submit}>
                <label htmlFor="email">
                    <input
                        name="email"
                        type="email"
                        placeholder={strings.auth.email}
                        required
                        onChange={(e) => setFieldsHandler("email", e)}
                    />
                </label>
                <label htmlFor="password">
                    <input
                        name="password"
                        type="password"
                        placeholder={strings.auth.password}
                        required
                        onChange={(e) => setFieldsHandler("password", e)}
                    />
                </label>
                <button type="submit" className={styles.button}>
                    {strings.auth.submit}
                </button>
            </form>
            {isLoading && <Loader />}
        </>
    );
};
