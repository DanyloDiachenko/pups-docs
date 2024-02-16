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
            <h1>{strings.profile.title}</h1>
            <div className={styles.hello}>
                {strings.profile.hello}, <span className={styles.dog}>@</span>
                <span className={styles.email}>danildiachenko23@gmail.com</span>
            </div>
            <h2 className={styles.changePassword}>
                {strings.profile.changePassword.title}
            </h2>
            <ChangePasswordForm strings={strings} language={language} />
            <h2 className={styles.myOrders}>
                {strings.profile.myOrders.title}
            </h2>
            <Orders orders={orders} language={language} strings={strings} />
        </>
    );
};

export default Page;
