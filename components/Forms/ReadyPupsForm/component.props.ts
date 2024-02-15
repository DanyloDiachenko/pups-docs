export interface CalculatorPupsFormProps {
    language: string;
    strings: {
        buyPups: {
            title: string;
            ready: {
                title: string;
                variantsTitle: string;
                description: string;
                submit: string;
            };
        };
        common: {
            uah: string;
        };
    };
}
