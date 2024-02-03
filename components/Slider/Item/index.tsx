import { useParams, useRouter } from "next/navigation";

import { SliderItemProps } from "./component.props";
import styles from "./styles.module.scss";

export const SliderItem = ({
    title,
    description,
    buttonText,
    image,
    buttonLink,
}: SliderItemProps): JSX.Element => {
    const router = useRouter();
    const language = useParams().lang;

    return (
        <div className={styles.content}>
            <div className={styles.info}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
                {buttonText && buttonLink && (
                    <button
                        onClick={() =>
                            router.push(`/${language}/${buttonLink}`)
                        }
                    >
                        {buttonText}
                    </button>
                )}
            </div>
            <div className={styles.imgCol}>
                <img loading="eager" src={image} alt={title} />
            </div>
        </div>
    );
};
