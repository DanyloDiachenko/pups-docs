import { Faq } from "@/components/Faq";
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
            <h1>{strings.instruction2.title}</h1>
            <ul className={styles.list}>
                {strings.instruction2.list.map((listItem, index) => (
                    <li className={styles.listLi} key={index}>
                        <h2>{listItem.title}</h2>
                        {listItem.image && (
                            <img src={listItem.image} alt={listItem.title} />
                        )}
                        {listItem.subUl && (
                            <ul className={styles.subUl}>
                                {listItem.subUl.map((listItemSub, iIndex) => (
                                    <li key={iIndex}>{listItemSub}</li>
                                ))}
                            </ul>
                        )}
                        {listItem.description && <p>{listItem.description}</p>}
                        {listItem.descriptionAdditional && (
                            <p>{listItem.descriptionAdditional}</p>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Page;
