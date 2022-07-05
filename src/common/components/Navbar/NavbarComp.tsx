import {ChevronRight} from "@styled-icons/material";
import {HeaderSection} from "./part/HeaderSection";
import {BreadCrumbContainer} from "./part/BreadCrumbContainer";
import {BreadCrumbBox} from "./part/BreadCrumbBox";
import {ProfileBox} from "./part/ProfileBox";
import {useRouter} from "next/router";
import {BREADCRUMB_MENU as BREAD} from "../../../util/constants/breadcrumb";


export const NavbarComp = () => {

    const router = useRouter();
    // const {parent, child} = BREAD.find(obj =>obj.url === router.pathname);

    return (
        <HeaderSection padding={"md"} >
            <BreadCrumbContainer size={"fluid"}>
                <BreadCrumbBox>
                    {/*<span>{parent}</span>*/}
                    {/*{*/}
                    {/*    child ?*/}
                    {/*    <>*/}
                    {/*        <ChevronRight />*/}
                    {/*        <span>{child}</span>*/}
                    {/*    </> : undefined*/}
                    {/*}*/}
                </BreadCrumbBox>
                <ProfileBox>
                    <span>김바비(admin1)</span>
                    <span>로그아웃</span>
                </ProfileBox>
            </BreadCrumbContainer>
        </HeaderSection>
    );
}
