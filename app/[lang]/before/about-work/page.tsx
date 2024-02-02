import styles from "./styles.module.scss";
import { dictionaries } from "../../dictionaries";

interface PageProps {
    params: {
        lang: string;
    };
}

const Page = ({ params }: PageProps) => {
    const strings = dictionaries[params.lang as keyof typeof dictionaries];

    return (
        <>
            <h1>{strings.aboutWork.title}</h1>
            <p>{strings.aboutWork.author}</p>
            <p className={styles.descriptionAddtional}>
                {strings.aboutWork.descriptionAdditional1}
            </p>
            <p className={styles.descriptionAddtional}>
                {strings.aboutWork.descriptionAdditional2}
            </p>
            <ul className={styles.list}>
                {strings.aboutWork.list.map((item, index) => (
                    <li key={index}>
                        <h2>{item.title}</h2>
                        {item.content && <p>{item.content}</p>}
                        {item.sublist && (
                            <ul className={styles.subUl}>
                                {item.sublist.map((listItem, indexI) => (
                                    <li key={indexI}>
                                        <p>{listItem}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Page;
