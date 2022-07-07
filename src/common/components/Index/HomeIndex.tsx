import {Section} from "../../elements/layout/Section";
import {ContainerCustom} from "../../elements/layout/ContainerCustom";
import {Content} from "../../elements/element/Content";
import {Button} from "../../elements/element/Button";


export default function HomeIndex() {
    return (
        <>
            <Section padding={"md"}>
                <ContainerCustom size={"lg"}>
                    <Content><h1>Clone Startups. Learn to code.<sup>1</sup></h1></Content>
                    <Content><h4>코딩은 진짜를 만들어보는거야! 실제 서비스를 따라 만들면서 코딩을 배우세요.</h4></Content>
                    <Button>시작하기</Button>
                </ContainerCustom>
            </Section>
        </>
    );
}