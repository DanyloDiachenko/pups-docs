import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import styles from "./styles.module.scss";

type ActiveLangiageType = "ua" | "en";

export const LanguageSelector = () => {
    const params = useParams();
    const router = useRouter();
    const pathname = usePathname();

    if (!params.lang) {
        if (typeof window !== "undefined") {
            router.back();
        }
    }

    const [activeLanguage, setActiveLanguage] = useState<ActiveLangiageType>(
        (params.lang as ActiveLangiageType) || "ua",
    );

    const switchLanguage = () => {
        const newLang = activeLanguage === "en" ? "ua" : "en";
        setActiveLanguage(newLang);

        router.push(`/${newLang}/${pathname.slice(4, pathname.length)}`);
    };

    return (
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
    );
};
