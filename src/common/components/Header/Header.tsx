import {Navbar} from "../../elements/layout/Navbar";
import {ChevronLeft, LightMode, Menu, ModeNight} from "@styled-icons/material";
import {useTheme} from "../../../core/store/useTheme";
import {Box} from "../../elements/element/Box";
import {NavbarContainer} from "./part/NavbarContainer";

type HeaderProps = {
    isOpened: boolean,
    toggleDrawer: () => void,
};


export const Header = ({isOpened,toggleDrawer}:HeaderProps) => {

    const { setLight,lightMode } = useTheme();
    const switchMode = () => setLight(!lightMode);

    return (
        <Navbar height={64}>
            <NavbarContainer size={"xl"}>
                <Box cursorable onClick={toggleDrawer}>
                    {isOpened ? <ChevronLeft /> : <Menu />}
                </Box>
                <Box>Header</Box>
                <Box cursorable onClick={switchMode}>
                    {lightMode ? <LightMode/> :<ModeNight />}
                </Box>
            </NavbarContainer>
        </Navbar>
    );
}
