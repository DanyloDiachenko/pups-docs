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
            <h1>{strings.batteryChargeTime2.title}</h1>
            <p className={styles.description}>
                {strings.batteryChargeTime2.description}
            </p>
        </>
    );
};

export default Page;
