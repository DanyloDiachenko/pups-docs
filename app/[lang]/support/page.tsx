import { Faq } from "@/components/Faq";
import styles from "./styles.module.scss";
import { supportFaq } from "./faq";

const Page = () => {
    return (
        <>
            <h1>Підтримка</h1>
            <div className={styles.contacts}>
                <div className={styles.contact}>
                    <span className={styles.title}>Телефон:</span>
                    <span className={styles.value}>+380954517597</span>
                </div>
                <div className={styles.contact}>
                    <span className={styles.title}>E-mail:</span>
                    <span className={styles.value}>
                        danildiachenko23@gmail.com
                    </span>
                </div>
                <div className={styles.contact}>
                    <span className={styles.title}>Телеграм:</span>
                    <span className={styles.value}>@danil_diachenko</span>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.feedback}>
                    <h2>Зворотній зв`язок</h2>
                    <form className={styles.form}>
                        <label htmlFor="name">
                            <input
                                name="name"
                                type="text"
                                placeholder="Ваше Ім`я"
                                required
                            />
                        </label>
                        <label htmlFor="email">
                            <input
                                name="email"
                                type="email"
                                placeholder="Ваше E-mail"
                                required
                            />
                        </label>
                        <label htmlFor="topic">
                            <input
                                name="topic"
                                type="text"
                                placeholder="Тема"
                                required
                            />
                        </label>
                        <label htmlFor="message">
                            <textarea
                                name="message"
                                placeholder="Повідомлення"
                                required
                            />
                        </label>
                        <button type="submit" className={styles.button}>
                            Відправити
                        </button>
                    </form>
                </div>
                <div className={styles.faq}>
                    <h2>Можливі питання</h2>
                    <Faq faq={supportFaq} />
                </div>
            </div>
        </>
    );
};

export default Page;
