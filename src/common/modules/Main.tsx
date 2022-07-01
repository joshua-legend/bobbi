import {Content} from "../components/Content/Content";
import {Layout} from "../layouts/Layout";
import {RootLayout} from "../layouts/RootLayout";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import {Navbar} from "../components/Navbar/Navbar";

type DashboardLayoutProps = {
    children: React.ReactNode,
};

export default function Main({ children }: DashboardLayoutProps) {

    return (
        <RootLayout>
            <Content>
                <Sidebar isOpened={true} />
                <Layout>
                    <Navbar />
                    {children}
                </Layout>
            </Content>
            <Footer />
        </RootLayout>
    );
}