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

    const totalPrice = strings.additionalComponents.components.reduce(
        (acc, current) => acc + current.pricePerOne * current.quantity,
        0,
    );

    return (
        <>
            <h1>{strings.additionalComponents.title}</h1>
            <p className={styles.description}>
                {strings.additionalComponents.description} <br />
                {strings.additionalComponents.descriptionAddtional}
            </p>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.name}>
                            {strings.additionalComponents.thName}
                        </th>
                        <th className={styles.pricePerOne}>
                            {strings.additionalComponents.thPricePerOne}
                        </th>
                        <th className={styles.quantity}>
                            {strings.additionalComponents.thQuantity}
                        </th>
                        <th className={styles.priceFull}>
                            {strings.additionalComponents.thPriceFull}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {strings.additionalComponents.components.map(
                        (item, index) => (
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
                        ),
                    )}
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
