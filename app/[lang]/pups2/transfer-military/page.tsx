import { dictionaries } from "../../dictionaries";
import styles from "./styles.module.scss";

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
            <h1>{strings.transferMilitary2.title}</h1>
            <p className={styles.descriptionMain}>
                {strings.transferMilitary2.description}
            </p>
            <p className={styles.description}>
                {strings.transferMilitary2.description1additional}
            </p>
        </>
    );
};

export default Page;
