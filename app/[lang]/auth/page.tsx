import { Authorization } from "@/components/AuthorizationForm";
import styles from "./styles.module.scss";

const Page = () => {
    return (
        <>
            <h1>Авторизація</h1>
            <div className={styles.wrapper}>
                <Authorization />
            </div>
        </>
    );
};

export default Page;
