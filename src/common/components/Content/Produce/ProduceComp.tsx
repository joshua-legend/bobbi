import {SelectSection} from "./part/select/SelectSection";
import {TableSection} from "./part/table/TableSection";
import {SelectContainer} from "./part/select/SelectContainer";
import {Dropdown} from "./part/select/Dropdown";
import {ProduceItem} from "../../../../util/constants/produceItem";
import {Input} from "../../../elements/element/Input";
import {SelectButton} from "./part/select/SelectButton";
import {useState} from "react";
import {TableContainer} from "./part/table/TableContainer";
import {Table} from "./part/table/Table";


type SearchObj = {
    menu:string,
    search?:string,
}

export default function ProduceComp() {

    const items = ProduceItem.map(obj=>obj.item);
    const [search, setSearch] = useState<SearchObj | null>(null);


    return (
        <>
            <SelectSection>
                <SelectContainer size={"fluid"}>
                    <Dropdown items={items} />
                    <Input />
                    <SelectButton>검색</SelectButton>
                </SelectContainer>
            </SelectSection>
            <TableSection>
                <TableContainer size={"fluid"}>
                    <Table />
                </TableContainer>
            </TableSection>
        </>
    );
}