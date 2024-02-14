import styles from "./styles.module.scss";
import { OrdersProps } from "./component.props";

export const Orders = ({ orders }: OrdersProps) => {
    console.log(orders);

    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Тип</th>
                        <th>
                            Ємність <br />
                            АКБ
                        </th>
                        <th>
                            Потужність
                            <br />
                            номінальна
                        </th>
                        <th>
                            Кількість
                            <br />
                            USB QC 3.0
                        </th>
                        <th>
                            Кількість
                            <br />
                            Type-C PD
                        </th>
                        <th>
                            Статус
                            <br />
                            замовлення
                        </th>
                        <th>
                            Дата
                            <br />
                            створення
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Конструктор</td>
                        <td>40000</td>
                        <td>250</td>
                        <td>2</td>
                        <td>3</td>
                        <td>Прийняте</td>
                        <td>14.02.2024</td>
                    </tr>
                    <tr>
                        <td>Конструктор</td>
                        <td>40000</td>
                        <td>250</td>
                        <td>2</td>
                        <td>3</td>
                        <td>Прийняте</td>
                        <td>14.02.2024</td>
                    </tr>
                    <tr>
                        <td>Конструктор</td>
                        <td>40000</td>
                        <td>250</td>
                        <td>2</td>
                        <td>3</td>
                        <td>Прийняте</td>
                        <td>14.02.2024</td>
                    </tr>
                    <tr>
                        <td>Конструктор</td>
                        <td>40000</td>
                        <td>250</td>
                        <td>2</td>
                        <td>3</td>
                        <td>Прийняте</td>
                        <td>14.02.2024</td>
                    </tr>
                    <tr>
                        <td>Конструктор</td>
                        <td>40000</td>
                        <td>250</td>
                        <td>2</td>
                        <td>3</td>
                        <td>Прийняте</td>
                        <td>14.02.2024</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
