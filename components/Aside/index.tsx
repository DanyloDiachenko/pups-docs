"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import { AsideSmall } from "./AsideSmall";
import { useParams, useRouter } from "next/navigation";
import { dictionaries } from "@/app/[lang]/dictionaries";

export const Aside = () => {
    const params = useParams();
    const router = useRouter();
    const pathname = usePathname();

    if (!params.lang) {
        if (typeof window !== "undefined") {
            router.back();
        }
    }
    
    const strings = dictionaries[params.lang as keyof typeof dictionaries];
    const navigation = strings && strings.navigation ? strings.navigation : [];

    const [openedTabIndexes, setOpenedTabIndexes] = useState<number[]>([0]);
    const [activeLink, setActiveLink] = useState<string>();

    const onTabClick = (tabId: number) => {
        if (openedTabIndexes.includes(tabId)) {
            setOpenedTabIndexes(openedTabIndexes.filter((id) => id !== tabId));
        } else {
            setOpenedTabIndexes([...openedTabIndexes, tabId]);
        }
    };

    useEffect(() => {
        navigation.forEach((tab) => {
            if (tab.links.some((link) => pathname.includes(link.link))) {
                setOpenedTabIndexes((prevIndexes) =>
                    Array.from(new Set([...prevIndexes, tab.id])),
                );
            }
        });

        const activeTab = navigation.find((tab) =>
            tab.links.some((link) => pathname.includes(link.link)),
        );
        if (activeTab) {
            const activeLink = activeTab.links.find((link) =>
                pathname.includes(link.link),
            );
            if (activeLink) {
                setActiveLink(activeLink.link);
            }
        }
    }, [pathname]);

    return (
        <>
            <AsideSmall navigation={navigation} />
            <aside className={styles.aside}>
                <div className={styles.asideWrapper}>
                    <Link
                        className={styles.logo}
                        href={`/${params.lang}`}
                        onClick={() => setActiveLink("")}
                    >
                        <img src="/logo.png" alt="Логотип" />
                        «PUPS»
                    </Link>
                    {navigation.map((tab, index) => (
                        <div className={styles.item} key={index}>
                            <div
                                className={styles.top}
                                onClick={() => onTabClick(tab.id)}
                            >
                                <div className={styles.title}>{tab.title}</div>
                                <img
                                    src="/arrow.svg"
                                    alt="arrow"
                                    className={`${styles.arrow} ${
                                        openedTabIndexes.includes(tab.id)
                                            ? styles.reversed
                                            : ""
                                    }`}
                                />
                            </div>
                            <div
                                className={`${styles.links} ${
                                    openedTabIndexes.includes(tab.id)
                                        ? styles.opened
                                        : ""
                                }`}
                            >
                                <div className={styles.wrapper}>
                                    {tab.links.map((link, linkIndex) => (
                                        <div
                                            className={styles.linkWrapper}
                                            key={linkIndex}
                                        >
                                            {activeLink === link.link ? (
                                                <img
                                                    src="/line.svg"
                                                    alt="line"
                                                />
                                            ) : (
                                                ""
                                            )}
                                            <Link
                                                href={`/${params.lang}/${link.link}`}
                                                className={
                                                    activeLink === link.link
                                                        ? styles.linkActive
                                                        : ""
                                                }
                                            >
                                                {link.title}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>
        </>
    );
};
