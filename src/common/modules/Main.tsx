import {Header} from "../components/Header/Header";
import {Content} from "../components/Content/Content";
import {PageContainer} from "../layouts/PageContainer";
import {RootLayout} from "../layouts/RootLayout";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import {useState} from "react";

type DashboardLayoutProps = {
    children: React.ReactNode,
};

export default function Main({ children }: DashboardLayoutProps) {

    const [isOpened, setOpened] = useState(false);

    const toggleDrawer = () => {
        setOpened((prev) => !prev);
    };

    return (
        <RootLayout>
            <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
            <Content>
                <Sidebar isOpened={isOpened} />
                <PageContainer>{children}</PageContainer>
            </Content>
            <Footer />
        </RootLayout>
    );
}