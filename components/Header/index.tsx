"use client";

import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "./styles.module.scss";

type ActiveLangiageType = "ua" | "en";

export const Header = () => {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    const [activeLanguage, setActiveLanguage] = useState<ActiveLangiageType>(
        params.lang as ActiveLangiageType,
    );
    const [scroll, setScroll] = useState<boolean>(true);

    const switchLanguage = () => {
        const newLang = activeLanguage === "en" ? "ua" : "en";
        setActiveLanguage(newLang);

        router.push(`/${newLang}/${pathname.slice(4, pathname.length)}`);
    };

    useEffect(() => {
        let prevScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (prevScrollY > currentScrollY || currentScrollY <= 20) {
                setScroll(true);
            } else {
                setScroll(false);
            }
            prevScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`${styles.header} ${scroll ? styles.scrollable : ""}`}
        >
            <div className={styles.language}>
                <div className={styles.active}>
                    <img src="/language.svg" alt="Мова" />
                    <span>{activeLanguage.toLocaleUpperCase()}</span>
                </div>
                <div className={styles.selector}>
                    <span onClick={switchLanguage}>
                        {activeLanguage === "en" ? "ua" : "en"}
                    </span>
                </div>
            </div>
            <div className={styles.rightCol}>
                <div className={styles.links}>
                    <Link href="#" className={styles.email}>
                        Підтримка
                    </Link>
                    /
                    <Link href="#" className={styles.email}>
                        Зворотній зв'язок
                    </Link>
                    /
                    <Link href="#" className={styles.email}>
                        Контакти
                    </Link>
                </div>
                <button className={styles.button}>Ваш профіль</button>
            </div>
        </header>
    );
};
