import MakeMenuList from "./part/menu/MakeMenuList";
import {SidebarAside} from "./part/SidebarAside";
import {MENU_ITEMS} from "../../../util/constants/menu-items";
import {LogoContainer} from "./part/logo/LogoContainer";
import {LogoBox} from "./part/logo/LogoBox";
import {MenuContainer} from "./part/menu/MenuContainer";


type SidebarProps = {
    isOpened: boolean;
};

export default function SidebarComp({ isOpened }: SidebarProps) {
    return (
        <SidebarAside>
            <LogoContainer size={"fluid"}>
                <LogoBox>BOBBI Admin</LogoBox>
            </LogoContainer>
            <MenuContainer size={"fluid"}>
                <MakeMenuList options={MENU_ITEMS} />
            </MenuContainer>
        </SidebarAside>
    );
}