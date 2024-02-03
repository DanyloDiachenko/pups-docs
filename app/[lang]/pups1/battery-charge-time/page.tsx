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
            <h1>{strings.batteryChargeTime.title}</h1>
            <p className={styles.description}>
                {strings.batteryChargeTime.description}
            </p>
            <p className={styles.additionalDescription}>
                {strings.batteryChargeTime.descriptionAdditional}
            </p>
            <img
                className={styles.image}
                src={strings.batteryChargeTime.image}
                alt={strings.batteryChargeTime.title}
            />
        </>
    );
};

export default Page;
