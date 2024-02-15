import { Faq } from "@/components/Faq";
import styles from "./styles.module.scss";
import { dictionaries } from "../dictionaries";
import { SupportForm } from "@/components/Forms/SupportForm";

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
            <h1>{strings.support.title}</h1>
            <div className={styles.contacts}>
                <div className={styles.contact}>
                    <span className={styles.title}>
                        {strings.support.phone}:
                    </span>
                    <span className={styles.value}>+380954517597</span>
                </div>
                <div className={styles.contact}>
                    <span className={styles.title}>E-mail:</span>
                    <span className={styles.value}>
                        danildiachenko23@gmail.com
                    </span>
                </div>
                <div className={styles.contact}>
                    <span className={styles.title}>
                        {strings.support.telegram}:
                    </span>
                    <span className={styles.value}>@danil_diachenko</span>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.feedback}>
                    <h2>{strings.support.feeback.title}</h2>
                    <SupportForm strings={strings} />
                </div>
                <div className={styles.faq}>
                    <h2>{strings.support.faq.title}</h2>
                    <Faq faq={strings.support.faq.faq} />
                </div>
            </div>
        </>
    );
};

export default Page;
