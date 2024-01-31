export interface AsideSmallProps {
    navigation: {
        title: string;
        id: number;
        links: {
            title: string;
            link: string;
        }[];
    }[];
}
