import {SidebarContainer} from "../../layouts/SidebarContainer";
import MenuItemsList from "./MenuItemsList";
import {MENU_ITEMS} from "../../../util/constants/menu-items";

type SidebarProps = {
    isOpened: boolean;
};

export default function Sidebar({ isOpened }: SidebarProps) {
    return (
        <SidebarContainer isOpened={isOpened}>
            <MenuItemsList options={MENU_ITEMS} />
        </SidebarContainer>
    );
}