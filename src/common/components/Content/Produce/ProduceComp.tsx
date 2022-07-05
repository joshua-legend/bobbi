import {SelectSection} from "./part/select/SelectSection";
import {TableSection} from "./part/table/TableSection";
import {SelectContainer} from "./part/select/SelectContainer";
import {Dropdown} from "./part/select/Dropdown";
import {ProduceItem} from "../../../../util/constants/produceItem";
import {Input} from "../../../elements/element/Input";
import {SelectButton} from "./part/select/SelectButton";
import {useEffect, useState} from "react";
import {TableContainer} from "./part/table/TableContainer";
import {Table} from "./part/table/Table";
import axios from "axios";
import {NextPage} from "next";
import useSWR from 'swr'

// interface Props {
//     ProduceGetData: IProduce[];
// }

interface IProduce {
    id: number;
    title: string;
    register: string;
    date: string,
    use: boolean,
    hot_index: number,
    participate_index: number,
    comment_index: number,
}

type SearchObj = {
    menu:string,
    search?:string,
}


const ProduceComp:NextPage = () => {

    const dropdownObj = ProduceItem.filter(obj=>obj.id === 2 || obj.id === 3).map(obj=>obj.item);
    const headObj = ProduceItem.map(obj=>obj.item)

    const [search, setSearch] = useState<SearchObj | null>(null);
    const [posts, setPosts] = useState([]);

    const fetcher = (url) => fetch(url).then((r) => r.json());
    const {data} = useSWR('http://localhost:3000/api/getProduce',fetcher);
    if (!data) return <h1>Loading...</h1>;

    return (
        <>
            <SelectSection>
                <SelectContainer size={"fluid"}>
                    <Dropdown items={dropdownObj} />
                    <Input />
                    <SelectButton>검색</SelectButton>
                </SelectContainer>
            </SelectSection>
            <TableSection>
                <TableContainer size={"fluid"}>
                    <Table head={headObj} body={data}/>
                </TableContainer>
            </TableSection>
        </>
    );
}

export default ProduceComp;


// interface IProduce {
//     id: number;
//     title: string;
//     register: string;
//     date: string,
//     use: boolean,
//     hot_index: number,
//     participate_index: number,
//     comment_index: number,
// }
//
//
// export async function getServerSideProps() {
//
//     try {
//         const response = await axios.get<IProduce>(
//             "http://localhost:3000/core/api/produce"
//         );
//         const data = response.data;
//         return {
//             props: {
//                 ProduceGetData: data,
//             },
//         };
//     } catch (err) {
//         console.log(err);
//     }
// }