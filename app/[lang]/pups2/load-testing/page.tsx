import Link from "next/link";
import { dictionaries } from "../../dictionaries";
import styles from "./styles.module.scss";
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
            <h1>{strings.loadTesting2.title}</h1>
            <ol className={styles.list}>
                <li>
                    <h2>{strings.loadTesting2.acb.title}</h2>
                    <p>{strings.loadTesting2.acb.description}</p>
                </li>
                <li>
                    <h2>{strings.loadTesting2.usbCycles.title}</h2>
                    <p>
                        {strings.loadTesting2.usbCycles.description}{" "}
                        <Link href={`/${language}/pups1.5/load-testing`}>
                            {strings.loadTesting2.usbCycles.link}
                        </Link>
                        . <br />
                        {strings.loadTesting2.usbCycles.descriptionAdditional}
                    </p>
                </li>
                <li>
                    <h2>{strings.loadTesting2.cyclesTypeC.title}</h2>
                    <p>
                        {strings.loadTesting2.cyclesTypeC.description} <br />
                        {strings.loadTesting2.cyclesTypeC.descriptionAdditional}
                    </p>
                </li>
                <li>
                    <h2>{strings.loadTesting2.another.title}</h2>
                    <p>
                        {strings.loadTesting2.another.description}{" "}
                        <Link href={`/${language}/pups1.5/load-testing`}>
                            {strings.loadTesting2.another.link1}
                        </Link>{" "}
                        {strings.loadTesting2.another.link1Description}{" "}
                        <Link href={`/${language}/pups1/device-charge-time`}>
                            {strings.loadTesting2.another.link2}
                        </Link>{" "}
                        {strings.loadTesting2.another.link2Description}
                    </p>
                </li>
            </ol>
            <Faq faq={strings.loadTesting2.faq} />
        </>
    );
};

export default Page;
