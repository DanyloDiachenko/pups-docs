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
            <h1>{strings.transferMilitary15.title}</h1>
            <p className={styles.descriptionMain}>
                {strings.transferMilitary15.description}
            </p>
            <p className={styles.description}>
                {strings.transferMilitary15.description1additional}
            </p>
        </>
    );
};

export default Page;
