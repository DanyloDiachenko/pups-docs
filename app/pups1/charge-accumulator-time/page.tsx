import styles from "./page.module.scss";

const Page = () => {
    return (
        <>
            <h1>Заряджання зарядної станції «PUPS» v.1</h1>
            <p className={styles.description}>
                Визначимо час зарядки АКБ. Плата зарядки приймає 220 вольт та на
                виході видає 12.6 вольт 5 ампер, тобто акумулятори заряджаються
                із напругою 12.6 вольт та силою струму 5 ампер. АКБ станції було
                розряджено до напруги 9.5 вольт, що є нижньою напругою
                акумуляторної системи. Станція заряджалась з 9.5 вольт до 12.6
                вольт упродовж, приблизно, 9 годин.
                <br />
                Процес заряжання зарядної станції наведено на фото нижче:
            </p>
            <img
                className={styles.image}
                src="/pups1/charge-pups.jpg"
                alt="Процес зарядки станції фото"
            />
        </>
    );
};

export default Page;
