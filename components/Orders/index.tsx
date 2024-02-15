"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import styles from "./styles.module.scss";
import { OrdersProps } from "./component.props";
import { DeleteOrderApi } from "@/api/deleteOrder.api";

export const Orders = ({ orders }: OrdersProps) => {
    console.log(orders);
    const router = useRouter();

    const onDeleteOrderClick = async (orderId: number) => {
        const response = await DeleteOrderApi.deleteOrder(orderId);

        if (response.data) {
            toast.success("Замовлення видалено успішно!");

            router.refresh();
        } else {
            toast.error(response.error);
            console.log(response);
        }
    };

    const formatDate = (dateString: Date) => {
        const date = new Date(dateString);

        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day > 9 ? day : `0${day}`}.${
            month > 9 ? month : `0${month}`
        }.${year}`;
    };

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
                        <th>Видалити</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>
                                {order.readyPupsVersion
                                    ? `«PUPS» v.${order.readyPupsVersion}`
                                    : "Кастом"}
                            </td>
                            <td>{order.capacity}</td>
                            <td>{order.power}</td>
                            <td>{order.usbQuantity}</td>
                            <td>{order.typecQuantity}</td>
                            <td>{order.status}</td>
                            <td>{formatDate(order.createdAt)}</td>
                            <td className={styles.buttonTd}>
                                <button
                                    onClick={() => onDeleteOrderClick(order.id)}
                                >
                                    Видалити
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
