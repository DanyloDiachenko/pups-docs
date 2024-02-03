import styles from "./page.module.scss";
import { dictionaries } from "./dictionaries";
import { MainSlider } from "@/components/Slider";

interface HomeProps {
    params: {
        lang: string;
    };
}

const Home = async ({ params }: HomeProps) => {
    const strings = dictionaries[params.lang as keyof typeof dictionaries];

    return (
        <>
            <MainSlider sliderSlides={strings.home.slider} />
        </>
    );
};

export default Home;
