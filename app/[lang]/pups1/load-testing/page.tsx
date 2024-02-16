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
            <h1>{strings.loadTesting.title}</h1>
            <ol className={styles.list}>
                {strings.loadTesting.list.map((listItem, index) => (
                    <li key={index}>
                        <h2>{listItem.title}</h2>
                        <p>{listItem.description}</p>
                        {listItem.descriptionToFormule && (
                            <p>
                                Q
                                <span className={styles.small}>
                                    {strings.common.charge}
                                </span>{" "}
                                = Q
                                <span className={styles.small}>
                                    {strings.common.phone}
                                </span>{" "}
                                + Q
                                <span className={styles.small}>
                                    {strings.common.phone}
                                </span>{" "}
                                * (100% - n
                                <span className={styles.small}>
                                    {strings.common.module}
                                </span>
                                ){listItem.descriptionToFormule}
                            </p>
                        )}

                        {listItem.image && (
                            <img src={listItem.image} alt={listItem.title} />
                        )}
                    </li>
                ))}
            </ol>
            <Faq faq={strings.loadTesting.faq} />
        </>
    );
};

export default Page;
