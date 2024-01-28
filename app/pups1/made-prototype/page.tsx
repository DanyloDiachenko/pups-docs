import styles from "./styles.module.scss";

const Page = () => {
    return (
        <>
            <h1>Виготовлений прототип зарядної станції «PUPS» v.1</h1>
            <div className={styles.images}>
                <img
                    src="/pups1/proto1.jpg"
                    alt="Прототип зарядної станції «PUPS» v.1"
                />
                <img
                    src="/pups1/proto2.jpg"
                    alt="Прототип зарядної станції «PUPS» v.1"
                />
            </div>
        </>
    );
};

export default Page;
