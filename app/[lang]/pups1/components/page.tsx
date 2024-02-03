import { dictionaries } from "../../dictionaries";
import styles from "./styles.module.scss";

interface PageProps {
    params: {
        lang: string;
    };
}

const Page = async ({ params }: PageProps) => {
    const language = params.lang;

    const strings = dictionaries[language as keyof typeof dictionaries];

    const totalPrice = strings.components.items.reduce(
        (acc, current) => acc + current.pricePerOne * current.quantity,
        0,
    );

    return (
        <>
            <h1>{strings.components.title}</h1>
            <p>{strings.components.note}</p>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.name}>
                                {strings.components.tableHeaders.name}
                            </th>
                            <th className={styles.pricePerOne}>
                                {strings.components.tableHeaders.pricePerOne}
                            </th>
                            <th className={styles.quantity}>
                                {strings.components.tableHeaders.quantity}
                            </th>
                            <th className={styles.priceFull}>
                                {strings.components.tableHeaders.totalPrice}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {strings.components.items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td className={styles.tdSecond}>
                                    {item.pricePerOne.toFixed(2)}
                                </td>
                                <td>{item.quantity}</td>
                                <td className={styles.tdFourth}>
                                    {(item.pricePerOne * item.quantity).toFixed(
                                        2,
                                    )}
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
            </div>
        </>
    );
};

export default Page;
