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

    const totalPrice = strings.components2.components.reduce(
        (acc, current) => acc + current.pricePerOne * current.quantity,
        0,
    );

    return (
        <>
            <h1>{strings.components2.title}</h1>
            <p className={styles.description}>
                {strings.components2.description} <br />
                {strings.components2.descriptionAddtional}
            </p>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.name}>
                            {strings.components2.thName}
                        </th>
                        <th className={styles.pricePerOne}>
                            {strings.components2.thPricePerOne}
                        </th>
                        <th className={styles.quantity}>
                            {strings.components2.thQuantity}
                        </th>
                        <th className={styles.priceFull}>
                            {strings.components2.thPriceFull}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {strings.components2.components.map((item, index) => (
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
