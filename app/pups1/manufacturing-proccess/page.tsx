import Link from "next/link";

import styles from "./page.module.scss";

const Page = () => {
    return (
        <>
            <h1>Процес виготовлення зарядної станції «PUPS» v.1</h1>
            <ol className={styles.list}>
                <li>
                    <h2>1. Планування майбутніх характеристик</h2>
                    <p>
                        Попередньо заплановано основні характеристики майбутньої
                        станції, які б задовольнили наші потреби в її подальшому
                        використанні. Такі як: можливість заряджати телефони,
                        ноутбуки, безпілотники; можливість живлення від розетки
                        прикурювача через адаптер; наявність мережі 220 вольт із
                        середньою потужністю.
                    </p>
                </li>
                <li>
                    <h2>2. Придбання компонентів</h2>
                    <p>
                        Було обрано та придбано основні компоненти для її
                        створення, такі як: інвертор, корпус, зарядний пристрій,
                        акумулятори тощо. Перелік усіх придбаних компонентів та
                        їх цін наведено на сторінці{" "}
                        <Link href="/pups1/components">
                            придбаних компонентів
                        </Link>
                        .<br />
                    </p>
                </li>
                <li>
                    <h2>3. Розробка схеми з`єднань</h2>
                    <p>
                        Відповідно було розроблено принципову схему
                        запланованого прототипу зарядної станції.
                    </p>
                    <img src="/pups1/scheme.png" alt="Схема фото" />
                    <ol className={styles.shcemeNumbers}>
                        <li>1. Акумуляторна батарея</li>
                        <li>2. Плата зарядного пристрою</li>
                        <li>3. Вхід для заряджання станції</li>
                        <li>4. 4.1, 4,2 - Кулер для охолодження</li>
                        <li>5. Інвентор напруги</li>
                        <li>6. Вихід мережі 220 вольт</li>
                        <li>7. Подвійний вихід USB</li>
                        <li>8. Розетка прикурювача</li>
                        <li>9. Індикатор заряду батареї</li>
                        <li>10. SA1, SA2, SA3, SA4 - вимикачі</li>
                    </ol>
                </li>
                <li>
                    <h2>4. Виготовлення акумуляторної батареї</h2>
                    <p>
                        Для створення АКБ були обрані літій-полімерні
                        акумулятори з напругою в діапазоні 3.7 – 4.2 вольт та
                        ємністю 10000 міліампер-годин. З метою забезпечення
                        більшої ємності для системи було обрано рішення
                        виготовити 3 окремі акумуляторні блоки, кожен з яких
                        складався з 5 акумуляторів, які були з’єднані
                        паралельно, забезпечуючи ємність 50000 міліампер-годин
                        для кожного з них.
                    </p>
                    <p>
                        Для підвищення вихідної напруги до необхідних 12.6 вольт
                        було виконане послідовне з’єднання вище описаних трьох
                        акумуляторних блоків.
                    </p>
                </li>
                <li>
                    <h2>
                        5. Під’єднання до плати балансування та виведення дротів
                    </h2>
                    <p>
                        акумуляторну систему було інтегровано з BMS-платою, яку
                        було модифіковано для роботи в 3S конфігурації. Від
                        акумулятора та BMS-плати було прокладено дві пари
                        кабелів: одну для виводу струму, а іншу – для процесу
                        заряджання.
                    </p>
                </li>
                <li>
                    <h2>6. Ізоляція акумуляторної системи</h2>
                    <p>
                        Виготовлена акумуляторна система була захищена за
                        допомогою пластикового картону та додатково ізольована
                        за допомогою армованої стрічки, що забезпечило її захист
                        від зовнішніх факторів та підвищену безпеку при
                        експлуатації. Габаритні розміри завершеної акумуляторної
                        системи складають 150x162x90 міліметрів.
                    </p>
                    <p>
                        Розроблену акумулятону систему в корпусі зображено
                        нижче:
                    </p>
                    <img src="/pups1/acb.jpg" alt="Акумуляторна батарея фото" />
                </li>
                <li>
                    <h2>7. Встановлення плати для заряджання</h2>
                    <p>
                        Для заряджання акумуляторної системи було встановлено
                        модуль (плату) зарядного пристрою в корпус. Щоб
                        запобігти перегріву під час заряджання, вмикається
                        охолоджувальний вентилятор, який також під’єднаний до
                        плати зарядки. У модулі зарядного пристрою присутній
                        один індикаторний світлодіод червоного кольору, який
                        сигналізує, що триває процес заряджання.
                    </p>
                </li>
                <li>
                    <h2>8. Управління виходами станції</h2>
                    <p>
                        Для заряджання акумуляторної системи було встановлено
                        модуль (плату) зарядного пристрою в корпус. Щоб
                        запобігти перегріву під час заряджання, вмикається
                        охолоджувальний вентилятор, який також під’єднаний до
                        плати зарядки. У модулі зарядного пристрою присутній
                        один індикаторний світлодіод червоного кольору, який
                        сигналізує, що триває процес заряджання.
                    </p>
                </li>
                <li>
                    <h2>9. Розробка входів та виходів</h2>
                    <p>
                        Останнім етапом створення зарядної станції було
                        проєктування та виріз отворів для портів у корпусі.
                        Корпус було використано так, щоб максимально
                        оптимізувати простір для розміщення компонентів,
                        забезпечуючи при цьому легкий доступ до входів для
                        заряджання та виходів для живлення різних пристроїв.
                        Вхід для зарядки та вихід для інвертора було розташовано
                        з одного боку, тоді як інші виходи, такі як USB,
                        індикатор заряду та вихід прикурювача, було розміщено
                        вгорі корпусу для зручності використання.
                    </p>
                </li>
                <br />
                <p>
                    Також у корпусі було створено спеціальні отвори для
                    вентиляції; кріплення для монтажу різних компонентів
                    усередині корпусу. Фото розробленого прототипу зарядної
                    станції першої версії можна побачити, перейшовши за{" "}
                    <Link href="/pups1/made-prototype">посиланням</Link>.
                </p>
            </ol>
        </>
    );
};

export default Page;
