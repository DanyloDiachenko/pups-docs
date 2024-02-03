import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Aside } from "@/components/Aside";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
    title: "База знань «PUPS»",
    description:
        "База знань із виготовлення портативної зарядної станції «PUPS»",
    icons: ["/logo.png"],
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <span className="main-section-bg-1"></span>
                <span className="main-section-bg-2"></span>
                <span className="main-section-bg-3"></span>
                <Aside />
                <main>
                    <div>
                        <Header />
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
