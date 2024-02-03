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
            <h1>{strings.chargeTime.title}</h1>
            <ol className={styles.list}>
                {strings.chargeTime.list.map((listItem, index) => (
                    <li key={index}>
                        <h2>{listItem.title}</h2>
                        <p>{listItem.description}</p>
                        <p>
                            t<span className={styles.small}>зарядки</span> = Q
                            <span className={styles.small}>телефона</span> / I
                            <span className={styles.small}>порту</span> = 4.5 /
                            2.1 = 2.14 - {listItem.descriptionToFormule}
                        </p>
                        {listItem.descriptionAdditional && (
                            <p>{listItem.descriptionAdditional}</p>
                        )}
                        {listItem.image && (
                            <img
                                className={styles.image}
                                src={listItem.image}
                                alt={listItem.title}
                            />
                        )}
                    </li>
                ))}
            </ol>
        </>
    );
};

export default Page;
