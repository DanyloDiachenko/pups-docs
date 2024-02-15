import { Authorization } from "@/components/Forms/AuthorizationForm";
import styles from "./styles.module.scss";
import { dictionaries } from "../dictionaries";

interface PageProps {
    params: {
        lang: string;
    };
}

const Page = ({ params }: PageProps) => {
    const language = params.lang;
    const strings = dictionaries[language as keyof typeof dictionaries];

    return (
        <>
            <h1>{strings.auth.authTitle}</h1>
            <div className={styles.wrapper}>
                <Authorization language={language} strings={strings} />
            </div>
        </>
    );
};

export default Page;
