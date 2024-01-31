"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import styles from "./styles.module.scss";
import { AsideSmallProps } from "./component.props";
import { onClickOutside } from "@/helpers/onClickOutside";

export const AsideSmall = ({ navigation }: AsideSmallProps) => {
    const pathname = usePathname();
    const asideRef = useRef(null);

    onClickOutside(asideRef, () => {
        setIsContentOpened(false);
    });

    const [isContentOpened, setIsContentOpened] = useState<boolean>(false);
    const [scroll, setScroll] = useState(true);
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
        <aside
            className={`${styles.aside} ${scroll ? styles.scrollable : ""} ${
                isContentOpened ? styles.opened : ""
            }`}
            ref={asideRef}
        >
            <div className={styles.asideWrapper}>
                <div className={styles.top}>
                    <Link className={styles.logo} href="/">
                        <img src="/logo.png" alt="Логотип" />
                        «PUPS»
                    </Link>
                    <button
                        onClick={() => setIsContentOpened(!isContentOpened)}
                    >
                        <img src="/menu.svg" alt="Меню" />
                    </button>
                </div>
                <div
                    className={`${styles.linksWrapper} ${
                        isContentOpened ? styles.opened : ""
                    }`}
                >
                    <div className={styles.wrapper}>
                        {navigation.map((tab, index) => (
                            <div className={styles.item} key={index}>
                                <div
                                    className={styles.top}
                                    onClick={() => onTabClick(tab.id)}
                                >
                                    <div className={styles.title}>
                                        {tab.title}
                                    </div>
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
                                                    href={link.link}
                                                    className={
                                                        activeLink === link.link
                                                            ? styles.linkActive
                                                            : ""
                                                    }
                                                    onClick={() =>
                                                        setIsContentOpened(
                                                            false,
                                                        )
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
                </div>
            </div>
        </aside>
    );
};
