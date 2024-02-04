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
            <h1>{strings.improvements.title}</h1>
            <p className={styles.mainDescription}>
                {strings.improvements.description}
                <br />
                {strings.improvements.description1}{" "}
                <Link href={`/${language}/${strings.improvements.link.url}`}>
                    {strings.improvements.link.title}
                </Link>{" "}
                {strings.improvements.description2}
            </p>
        </>
    );
};

export default Page;
