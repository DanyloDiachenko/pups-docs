import Link from "next/link";

import styles from "./styles.module.scss";
import { dictionaries } from "../../dictionaries";

interface PageProps {
    params: {
        lang: string;
    };
}

const Page = async ({ params }: PageProps) => {
    const language = params.lang;

    const strings = dictionaries[language as keyof typeof dictionaries];

    return (
        <>
            <h1>Процес виготовлення зарядної станції «PUPS» v.2</h1>
            <p>
                Процес виготовлення зарядної станції «PUPS» v.2 майже повністю
                едентичний процесу виготовлення зарядної станції «PUPS» v.2, за
                виключення заміни деяких компонентів та портів.
            </p>
            <p>
                Деякі моменти з виготовлення пристрою зображені на фото нижче:
            </p>
            <div className={styles.images}>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>

            <p>
                Фото виготовленого прототипу ЗС «PUPS» v.2 можна
                побачити, перейшовши за посиланням{" "}
                <Link href="/pups2/manufactured-prototype">
                    прототип «PUPS» v.2
                </Link>
                .
            </p>
        </>
    );
};

export default Page;
