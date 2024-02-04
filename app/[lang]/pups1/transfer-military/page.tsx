import Link from "next/link";

import styles from "./styles.module.scss";
import { dictionaries } from "../../dictionaries";

interface PageProps {
    params: {
        lang: string;
    };
}

const Page = async ({ params }: PageProps) => {
    const language = params.lang;

    const strings = dictionaries[language as keyof typeof dictionaries];

    return (
        <>
            <h1>{strings.transferMilitary.title}</h1>
            <p className={styles.descriptionMain}>
                {strings.transferMilitary.description1}
                <br />
                {strings.transferMilitary.description1additional}{" "}
                <Link
                    href={`/${language}/${strings.transferMilitary.description1Link.url}`}
                >
                    {strings.transferMilitary.description1Link.title}
                </Link>
                .
            </p>
            <p className={styles.description}>
                {strings.transferMilitary.description2}{" "}
                <Link
                    href={`/${language}/${strings.transferMilitary.description2Link.url}`}
                >
                    {strings.transferMilitary.description2Link.title}
                </Link>
                .
            </p>
            <p className={styles.description}>
                {strings.transferMilitary.description3}
            </p>
            <img
                className={styles.image}
                src={strings.transferMilitary.image}
                alt={strings.transferMilitary.title}
            />
        </>
    );
};

export default Page;
