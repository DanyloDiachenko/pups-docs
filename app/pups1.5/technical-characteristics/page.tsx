import Link from "next/link";
import styles from "./styles.module.scss";
import { technicalCharacteristics } from "./technicalCharacteristics";

const Page = () => {
    return (
        <>
            <h1>Технічні характеристики зарядної станції «PUPS» v.1.5</h1>
            <p className={styles.mainDescription}>
                Технічні зарядної станції «PUPS» v.1.5 аналогічні
                характеристиками зарядної станції «PUPS» v.1 -{" "}
                <Link href="/pups1/technical-characteristics">
                    Тех. характеристики «PUPS» v.1
                </Link>{" "}
                , за виключенням заміни порту прикурювача на подвійний швидкий
                порт USB Quick-Charge 3.0
            </p>
            <ol className={styles.list}>
                {technicalCharacteristics.map((techChar, index) => (
                    <li key={index}>
                        <p className={styles.key}>{techChar.name}</p>
                        <p className={styles.value}>{techChar.value}</p>
                    </li>
                ))}
            </ol>
        </>
    );
};

export default Page;
