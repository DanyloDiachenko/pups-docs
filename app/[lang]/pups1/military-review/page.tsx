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
            <h1>{strings.militaryReview.title}</h1>
            <ul className={styles.list}>
                <li>
                    <h2>{strings.militaryReview.listItem1.title}</h2>
                    <div className={styles.videoText}>
                        <iframe
                            allow="fullscreen"
                            allowFullScreen
                            src="https://streamable.com/e/gieu43?"
                            className={styles.video}
                        ></iframe>
                        <p>{strings.militaryReview.listItem1.quote}</p>
                    </div>
                    <p>
                        {strings.militaryReview.listItem1.description}{" "}
                        <Link
                            href={`/${language}/${strings.militaryReview.listItem1.descriptionLink.url}`}
                        >
                            {
                                strings.militaryReview.listItem1.descriptionLink
                                    .title
                            }
                        </Link>
                        .
                    </p>
                </li>
                <li>
                    <h2>{strings.militaryReview.listItem2.title}</h2>
                    <div className={styles.videoTextSm}>
                        <iframe
                            allow="fullscreen"
                            allowFullScreen
                            src="https://streamable.com/e/h2maom?"
                            className={styles.videoSmall}
                        ></iframe>
                        <p>{strings.militaryReview.listItem2.quote}</p>
                    </div>
                    <p>
                        {strings.militaryReview.listItem2.description1}{" "}
                        <Link
                            href={`/${language}/${strings.militaryReview.listItem2.description1Link.url}`}
                        >
                            {
                                strings.militaryReview.listItem2
                                    .description1Link.title
                            }
                        </Link>
                        {strings.militaryReview.listItem2.description2}{" "}
                        <Link
                            href={`/${language}/${strings.militaryReview.listItem2.description2Link.url}`}
                        >
                            {
                                strings.militaryReview.listItem2
                                    .description2Link.title
                            }
                        </Link>
                        .
                    </p>
                </li>
            </ul>
        </>
    );
};

export default Page;
