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
            <h1>{strings.manufacturedPrototype15.title}</h1>
            <div className={styles.photos}>
                <img
                    src="/pups2/proto7.png"
                    alt={strings.manufacturedPrototype15.title}
                />
                <img
                    src="/pups2/proto4.jpeg"
                    alt={strings.manufacturedPrototype15.title}
                />
                <img
                    src="/pups2/proto1.jpeg"
                    alt={strings.manufacturedPrototype15.title}
                />
                <img
                    src="/pups2/proto6.jpeg"
                    alt={strings.manufacturedPrototype15.title}
                />
            </div>
        </>
    );
};

export default Page;
