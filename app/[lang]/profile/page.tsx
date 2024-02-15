import { GetOrdersApi } from "@/api/getOrders.api";
import styles from "./styles.module.scss";
import { ChangePasswordForm } from "@/components/Forms/ChangePasswordForm";
import { Orders } from "@/components/Orders";
import { dictionaries } from "../dictionaries";

const getOrders = async () => {
    const response = await GetOrdersApi.getOrders();

    if (response.error) {
        return [];
    } else {
        return response.data || [];
    }
};

interface PageProps {
    params: {
        lang: string;
    };
}

const Page = async ({ params }: PageProps) => {
    const language = params.lang;

    const strings = dictionaries[language as keyof typeof dictionaries];

    const orders = await getOrders();

    return (
        <>
            <h1>Мій кабінет</h1>
            <div className={styles.hello}>
                Вітаю, <span className={styles.dog}>@</span>
                <span className={styles.email}>danildiachenko23@gmail.com</span>
            </div>
            <h2 className={styles.changePassword}>Змінити пароль</h2>
            <ChangePasswordForm language={language} />
            <h2 className={styles.myOrders}>Мої замовлення</h2>
            <Orders orders={orders} />
        </>
    );
};

export default Page;
