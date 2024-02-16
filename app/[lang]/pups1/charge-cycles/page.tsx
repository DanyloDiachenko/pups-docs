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
            <h1>{strings.loadTesting.title}</h1>
            <ol className={styles.list}>
                <li>
                    <h2>{strings.chargeCycles.firstListItem.title}</h2>
                    <p>{strings.chargeCycles.firstListItem.description}</p>
                    <p>
                        Q
                        <span className={styles.small}>
                            {strings.common.work}
                        </span>{" "}
                        = Q
                        <span className={styles.small}>
                            {strings.common.full}
                        </span>{" "}
                        - Q
                        <span className={styles.small}>
                            {strings.common.full}
                        </span>{" "}
                        * (100% - 80%) = 50 - 50 * 0.2 = 50 - 10{" "}
                        {
                            strings.chargeCycles.firstListItem
                                .descriptionForFormule
                        }
                    </p>
                </li>
                {strings.chargeCycles.list.map((listItem, index) => (
                    <li key={index}>
                        <h2>{listItem.title}</h2>
                        <p>
                            {listItem.descriptionBeforeLink}{" "}
                            <Link
                                href={`/${language}/${listItem.descriptionLink.url}`}
                            >
                                {listItem.descriptionLink.title}
                            </Link>{" "}
                            {listItem.descriptionAfter1}
                            <span className={styles.small}>
                                {listItem.descriptionAfterSmall2}
                            </span>{" "}
                            {listItem.descriptionAfter3}
                        </p>
                        <p>
                            N = Q
                            <span className={styles.small}>
                                {strings.common.work}
                            </span>{" "}
                            / Q
                            <span className={styles.small}>
                                {strings.common.charge}
                            </span>
                            {listItem.descriptionForFormule}
                        </p>
                    </li>
                ))}
            </ol>
            <Faq faq={strings.chargeCycles.faq} />
        </>
    );
};

export default Page;
