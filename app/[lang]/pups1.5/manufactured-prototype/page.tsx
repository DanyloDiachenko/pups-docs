import styles from "./styles.module.scss";

const Page = () => {
    return (
        <>
            <h1>Фото зарядної станції «PUPS» v.1.5</h1>
            <div className={styles.photos}>
                <img
                    src="/pups1.5/proto3.jpeg"
                    alt="Зарядна станція «PUPS» v.1.5"
                />
                <img
                    src="/pups1.5/proto2.jpeg"
                    alt="Зарядна станція «PUPS» v.1.5"
                />
            </div>
        </>
    );
};

export default Page;
