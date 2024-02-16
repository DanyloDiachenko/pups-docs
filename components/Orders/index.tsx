"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import styles from "./styles.module.scss";
import { OrdersProps } from "./component.props";
import { DeleteOrderApi } from "@/api/deleteOrder.api";
import { IOrder, OrderStatus } from "@/interfaces/orders.interface";
import { Loader } from "../Loader";
import { getCookie } from "@/helpers/cookies.helper";

export const Orders = ({ orders, language, strings }: OrdersProps) => {
    const OrderStatusTranslations = {
        [OrderStatus.placed]: strings.profile.myOrders.table.status.placed,
        [OrderStatus.purchasingMaterials]:
            strings.profile.myOrders.table.status.purchasingMaterials,
        [OrderStatus.manufacturing]:
            strings.profile.myOrders.table.status.manufacturing,
        [OrderStatus.delivering]:
            strings.profile.myOrders.table.status.delivering,
        [OrderStatus.completed]:
            strings.profile.myOrders.table.status.completed,
    };

    const router = useRouter();

    const [ordersAll, setOrdersAll] = useState<IOrder[]>(orders);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onDeleteOrderClick = async (orderId: number) => {
        setIsLoading(true);

        const response = await DeleteOrderApi.deleteOrder(orderId);

        if (response.data) {
            toast.success("Замовлення скасовано успішно!");

            router.refresh();
        } else {
            toast.error(response.error);
            console.log(response);
        }

        setOrdersAll(orders);

        setIsLoading(false);
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

    const getOrders = async () => {
        const token = getCookie("token");

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/users/orders`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token || ""}`,
                    },
                },
            );

            if (response.ok) {
                const orders = await response.json();
                setOrdersAll(orders.data);
            } else {
                const responseData = await response.json();

                throw new Error(responseData.message);
            }
        } catch (error: any) {
            console.log(error);

            return { error: error.message ? error.message : "" };
        }
    };

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <div className={styles.tableWrapper}>
            {ordersAll.length ? (
                <>
                    <div className={styles.tableScroll}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>
                                        {strings.profile.myOrders.table.type}
                                    </th>
                                    <th>
                                        {
                                            strings.profile.myOrders.table
                                                .capacity
                                        }
                                        <br />
                                        {
                                            strings.profile.myOrders.table
                                                .capacityAdd
                                        }
                                    </th>
                                    <th>
                                        {strings.profile.myOrders.table.power}
                                        <br />
                                        {
                                            strings.profile.myOrders.table
                                                .powerAdd
                                        }
                                    </th>
                                    <th>
                                        {
                                            strings.profile.myOrders.table
                                                .usbQuantity
                                        }
                                        <br />
                                        USB QC 3.0
                                    </th>
                                    <th>
                                        {
                                            strings.profile.myOrders.table
                                                .typecQuantity
                                        }
                                        <br />
                                        Type-C PD
                                    </th>
                                    <th>
                                        {
                                            strings.profile.myOrders.table
                                                .isAutoLighter
                                        }
                                        <br />
                                        {
                                            strings.profile.myOrders.table
                                                .isAutoLighterAdd
                                        }
                                    </th>
                                    <th>
                                        {
                                            strings.profile.myOrders.table
                                                .status.title
                                        }
                                    </th>
                                    <th>
                                        {strings.profile.myOrders.table.price}
                                    </th>
                                    <th>
                                        {strings.profile.myOrders.table.created}
                                        <br />
                                        {
                                            strings.profile.myOrders.table
                                                .createdAdd
                                        }
                                    </th>
                                    <th>
                                        {strings.profile.myOrders.table.delete}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {ordersAll.map((order, index) => (
                                    <tr key={index}>
                                        <td>
                                            {order.readyPupsVersion
                                                ? `«PUPS» v.${order.readyPupsVersion}`
                                                : strings.profile.myOrders.table
                                                      .typeCustom}
                                        </td>
                                        <td>{order.capacity}</td>
                                        <td>{order.power}</td>
                                        <td>{order.usbQuantity}</td>
                                        <td>{order.typecQuantity}</td>
                                        <td>
                                            {order.isAutoLighter
                                                ? strings.common.yes
                                                : strings.common.no}
                                        </td>
                                        <td>
                                            {OrderStatusTranslations[
                                                order.status
                                            ] || order.status}
                                        </td>
                                        <td>{order.price.toFixed(2)}</td>
                                        <td>{formatDate(order.createdAt)}</td>
                                        <td className={styles.buttonTd}>
                                            <button
                                                onClick={() =>
                                                    onDeleteOrderClick(order.id)
                                                }
                                            >
                                                {
                                                    strings.profile.myOrders
                                                        .table.delete
                                                }
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className={styles.tableDescription}>
                        {strings.profile.myOrders.table.descriptionWeSee}
                    </p>
                </>
            ) : (
                <p>
                    {strings.profile.myOrders.table.descriptionNoOrders}{" "}
                    <Link href={`/${language}/buy-pups`}>
                        {strings.profile.myOrders.table.descriptionLinkOrder}
                    </Link>
                </p>
            )}
            {isLoading && <Loader />}
        </div>
    );
};
