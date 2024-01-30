import Link from "next/link";
import styles from "./styles.module.scss";

const Page = () => {
    return (
        <>
            <h1>
                Відгук від військових щодо передачі зарядної станції «PUPS» v.1
            </h1>
            <ul className={styles.list}>
                <li>
                    <h2>1. Відгук про отримання зарядної станції «PUPS» v.1</h2>
                    <div className={styles.videoText}>
                        <iframe
                            allow="fullscreen"
                            allowFullScreen
                            src="https://streamable.com/e/gieu43?"
                            className={styles.video}
                        ></iframe>
                        <p>
                            «Так, доброго дня. Отримали таку «банку, готується
                            до бойового виїзду від Дяченка Данила з інструкцією.
                            Дуже дякуємо. Вона буде працювати вже зараз.
                            Присилайте ще, якщо буде можливість»
                        </p>
                    </div>
                    <p>
                        Після цього позитивного відгуку та запиту про можливість
                        надати їм ще одну схожу зарядну станцію, ми вирішили
                        розробити та виготовити ще один схожий пристрій. Процес
                        розробки наведено на сторінці зарядної станції «PUPS»
                        v.2{" "}
                        <Link href="/pups2/manufacturing-proccess">
                            Процес розробки «PUPS» v.2
                        </Link>
                        .
                    </p>
                </li>
                <li>
                    <h2>2. Відгук про доробку зарядної станції «PUPS» v.1</h2>
                    <div className={styles.videoTextSm}>
                        <iframe
                            allow="fullscreen"
                            allowFullScreen
                            src="https://streamable.com/e/h2maom?"
                            className={styles.videoSmall}
                        ></iframe>
                        <p>
                            «Виходів більше не потрібно, не потрібна ота
                            розетка… на… прикурювач, то єсть 2 – 4 USB швидкі
                            виходи достатньо і забагато тумблєров. В мене люди…
                            потірялись, що клацать…»
                        </p>
                    </div>
                    <p>
                        Після отримання станції назад, ми провели аналіз її
                        стану після використання в умовах військових операцій.
                        Фото зарядної станції після двотижневого використання
                        наведено на сторінці{" "}
                        <Link href="/pups1/after-using">
                            Станція після використання
                        </Link>
                        . З метою поліпшення функціональності та відповідності
                        потребам військового використання за їхнім запитом, ми
                        внесли наступні зміни:{" "}
                        <Link href="/pups1.5/improvements">
                            Процес доробки станції «PUPS» v.1
                        </Link>
                        .
                    </p>
                </li>
            </ul>
        </>
    );
};

export default Page;
