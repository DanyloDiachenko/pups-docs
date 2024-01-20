import { components } from "./components";
import styles from "./page.module.scss";

const Page = () => {
    const totalPrice = components.reduce(
        (acc, current) => acc + current.pricePerOne * current.quantity,
        0,
    );

    return (
        <>
            <h1>Компоненти зарядної станції «PUPS» v.1</h1>
            <p className={styles.description}>
                Ціни вказано на момент вересня-жовтня 2023 року
            </p>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.name}>Назва</th>
                        <th className={styles.pricePerOne}>Ціна/штуку</th>
                        <th className={styles.quantity}>Кількість</th>
                        <th className={styles.priceFull}>Ціна повна</th>
                    </tr>
                </thead>
                <tbody>
                    {components.map((item, index) => (
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td className={styles.tdSecond}>
                                {item.pricePerOne.toFixed(2)}
                            </td>
                            <td>{item.quantity}</td>
                            <td className={styles.tdFourth}>
                                {(item.pricePerOne * item.quantity).toFixed(2)}
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <strong className={styles.total}>
                                {totalPrice.toFixed(2)}
                            </strong>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Page;
