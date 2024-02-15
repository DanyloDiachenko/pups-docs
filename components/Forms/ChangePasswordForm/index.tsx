"use client";

import styles from "./styles.module.scss";

export const ChangePasswordForm = () => {
    const submit = () => {};

    return (
        <form className={styles.form} onSubmit={submit}>
            <label htmlFor="password">
                <input
                    name="password"
                    type="email"
                    placeholder="Ваш нинішній пароль"
                    required
                />
            </label>
            <label htmlFor="passwordNew">
                <input
                    name="passwordNew"
                    type="password"
                    placeholder="Новий пароль"
                    required
                />
            </label>
            <label htmlFor="passwordNewRepeat">
                <input
                    name="passwordNewRepeat"
                    type="password"
                    placeholder="Підтвердіть новий пароль"
                    required
                />
            </label>
            <button type="submit" className={styles.button}>
                Підтвердити
            </button>
        </form>
    );
};
