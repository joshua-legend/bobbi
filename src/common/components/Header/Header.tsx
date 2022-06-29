import {Navbar} from "../../layouts/Navbar";
import {TitleContainer} from "../../layouts/TitleContainer";
import {ChevronLeft, LightMode, Menu, ModeNight} from "@styled-icons/material";
import {IconContainer} from "../../layouts/IconContainer";
import {DarkModeContainer} from "../../layouts/DarkModeContainer";
import {useTheme} from "../../../core/store/useTheme";
import {NavbarContainer} from "../../layouts/NavbarContainer";
import {Box} from "../../elements/Box";

type HeaderProps = {
    isOpened: boolean,
    toggleDrawer: () => void,
};


export const Header = ({isOpened,toggleDrawer}:HeaderProps) => {

    const { setLight,lightMode } = useTheme();
    const switchMode = () =>{setLight(!lightMode)}

    return (
        <Navbar height={75}>
            <NavbarContainer size={"xl"}>
                <Box onClick={toggleDrawer}>
                    {isOpened ? <ChevronLeft /> : <Menu />}
                </Box>
                <Box>
                    123123
                </Box>
                <IconContainer onClick={toggleDrawer}>
                    {isOpened ? <ChevronLeft /> : <Menu />}
                </IconContainer>
                <TitleContainer>Header</TitleContainer>
                <DarkModeContainer onClick={switchMode}>
                    {lightMode ? <LightMode/> :<ModeNight />}
                </DarkModeContainer>
            </NavbarContainer>
        </Navbar>
    );
}
