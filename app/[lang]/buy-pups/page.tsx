import { FormEvent } from "react";

import styles from "./styles.module.scss";
import { dictionaries } from "../dictionaries";
import { CalculatorPupsForm } from "@/components/Forms/CalculatorPupsForm";
import { ReadyPupsForm } from "@/components/Forms/ReadyPupsForm";

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
            <h1>{strings.buyPups.title}</h1>
            <div className={styles.content}>
                <div className={styles.calculator}>
                    <h2>{strings.buyPups.constructor.title}</h2>
                    <CalculatorPupsForm language={language} strings={strings} />
                </div>
                <div className={styles.readyVariants}>
                    <h2>{strings.buyPups.ready.title}</h2>
                    <ReadyPupsForm language={language} strings={strings} />
                </div>
            </div>
        </>
    );
};

export default Page;
