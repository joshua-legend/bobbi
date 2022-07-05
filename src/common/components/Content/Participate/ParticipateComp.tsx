import {NextPage} from "next";
import {InputContainer} from "./part/Input/InputContainer";
import {FormControl, Button, MenuItem, Select, TextField} from "@mui/material";






const ParticipateComp:NextPage = () => {


    return (
        <>
            <InputContainer>
                <FormControl>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <TextField id="outlined-basic" variant="outlined" />
                <Button variant="contained" >검색</Button>
            </InputContainer>
        </>
    );
}

export default ParticipateComp;
