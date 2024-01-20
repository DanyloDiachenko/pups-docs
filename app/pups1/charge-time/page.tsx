import styles from "./page.module.scss";

const Page = () => {
    return (
        <>
            <h1>Час зарядки пристроїв від зарядної станції «PUPS» v.1</h1>
            <ol className={styles.list}>
                <li>
                    <h2>
                        1. Визначення часу зарядки телефону від порту USB 5
                        вольт 1 ампер
                    </h2>
                    <p>
                        Було розраховано час зарядки телефону, використовуючи
                        порт USB 5 вольт 1 ампер. Ємність АКБ телефону становить
                        4500 міліампер-годин, і дорівнює 4.5 ампер-годин. Сила
                        струму порту USB становить 1 ампер.
                    </p>
                    <p>
                        t<span className={styles.small}>зарядки</span> = Q
                        <span className={styles.small}>телефона</span> / I
                        <span className={styles.small}>порту</span> = 4.5 / 1 =
                        4.5 (години)
                    </p>
                </li>
                <li>
                    <h2>
                        2. Визначення часу зарядки телефону від порту USB 5
                        вольт 2.1 ампера
                    </h2>
                    <p>
                        Було розраховано час зарядки телефону, використовуючи
                        порт USB 5 вольт 2.1 ампера. Ємність АКБ телефону
                        становить 4500 міліампер-годин, і дорівнює 4.5
                        ампер-годин. Сила струму порту USB становить 2.1 ампер.
                    </p>
                    <p>
                        t<span className={styles.small}>зарядки</span> = Q
                        <span className={styles.small}>телефона</span> / I
                        <span className={styles.small}>порту</span> = 4.5 / 2.1
                        = 2.14 (години)
                    </p>
                    <p>Процес заряджання телефону наведено нижче:</p>
                </li>
            </ol>
            <img className={styles.image} src="/pups1/charge-phone.jpg" alt="Заряджання телефону від порту USB 2.1 ампера" />
        </>
    );
};

export default Page;
