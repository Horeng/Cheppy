import {Box, Button, Grid, InputAdornment, Stack, TextField, Typography, List, ListItem} from '@mui/material'
import { GET_USER, GET_USER_BY_USERID } from '../../../database/constants'
import { DataUsageTwoTone } from '@mui/icons-material';
import Link from "next/link"
import { useState } from 'react';

const Grade = () => {

    const [grade, setGrade] = useState('');
    const [grade_res, setGrade_Res] = useState('');

    // console.log(result)

    // const Row = (props) => {

    //     const number = props.row.number;
    //     const success = props.row.success;
    //     const input = props.row.input;
    //     const output = props.row.output;

    //     return (
    //         <ListItem alignItems="flex-start">
    //             <Typography fontWeight='bold' fontSize={13} style={{ marginLeft: "3%", marginTop:30, marginBottom:10, backgroundColor:"#fcf6d2" }}>
    //                 {`테스트케이스 ${number}번: ${success}`}
    //             </Typography>
    //             <Typography fontSize={13} style={{ marginLeft: "3%" }}>{`입력값: ${input}`}</Typography>
    //             <Typography fontSize={13} style={{ marginLeft: "3%" }}>{`출력값: ${output}`}</Typography>
    //         </ListItem>
    //     )
    // }

    return(
        <>
            <Box sx={{width: '25vw', marginBottom:3}} >
                <Box sx={{ height: 40, backgroundColor: "#414E5A", pt:1.2}}>
                    <Typography fontWeight='bold' fontSize={15} style={{ marginLeft: "3%", color: 'white'}}>성적</Typography>
                </Box>

                <Typography fontSize={13} style={{ marginLeft: "3%", marginTop:10}}>{`bwj2800님의 채점 결과는 ${grade_res} 입니다.`}</Typography>

                <Typography fontSize={13} style={{ marginLeft: "3%", marginTop:10}}>{`총점: ${grade}`}</Typography>

                {/* <List sx={{ width: '50', height: '50'}}>
                        {result &&
                            result.map((v, inx) => {
                                return <Row key={inx} row={v}/>
                            })}
                </List> */}

                <Typography fontWeight='bold' fontSize={13} style={{ marginLeft: "3%", marginTop:30, marginBottom:10, backgroundColor:"#fcf6d2" }}>테스트케이스 1번: Fail</Typography>
                <Typography fontSize={13} style={{ marginLeft: "3%" }}>입력값: main([1, 1, 1, 2, 3])</Typography>
                <Typography fontSize={13} style={{ marginLeft: "3%" }}>출력값: [1, 2, 3]</Typography>

                <Typography fontWeight='bold' fontSize={13} style={{ marginLeft: "3%", marginTop:30, marginBottom:10, backgroundColor:"#fcf6d2" }}>테스트케이스 2번: Fail</Typography>
                <Typography fontSize={13} style={{ marginLeft: "3%" }}>입력값: main([3, 4, 5, 1, 2])</Typography>
                <Typography fontSize={13} style={{ marginLeft: "3%" }}>출력값: [3, 4, 5, 1]</Typography>

                <Typography fontWeight='bold' fontSize={13} style={{ marginLeft: "3%", marginTop:30, marginBottom:10, backgroundColor:"#fcf6d2" }}>테스트케이스 3번: Fail</Typography>
                <Typography fontSize={13} style={{ marginLeft: "3%" }}>입력값: main([])</Typography>
                <Typography fontSize={13} style={{ marginLeft: "3%" }}>출력값: []</Typography>

                {/* <Box sx={{backgroundColor: "#fcf6d2"}}>
                <Typography fontWeight='bold' fontSize={13} style={{ marginLeft: "3%", marginTop:30, marginBottom:10 }}>테스트케이스 4번: Fail</Typography>
                </Box>
                <Typography fontSize={13} style={{ marginLeft: "3%" }}>입력값: main([3, 4, 5, 1, 3])</Typography>
                <Typography fontSize={13} style={{ marginLeft: "3%" }}>출력값: [3, 4, 5, 1]</Typography> */}
            </Box>
        </>
    )

}

export default Grade