import { Faq } from "@/components/Faq";
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
            <h1>{strings.technicalCharacteristics.title}</h1>
            <ol className={styles.list}>
                {strings.technicalCharacteristics.characteristics.map(
                    (techChar, index) => (
                        <li key={index}>
                            <p className={styles.key}>{techChar.title}</p>
                            <p className={styles.value}>{techChar.value}</p>
                        </li>
                    ),
                )}
            </ol>
            <Faq faq={strings.technicalCharacteristics.faq} />
        </>
    );
};

export default Page;
