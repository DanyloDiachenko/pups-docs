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
            <h1>{strings.manufacturingProcess2.title}</h1>
            <p>{strings.manufacturingProcess2.description}</p>
            <p>{strings.manufacturingProcess2.descriptionAdditional}</p>
            <div className={styles.images}>
                <img
                    src="/pups2/manufacture1.jpeg"
                    alt={strings.manufacturingProcess2.title}
                />
                <img
                    src="/pups2/manufacture2.jpeg"
                    alt={strings.manufacturingProcess2.title}
                />
            </div>
            <p className={styles.bottomDescription}>
                {strings.manufacturingProcess2.descriptionAdditional}{" "}
                <Link href={`/${language}/pups2/manufactured-prototype`}>
                    {strings.manufacturingProcess2.linkBottom}
                </Link>
                .
            </p>
        </>
    );
};

export default Page;
