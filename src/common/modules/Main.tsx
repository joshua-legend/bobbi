import {Layout} from "../layouts/Layout";
import {RootLayout} from "../layouts/RootLayout";
import SidebarComp from "../components/Sidebar/SidebarComp";
import FooterComp from "../components/Footer/FooterComp";
import {NavbarComp} from "../components/Navbar/NavbarComp";
import {Dashboard} from "../components/Dashboard/Dashboard";

type DashboardLayoutProps = {
    children: React.ReactNode,
};

export default function Main({ children }: DashboardLayoutProps) {

    return (
        <RootLayout>
            <Dashboard>
                <SidebarComp isOpened={true} />
                <Layout>
                    <NavbarComp />
                    {children}
                </Layout>
            </Dashboard>
            <FooterComp />
        </RootLayout>
    );
}