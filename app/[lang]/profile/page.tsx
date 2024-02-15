import { OrdersApi } from "@/api/orders.api";
import styles from "./styles.module.scss";
import { ChangePasswordForm } from "@/components/Forms/ChangePasswordForm";
import { Orders } from "@/components/Orders";

const getOrders = async () => {
    const response = await OrdersApi.getOrders();

    if (response.error) {
        return [];
    } else {
        return response.data || [];
    }
};

const Page = async () => {
    const orders = await getOrders();

    return (
        <>
            <h1>Мій кабінет</h1>
            <div className={styles.hello}>
                Вітаю, <span className={styles.dog}>@</span>
                <span className={styles.email}>danildiachenko23@gmail.com</span>
            </div>
            <h2 className={styles.changePassword}>Змінити пароль</h2>
            <ChangePasswordForm />
            <h2 className={styles.myOrders}>Мої замовлення</h2>
            <Orders orders={orders} />
        </>
    );
};

export default Page;
