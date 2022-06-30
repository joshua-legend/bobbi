import {Header} from "../components/Header/Header";
import {Content} from "../components/Content/Content";
import {Layout} from "../layouts/Layout";
import {RootLayout} from "../layouts/RootLayout";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import {useState} from "react";
import {useRouter} from "next/router";

type DashboardLayoutProps = {
    children: React.ReactNode,
};

export default function Main({ children }: DashboardLayoutProps) {

    const [isOpened, setOpened] = useState(false);
    const pathname = useRouter().pathname;
    const toggleDrawer = () => {
        setOpened((prev) => !prev);
    };



    return (
        <RootLayout>
            {/*<Header isOpened={isOpened} toggleDrawer={toggleDrawer} />*/}
            <Content>
                <Sidebar isOpened={true} />
                <Layout isOpened={true}>{children}</Layout>
            </Content>
            <Footer />
        </RootLayout>
    );
}