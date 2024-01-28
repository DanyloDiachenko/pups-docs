import { Faq } from "@/components/Faq";
import styles from "./styles.module.scss";

const Page = () => {
    return (
        <>
            <h1>Інструкція використання зарядної станції «PUPS» v.1</h1>
            <ul className={styles.list}>
                <li className={styles.listLi}>
                    <h2>1. Схематичне зображення верхньої проекції станції</h2>
                    <img
                        src="/pups1/top-scheme.png"
                        alt="Схематичне зображення верхньої проекції станції"
                    />
                    <ul className={styles.subUl}>
                        <li>1. Вимикач індикатора АКБ (2)</li>
                        <li>2. Індикатор заряду АКБ</li>
                        <li>
                            3. Вимикач автомобільной розетки прикурювача (4)
                        </li>
                        <li>4. Автомобільна розетка прикурювач</li>
                        <li>5. Вимикач розгалужувача порту USB (5)</li>
                        <li>
                            6. Розгалужувач портів USB 7. Отвори для вентиляції
                        </li>
                    </ul>
                </li>
                <li className={styles.listLi}>
                    <h2>
                        2. Схематичне зображення бокової та передньої проекції
                        станції
                    </h2>
                    <img
                        src="/pups1/scheme-left.png"
                        alt="Схематичне зображення бокової та передньої проекції станції"
                    />
                    <ul className={styles.subUl}>
                        <li>1. Кулер</li>
                        <li>
                            2. Вхід для зарядки станції від розетки 220 вольт
                        </li>
                        <li>3. Вихід розетки 220 вольт</li>
                        <li>4. Вимикач порту розетки 220 вольт (3)</li>
                    </ul>
                </li>
                <li className={styles.listLi}>
                    <h2>3. Вимикач-порт</h2>
                    <p>
                        Кожен порт оснащено окремим перемикачем. Для активації
                        порту необхідно перемкнути відповідний вимикач так, щоб
                        він був увімкнений у лінійному положенні. Якщо перемикач
                        перебуває у круглому положенні, це означає, що порт
                        вимкнено.
                    </p>
                    <p>
                        Коли активуєте USB порт, поруч з ним загоряється
                        LED-індикатор. Роботу інвертора та наявність напруги в
                        розетці 220 вольт сигналізує автоматично ввімкнений
                        кулер. Під час підключення зарядної станції до джерела
                        зарядки автоматично активується вентилятор і запалюється
                        червоний світлодіод, який вимикається після повного
                        заряджання АКБ станції.
                        <br />* Розетка прикурювача не оснащена LED-індикатором.
                    </p>
                </li>
                <li className={styles.listLi}>
                    <h2>4. Техніка безпеки</h2>
                    <ul className={styles.subUl}>
                        <li>
                            1. Не використовуйте пристрій поблизу джерел тепла,
                            таких як джерела вогню або печі.
                        </li>
                        <li>
                            2. Не допускайте контакту з рідинами. Не занурюйте
                            пристрій у воду, не допускайте намокання. Не
                            використовуйте пристрій під дощем або під час снігу.
                        </li>
                        <li>
                            3. Не використовуйте пристрій за умов сильного
                            електростатичного/магнітного поля.
                        </li>
                        <li>
                            4. Якщо ви не маєте досвіду в електротехніці, не
                            намагайтеся відкривати пристрій. Категорично
                            заборонено відкривати зарядну станцію під час її
                            роботи або заряджання.
                        </li>
                        <li>
                            5. При роботі з пристроєм суворо дотримуйтесь вимог
                            щодо температури робочого середовища, зазначених у
                            цьому посібнику. За надто високої температури
                            середовища виникає ризик пожежі або вибуху; за надто
                            низької температури продуктивність акумулятора може
                            значно знизитися, або він може припинити
                            функціонування.
                        </li>
                        <li>
                            6. Не блокуйте вентилятор під час роботи. Не бажано
                            залишати пристрій на запилених непровітрюваних
                            ділянках на довгий час.
                        </li>
                        <li>
                            7. Захищайте пристрій від ударів, падіння або
                            сильних вібрацій у процесі експлуатації. При
                            сильному зовнішньому ударному впливі відразу ж
                            вимкніть живлення та припиніть роботу. Забезпечте
                            надійне кріплення акумулятора під час
                            транспортування для захисту від вібрацій та ударів.
                        </li>
                        <li>
                            8. Тримайте зарядну станцію поза зоною доступу дітей
                            та домашніх тварин.
                        </li>
                    </ul>
                </li>
                <li className={styles.listLi}>
                    <h2>5. Можливі запитання</h2>
                    <Faq />
                </li>
            </ul>
        </>
    );
};

export default Page;
