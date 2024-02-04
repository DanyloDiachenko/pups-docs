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
            <h1>{strings.technicalCharacteristics15.title}</h1>
            <p className={styles.mainDescription}>
                {strings.technicalCharacteristics15.description}{" "}
                <Link
                    href={`/${language}/${strings.technicalCharacteristics15.link.url}`}
                >
                    {strings.technicalCharacteristics15.link.title}
                </Link>{" "}
                {strings.technicalCharacteristics15.descriptionAdditional}
            </p>
            <ol className={styles.list}>
                {strings.technicalCharacteristics15.characteristics.map(
                    (techChar, index) => (
                        <li key={index}>
                            <p className={styles.key}>{techChar.name}</p>
                            <p className={styles.value}>{techChar.value}</p>
                        </li>
                    ),
                )}
            </ol>
        </>
    );
};

export default Page;
