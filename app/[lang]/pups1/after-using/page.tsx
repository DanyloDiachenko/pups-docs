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
            <h1>{strings.afterUsing.title}</h1>
            <p className={styles.descriptionMain}>
                {strings.afterUsing.description}
                <br />
                {strings.afterUsing.descriptionAddtional}
            </p>
            <div className={styles.photos}>
                <img
                    src="/pups1/after-using1.jpg"
                    alt={strings.afterUsing.title}
                />
                <img
                    src="/pups1/after-using2.jpg"
                    alt={strings.afterUsing.title}
                />
                <img
                    src="/pups1/after-using3.jpg"
                    alt={strings.afterUsing.title}
                />
                <img
                    src="/pups1/after-using4.jpg"
                    alt={strings.afterUsing.title}
                />
            </div>
        </>
    );
};

export default Page;
