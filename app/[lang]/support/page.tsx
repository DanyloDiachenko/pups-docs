import { Faq } from "@/components/Faq";
import styles from "./styles.module.scss";
import { dictionaries } from "../dictionaries";

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
                    <form className={styles.form}>
                        <label htmlFor="name">
                            <input
                                name="name"
                                type="text"
                                placeholder={strings.support.feeback.yourName}
                                required
                            />
                        </label>
                        <label htmlFor="email">
                            <input
                                name="email"
                                type="email"
                                placeholder={strings.support.feeback.yourEmail}
                                required
                            />
                        </label>
                        <label htmlFor="topic">
                            <input
                                name="topic"
                                type="text"
                                placeholder={strings.support.feeback.topic}
                                required
                            />
                        </label>
                        <label htmlFor="message">
                            <textarea
                                name="message"
                                placeholder={strings.support.feeback.message}
                                required
                            />
                        </label>
                        <button type="submit" className={styles.button}>
                            {strings.support.feeback.submit}
                        </button>
                    </form>
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
