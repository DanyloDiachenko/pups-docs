import Link from "next/link";
import styles from "./styles.module.scss";

const Page = () => {
    return (
        <>
            <h1>Зарядна станція «PUPS» v.1 після використання</h1>
            <p className={styles.descriptionMain}>
                Після отримання станції назад, ми провели аналіз її стану після
                використання в умовах військових операцій, на якій було видно
                сліди використання.
                <br />
                Фото отриманої зарядної станції наведено на фото нижче:
            </p>
            <div className={styles.photos}>
                <img
                    src="/pups1/after-using1.jpg"
                    alt="Зарядна станція «PUPS» v.1 після використання"
                />
                <img
                    src="/pups1/after-using2.jpg"
                    alt="Зарядна станція «PUPS» v.1 після використання"
                />
                <img
                    src="/pups1/after-using3.jpg"
                    alt="Зарядна станція «PUPS» v.1 після використання"
                />
                <img
                    src="/pups1/after-using4.jpg"
                    alt="Зарядна станція «PUPS» v.1 після використання"
                />
            </div>
        </>
    );
};

export default Page;
