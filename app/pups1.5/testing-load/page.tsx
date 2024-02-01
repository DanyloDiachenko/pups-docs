import Link from "next/link";
import styles from "./styles.module.scss";

const Page = () => {
    return (
        <>
            <h1>Тестування зарядної станції «PUPS» v.1.5</h1>
            <p className={styles.mainDescription}>
                На сторінці наведено лише тестування нового порту USB QC 3.0.
                Тестування інших портів наведено на сторінці{" "}
                <Link href="/pups1/testing-load">
                    Тестування зарядної станції «PUPS» v.1
                </Link>
            </p>
            <ol className={styles.list}>
                <li>
                    <h2>1. Перевірка порту USB QC 3.0</h2>
                    <p>
                        Була проведена зарядка телефону, ємністю 4500
                        міліампер-годин, використовуючи порт USB 5 вольт
                        Quick-Charge 3.0. ККД порту USB при максимальному
                        навантаженні приблизно дорівнює 88%.
                    </p>
                    <p>
                        Q<span className={styles.small}>зарядки</span> = Q
                        <span className={styles.small}>телефона</span> + Q
                        <span className={styles.small}>телефона</span> * (100% -
                        n<span className={styles.small}>модуля</span>) = 4500 +
                        4500 * 13% = 4500 + 585 = 5085 (міліампер-годин)
                    </p>
                </li>
                <li>
                    <h2>
                        2. Кількість циклів зарядки телефону від порту USB QC
                        3.0
                    </h2>
                    <p>
                        Було визначено кількість циклів заряду від USB QC 3.0.
                        Для експерименту використовувався аналогічний телефон.
                        Ємність, витрачена на його зарядку, становить 5015
                        міліампер-годин (див. попередній пункт), тобто Q
                        <span className={styles.small}>зарядки</span> дорівнює
                        5085 міліампер-годин.
                    </p>
                    <p>
                        N = Q<span className={styles.small}>робоча</span> / Q
                        <span className={styles.small}>зарядки</span> = 40000 /
                        5815 = 6.88 - разів можливо зарядити телефон
                    </p>
                </li>
                <li>
                    <h2>
                        3.Визначення часу зарядки телефону від порту USB QC 3.0
                    </h2>
                    <p>
                        Було розраховано час зарядки телефону, використовуючи
                        порт USB QC 3.0. Ємність АКБ телефону становить 4500
                        міліампер-годин, і дорівнює 4.5 ампер-годин. Максимальна
                        сила струму порту USB становить 3.6 ампер, тобто I = 3.6
                        ампера.
                    </p>
                    <p>
                        t<span className={styles.small}>зарядки</span> = Q
                        <span className={styles.small}>телефону</span> / I
                        <span className={styles.small}>порту</span> = 4.5 / 2.1
                        = 1.25 (години)
                    </p>
                </li>
            </ol>
            <p className={styles.description}>
                На фото нижче наведено процес використання зарядної станції
                «PUPS» v.1.5.
            </p>
            <div className={styles.photos}>
                <img
                    src="/pups1.5/charge1.jpeg"
                    alt="Процес використання зарядної станції
                «PUPS» v.1.5"
                />
                <img
                    src="/pups1.5/charge2.jpeg"
                    alt="Процес використання зарядної станції
                «PUPS» v.1.5"
                />
            </div>
            <div className={styles.photosAdditional}>
                <img
                    src="/pups1.5/charge3.jpeg"
                    alt="Процес використання зарядної станції
                «PUPS» v.1.5"
                />
                <img
                    src="/pups1.5/charge4.jpeg"
                    alt="Процес використання зарядної станції
                «PUPS» v.1.5"
                />
                <img
                    src="/pups1.5/charge5.jpeg"
                    alt="Процес використання зарядної станції
                «PUPS» v.1.5"
                />
            </div>
        </>
    );
};

export default Page;
