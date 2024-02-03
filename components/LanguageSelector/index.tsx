import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import styles from "./styles.module.scss";

type ActiveLangiageType = "ua" | "en";

export const LanguageSelector = () => {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    const [activeLanguage, setActiveLanguage] = useState<ActiveLangiageType>(
        params.lang as ActiveLangiageType,
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
