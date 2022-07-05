import type { NextPage } from 'next'
import HomeIndex from "../common/components/Index/HomeIndex";
import {useRouter} from "next/router";


const Home: NextPage = () => {

    console.log('asd')
    console.log(useRouter().pathname)
    return (
        <>
            <HomeIndex />
        </>

    );
};

export default Home;