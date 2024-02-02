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
            <h1>{strings.shortsList.title}</h1>
            <ol className={styles.list}>
                {strings.shortsList.list.map((short, index) => (
                    <li key={index}>
                        <p className={styles.key}>{short.title}</p>
                        <p className={styles.value}>{short.value}</p>
                    </li>
                ))}
            </ol>
        </>
    );
};

export default Page;
