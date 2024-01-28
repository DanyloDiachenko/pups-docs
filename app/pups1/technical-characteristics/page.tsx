import styles from "./styles.module.scss";
import { technicalCharacteristics } from "./technicalCharacteristics";

const Page = () => {
    return (
        <>
            <h1>Технічні характеристики зарядної станції «PUPS» v.1</h1>
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
