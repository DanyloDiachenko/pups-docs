import styles from "./styles.module.scss";
import { shorts } from "./shorts";

const Page = () => {
    return (
        <>
            <h1>Перелік умовних позначень, скорочень</h1>
            <ol className={styles.list}>
                {shorts.map((short, index) => (
                    <li key={index}>
                        <p className={styles.key}>{short.name}</p>
                        <p className={styles.value}>{short.value}</p>
                    </li>
                ))}
            </ol>
        </>
    );
};

export default Page;
