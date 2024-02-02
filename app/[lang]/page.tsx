import styles from "./page.module.scss";
import { dictionaries } from "./dictionaries";

interface HomeProps {
    params: {
        lang: string;
    };
}

const Home = async ({ params }: HomeProps) => {
    const strings = dictionaries[params.lang as keyof typeof dictionaries];

    return (
        <>
            <h1>{strings.home.title}</h1>
            <p className={styles.mainDescription}>
                {strings.home.mainDescription}
            </p>
            <p className={styles.description}>{strings.home.description1}</p>
            <p className={styles.description}>{strings.home.description2}</p>
            <ul className={styles.list}>
                <li>
                    <h2>{strings.home.section1.title}</h2>
                    <p>{strings.home.section1.content}</p>
                </li>
                <li>
                    <h2>{strings.home.section2.title}</h2>
                    <p>{strings.home.section2.content}</p>
                </li>
                <li>
                    <h2>{strings.home.section3.title}</h2>
                    <p>{strings.home.section3.content}</p>
                </li>
            </ul>
            <p className={styles.description}>
                {strings.home.navigationDescription}
            </p>
        </>
    );
};

export default Home;
