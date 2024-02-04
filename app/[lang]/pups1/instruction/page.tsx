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
            <h1>{strings.instruction.title}</h1>
            <ul className={styles.list}>
                {strings.instruction.list.map((listItem, index) => (
                    <li className={styles.listLi}>
                        <h2>{listItem.title}</h2>
                        {listItem.image && (
                            <img src={listItem.image} alt={listItem.title} />
                        )}
                        {listItem.subUl && (
                            <ul className={styles.subUl}>
                                {listItem.subUl.map((listItemSub, index) => (
                                    <li key={index}>{listItemSub}</li>
                                ))}
                            </ul>
                        )}
                        {listItem.description && <p>{listItem.description}</p>}
                        {listItem.descriptionAdditional && (
                            <p>{listItem.descriptionAdditional}</p>
                        )}
                        {listItem.descriptionAdditional1 && (
                            <p>
                                <br />
                                {listItem.descriptionAdditional1}
                            </p>
                        )}
                    </li>
                ))}
                <li className={styles.listLi}>
                    <h2>5. Можливі запитання</h2>
                    <Faq faq={strings.instruction.faq} />
                </li>
            </ul>
        </>
    );
};

export default Page;
