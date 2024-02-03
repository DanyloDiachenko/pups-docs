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
            <h1>{strings.manufacturedPrototype.title}</h1>
            <div className={styles.images}>
                {strings.manufacturedPrototype.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={strings.manufacturedPrototype.title}
                    />
                ))}
            </div>
        </>
    );
};

export default Page;
