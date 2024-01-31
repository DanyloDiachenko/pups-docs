import styles from "./styles.module.scss";

const Page = () => {
    return (
        <>
            <h1>Про наукову роботу</h1>
            <p>
                Автор: Дяченко Данило Олександрович, учень 11-А класу
                комунальної організації (установи, закладу) «Шосткинська
                загальноосвітня школа І-ІІІ ступенів №4 Шосткинської міської
                ради Сумської області»; вихованець гуртка «Радіоелектроніка»
                комунальної організації (установи, закладу) «Шосткинська станція
                юних техніків Шосткинської міської ради Сумської області».
            </p>
            <p className={styles.descriptionAddtional}>
                Після спалаху повномасштабної війни стало очевидним, що
                забезпечення джерелами електроенергії стало однією з
                найактуальніших проблем як у повсякденному цивільному житті, так
                і у військових операціях. Протягом останніх двох років моє
                дослідження було присвячено питанням створення надійних джерел
                електроенергії з метою постійного удосконалення їх
                характеристик.
            </p>
            <p className={styles.descriptionAddtional}>
                Крім того, через постійні відключення електропостачання, що
                мають місце в Україні вже третій рік поспіль, було вирішено
                зосередити зусилля на розробці більш потужного, переносного та
                доступного з економічної точки зору джерела електроенергії для
                задоволення різних повсякденних потреб та забезпечення стійкої
                роботи в умовах відсутності основного електропостачання.
            </p>
            <ul className={styles.list}>
                <li>
                    <h2>1. Актуальність теми</h2>
                    <p>
                        Актуальність обраної теми визначається можливістю
                        ефективного впровадження інноваційної, відносно дешевої
                        саморобної станції, яка здатна зберігати електричну
                        енергію протягом тривалого періоду та піддаватися
                        повторному заряджанню. Цей пристрій знайшов застосування
                        як у повсякденних господарських справах, так і в умовах
                        невідкладних ситуацій та в контексті військових дій.
                    </p>
                </li>
                <li>
                    <h2>2. Мета роботи</h2>
                    <p>
                        Мета даної дослідницької роботи полягає в розробці
                        доступної з точки зору вартості, легкої у виготовленні
                        та простою у використанні портативної зарядної станції.
                        Подальшою метою є демонстрація її ефективності та
                        практичної придатності у різноманітних ситуаціях.
                    </p>
                </li>
                <li>
                    <h2>3. Основні завдання</h2>
                    <ul className={styles.subUl}>
                        <li>
                            <p>
                                1. Відбір необхідних компонентів для створення
                                зарядної станції.
                            </p>
                        </li>
                        <li>
                            <p>
                                2. Розробка самої станції на основі обраних
                                компонентів.
                            </p>
                        </li>
                        <li>
                            <p>
                                3. Експериментальне та теоретичне підтвердження
                                можливостей використання створеного пристрою для
                                різних цілей.
                            </p>
                        </li>
                        <li>
                            <p>
                                4. Визначення основних технічних характеристик
                                станції, порівняння їх з промисловими аналогами
                                та розгляд майбутніх напрямків розвитку проєкту,
                                консультації з військовими.
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <h2>4. Об'єкт роботи</h2>
                    <p>
                        Об'єктом наукового вивчення є розроблений прототип
                        зарядної станції, як високоефективне джерело
                        електроенергії середньої потужності, призначене для
                        зарядки різних видів електричних пристроїв.
                    </p>
                </li>
                <li>
                    <h2>5. Предмет роботи</h2>
                    <p>
                        Предмет дослідження полягає у вивченні можливостей та
                        переваг використання саморобної станції, сконструйованої
                        для забезпечення електроенергією, як стійкого та
                        надійного джерела.
                    </p>
                </li>
                <li>
                    <h2>6. Наукова новизна</h2>
                    <p>
                        Наукова новизна цього дослідження полягає в
                        експериментальному створенні інноваційної, відносно
                        дешевої станції середньої потужності, призначеної для
                        багаторазового використання. Розробка має потенціал
                        стати корисною у різних сферах, включаючи домашні та
                        побутові потреби, військові застосування, туристичні
                        умови та у випадку відключень електропостачання.
                    </p>
                </li>
                <li>
                    <h2>7. Практичне застосування</h2>
                    <p>
                        Практичне застосування полягає в можливості заряджання
                        смартфонів, ноутбуків, планшетів, ліхтариків, резервних
                        джерел живлення, приладів нічного бачення, безпілотників
                        та інших електричних пристроїв; використання, як
                        безперебійного джерела живлення; для освітлення оселі; в
                        окопах, опорних пунктах, блокпостах та інших місцях з
                        обмеженим електропостачанням.
                    </p>
                </li>
                <li>
                    <h2>8. Висновки роботи</h2>
                    <p>
                        Важливі висновки цього дослідження включають успішне
                        виготовлення інноваційної, економічно-доступної зарядної
                        станції середньої потужності; проведення дослідів із
                        застосуванням її для різних потреб; розрахунок основних
                        характеристик пристрою, визначення його переваг та
                        недоліків, порівняння з аналогами, обрання майбутніх
                        шляхів розвитку проєкту, успішно проведені консультації
                        з військовими.
                    </p>
                </li>
            </ul>
        </>
    );
};

export default Page;
