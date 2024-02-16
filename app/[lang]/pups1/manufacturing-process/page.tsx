import Link from "next/link";

import styles from "./styles.module.scss";
import { dictionaries } from "../../dictionaries";
import { Faq } from "@/components/Faq";

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
            <h1>{strings.manufacturingProcess.title}</h1>
            <ol className={styles.list}>
                {strings.manufacturingProcess.steps.map((stepItem, index) => (
                    <li key={index}>
                        <h2>{`${stepItem.id}. ` + stepItem.title}</h2>
                        <p>
                            {stepItem.content}
                            {stepItem.link ? (
                                <Link
                                    href={`/${language}/${stepItem.link.url}`}
                                >
                                    {`${stepItem.link.title}`}
                                </Link>
                            ) : (
                                ""
                            )}
                        </p>
                        {stepItem.image && (
                            <img src={stepItem.image} alt={stepItem.title} />
                        )}
                        {stepItem.subSteps && (
                            <ol className={styles.shcemeNumbers}>
                                {stepItem.subSteps.map((subStep, index) => (
                                    <li key={index}>
                                        {`${subStep.id}. ` + subStep.content}
                                    </li>
                                ))}
                            </ol>
                        )}
                    </li>
                ))}
            </ol>
            <p className={styles.bottomDescription}>
                {`${strings.manufacturingProcess.additionalInfo.title}`}
                <Link
                    href={`/${language}/${strings.manufacturingProcess.additionalInfo.url}`}
                >
                    {strings.manufacturingProcess.additionalInfo.link}
                </Link>
            </p>
            <Faq faq={strings.manufacturingProcess.faq} />
        </>
    );
};

export default Page;
