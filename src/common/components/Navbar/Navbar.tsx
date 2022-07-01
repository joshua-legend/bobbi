import {ChevronRight} from "@styled-icons/material";
import {HeaderSection} from "./part/HeaderSection";
import {BreadCrumbContainer} from "./part/BreadCrumbContainer";
import {BreadCrumbBox} from "./part/BreadCrumbBox";
import {ProfileBox} from "./part/ProfileBox";
import {useRouter} from "next/router";
import {BREADCRUMB_MENU as bread} from "../../../util/constants/breadcrumb";

export const Navbar = () => {

    const router = useRouter();
    const {root,child} = bread.filter(value => value.url === router.pathname)[0];


    return (
        <HeaderSection padding={"md"} >
            <BreadCrumbContainer size={"fluid"}>
                <BreadCrumbBox>
                    <span>{root}</span>
                    {
                        child ? <>
                            <ChevronRight />
                            <span>{child}</span>
                        </>  : undefined
                    }
                </BreadCrumbBox>
                <ProfileBox>
                    <span>김바비(admin1)</span>
                    <span>로그아웃</span>
                </ProfileBox>
            </BreadCrumbContainer>
        </HeaderSection>
    );
}
