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
                    src="/pups1.5/proto3.jpeg"
                    alt={strings.manufacturedPrototype15.title}
                />
                <img
                    src="/pups1.5/proto2.jpeg"
                    alt={strings.manufacturedPrototype15.title}
                />
            </div>
        </>
    );
};

export default Page;
