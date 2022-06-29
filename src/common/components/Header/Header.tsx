import {HeaderContainer} from "../../layouts/HeaderContainer";
import {TitleContainer} from "../../layouts/TitleContainer";
import {ChevronLeft, LightMode, Menu, ModeNight} from "@styled-icons/material";
import {IconContainer} from "../../layouts/IconContainer";
import {DarkModeContainer} from "../../layouts/DarkModeContainer";
import {useTheme} from "../../../core/store/useTheme";

type HeaderProps = {
    isOpened: boolean,
    toggleDrawer: () => void,
};


export const Header = ({isOpened,toggleDrawer}:HeaderProps) => {

    const { setLight,lightMode } = useTheme();
    const switchMode = () =>{setLight(!lightMode)}

    return (
        <HeaderContainer>
            <IconContainer onClick={toggleDrawer}>
                {isOpened ? <ChevronLeft /> : <Menu />}
            </IconContainer>
            <TitleContainer>Header</TitleContainer>
            <DarkModeContainer onClick={switchMode}>
                {lightMode ? <LightMode/> :<ModeNight />}
            </DarkModeContainer>
        </HeaderContainer>
    );
}
