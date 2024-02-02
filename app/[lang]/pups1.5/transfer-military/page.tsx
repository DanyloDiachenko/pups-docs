import styles from "./styles.module.scss";

const Page = () => {
    return (
        <>
            <h1>Передача військовим зарядної станції «PUPS» v.1.5</h1>
            <p className={styles.descriptionMain}>
                Після завершення процесу модифікації, ми повторно передали цей
                вдосконалений пристрій тому самому військовому підрозділу.
            </p>
            <p className={styles.description}>
                (Фотозвіт військвого про отримання зарядної станції «PUPS» v.1.5
                поки, на жаль, не отримали)
            </p>
        </>
    );
};

export default Page;
