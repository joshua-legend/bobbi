import {Header} from "./components/Header/Header";
import {Container} from "./layouts/Container";
import {Content} from "./components/Content/Content";
import {PageContainer} from "./layouts/PageContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import {useState} from "react";

type DashboardLayoutProps = {
    children: React.ReactNode,
};

export default function RootLayout({ children }: DashboardLayoutProps) {

    const [isOpened, setOpened] = useState(false);

    const toggleDrawer = () => {
        setOpened((prev) => !prev);
    };

    return (
        <Container>
            <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
            <Content>
                <Sidebar isOpened={isOpened} />
                <PageContainer>{children}</PageContainer>
            </Content>
            <Footer />
        </Container>
    );
}