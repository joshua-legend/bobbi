import type { NextPage } from 'next'
import {Section} from "../common/elements/layout/Section";
import {Container} from "../common/elements/layout/Container";
import {Content} from "../common/elements/element/Content";
import {Button} from "../common/elements/element/Button";

const Home: NextPage = () => {
    return (
        <Section padding={"md"}>
            <Container size={"lg"}>
                <Content><h1>Clone Startups. Learn to code.<sup>1</sup></h1></Content>
                <Content><h4>코딩은 진짜를 만들어보는거야! 실제 서비스를 따라 만들면서 코딩을 배우세요.</h4></Content>
                <Button>시작하기</Button>
            </Container>
        </Section>
    );
};

export default Home;