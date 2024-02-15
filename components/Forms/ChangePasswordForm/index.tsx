"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

import styles from "./styles.module.scss";
import { Loader } from "@/components/Loader";
import { getCookie } from "@/helpers/cookies.helper";
import { ChangePasswordFormProps } from "./component.props";
import { AuthApi } from "@/api/auth.api";

export const ChangePasswordForm = ({ language }: ChangePasswordFormProps) => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        passwordNew: "",
        passwordNewRepeat: "",
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.passwordNew !== formData.passwordNewRepeat) {
            toast.error("Паролі не співпадають!");

            return;
        }

        setIsLoading(true);

        const token = getCookie("token");
        if (!token) {
            if (!token) {
                toast.error("Спершу увійдіть в акаунт!");

                router.push(`/${language}/auth`);

                return;
            }
        }

        const response = await AuthApi.changePassword({
            password: formData.passwordNew,
        });

        if (response.error) {
            toast.error(response.error);
        } else {
            toast.success("Ви успішно змінили пароль!");
        }

        setIsLoading(false);
    };

    return (
        <>
            <form className={styles.form} onSubmit={submit}>
                <label htmlFor="passwordNew">
                    <input
                        name="passwordNew"
                        type="password"
                        placeholder="Новий пароль"
                        required
                        value={formData.passwordNew}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="passwordNewRepeat">
                    <input
                        name="passwordNewRepeat"
                        type="password"
                        placeholder="Підтвердіть новий пароль"
                        required
                        value={formData.passwordNewRepeat}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit" className={styles.button}>
                    Підтвердити
                </button>
            </form>
            {isLoading && <Loader />}
        </>
    );
};
