import { FormEvent } from "react";

import styles from "./styles.module.scss";
import { dictionaries } from "../dictionaries";
import { CalculatorPupsForm } from "@/components/Forms/CalculatorPupsForm";

interface PageProps {
    params: {
        lang: string;
    };
}

const Page = ({ params }: PageProps) => {
    const language = params.lang;
    const strings = dictionaries[language as keyof typeof dictionaries];

    const submitReadyPups = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

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
                    <form /* onSubmit={submitReadyPups} */>
                        <>
                            <div className={styles.title}>
                                {strings.buyPups.ready.variantsTitle}
                            </div>
                            {/* {initialPupsOptions.map((option) => (
                                <label
                                    key={option.id}
                                    className={styles.variant}
                                    htmlFor={option.id}
                                >
                                    <input
                                        type="radio"
                                        id={option.id}
                                        name="PUPS"
                                        checked={
                                            selectedPupsOption.id === option.id
                                        }
                                        onChange={() =>
                                            setSelectedPupsOption(option)
                                        }
                                    />
                                    <span className={styles.checkmark}></span>
                                    <span>
                                        {option.label}
                                        <span className={styles.price}>
                                            {`(${option.price} ${strings.common.uah})`}
                                        </span>
                                    </span>
                                </label>
                            ))} */}
                        </>
                        <p className={styles.description}>
                            {strings.buyPups.ready.description}
                        </p>
                        <button className={styles.submit}>
                            {strings.buyPups.ready.submit}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Page;
