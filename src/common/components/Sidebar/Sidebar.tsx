import {SidebarAside} from "./part/SidebarAside";
import MakeMenuList from "./part/menu/MakeMenuList";
import {MENU_ITEMS} from "../../../util/constants/menu-items";
import {Container} from "../../elements/layout/Container";
import {LogoContainer} from "./part/logo/LogoContainer";
import {Box} from "../../elements/element/Box";

type SidebarProps = {
    isOpened: boolean;
};

export default function Sidebar({ isOpened }: SidebarProps) {
    return (
        <SidebarAside isOpened={isOpened}>
            <LogoContainer size={"fluid"}>
                <Box>BOBBI Admin</Box>
            </LogoContainer>
            <MakeMenuList options={MENU_ITEMS} />
        </SidebarAside>
    );
}