import Link from "next/link";

import styles from "./styles.module.scss";
import { dictionaries } from "../../dictionaries";
import { Faq } from "@/components/Faq";

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
            <h1>{strings.loadTesting15.title}</h1>
            <p className={styles.mainDescription}>
                {strings.loadTesting15.description}{" "}
                <Link href={`/${language}/pups1/testing-load`}>
                    {strings.loadTesting15.link}
                </Link>
            </p>
            <ol className={styles.list}>
                <li>
                    <h2>{strings.loadTesting15.mahCharge.title}</h2>
                    <p>{strings.loadTesting15.mahCharge.description}</p>
                    <p>
                        Q
                        <span className={styles.small}>
                            {strings.common.charge}
                        </span>{" "}
                        = Q
                        <span className={styles.small}>
                            {strings.common.phone}
                        </span>{" "}
                        + Q
                        <span className={styles.small}>
                            {strings.common.phone}
                        </span>{" "}
                        * (100% - n
                        <span className={styles.small}>
                            {strings.common.module}
                        </span>
                        ) = 4500 + 4500 * 13% = 4500 + 585 = 5085 - mAh{" "}
                        {strings.loadTesting15.mahCharge.descriptionToFormule}
                    </p>
                </li>
                <li>
                    <h2>{strings.loadTesting15.cycles.title}</h2>
                    <p>
                        {strings.loadTesting15.cycles.description}
                        <span className={styles.small}>
                            {strings.common.charge}
                        </span>{" "}
                        {strings.loadTesting15.cycles.descriptionAdditional}
                    </p>
                    <p>
                        N = Q
                        <span className={styles.small}>
                            {strings.common.work}
                        </span>{" "}
                        / Q
                        <span className={styles.small}>
                            {strings.common.charge}
                        </span>{" "}
                        = 40000 / 5815 = 6.88 -{" "}
                        {strings.loadTesting15.cycles.descriptionToFormule}
                    </p>
                </li>
                <li>
                    <h2>{strings.loadTesting15.timeCharge.title}</h2>
                    <p>{strings.loadTesting15.timeCharge.description}</p>
                    <p>
                        t
                        <span className={styles.small}>
                            {strings.common.charge}
                        </span>{" "}
                        = Q
                        <span className={styles.small}>
                            {strings.common.phone}
                        </span>{" "}
                        / I
                        <span className={styles.small}>
                            {strings.common.port}
                        </span>{" "}
                        = 4.5 / 2.1 = 1.25 -{" "}
                        {strings.loadTesting15.timeCharge.descriptionToFormule}
                    </p>
                </li>
            </ol>
            <p className={styles.description}>
                {strings.loadTesting15.descriptionPhotos}
            </p>
            <div className={styles.photos}>
                <img
                    src="/pups1.5/charge1.jpeg"
                    alt={strings.loadTesting15.title}
                />
                <img
                    src="/pups1.5/charge2.jpeg"
                    alt={strings.loadTesting15.title}
                />
            </div>
            <div className={styles.photosAdditional}>
                <img
                    src="/pups1.5/charge3.jpeg"
                    alt={strings.loadTesting15.title}
                />
                <img
                    src="/pups1.5/charge4.jpeg"
                    alt={strings.loadTesting15.title}
                />
                <img
                    src="/pups1.5/charge5.jpeg"
                    alt={strings.loadTesting15.title}
                />
            </div>
            <Faq faq={strings.loadTesting15.faq} />
        </>
    );
};

export default Page;
