"use client";

import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import { LanguageSelector } from "../LanguageSelector";
import { dictionaries } from "@/app/[lang]/dictionaries";

export const Header = () => {
    const params = useParams();
    const router = useRouter();

    if (!params.lang) {
        if (typeof window !== "undefined") {
            router.back();
        }
    }

    const strings = dictionaries[params.lang as keyof typeof dictionaries];

    const [scroll, setScroll] = useState<boolean>(true);

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

    if (!strings) {
        return <></>;
    }

    return (
        <header
            className={`${styles.header} ${scroll ? styles.scrollable : ""}`}
        >
            <LanguageSelector />
            <div className={styles.rightCol}>
                <div className={styles.links}>
                    <Link
                        href={`/${params.lang}/support`}
                        className={styles.email}
                    >
                        {strings.header.support}
                    </Link>
                    <span className={styles.line}>/</span>
                    <Link
                        href={`/${params.lang}/buy-pups`}
                        className={styles.email}
                    >
                        {strings.header.feedback}
                    </Link>
                    <span className={styles.line}>/</span>
                    <Link
                        href={`/${params.lang}/support`}
                        className={styles.email}
                    >
                        {strings.header.contacts}
                    </Link>
                </div>
                <button className={styles.button}>
                    {strings.header.button}
                </button>
            </div>
        </header>
    );
};
