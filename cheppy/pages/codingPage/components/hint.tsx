import {Box, Button, Grid, InputAdornment, Stack, TextField, Typography} from '@mui/material'
import { GET_USER, GET_USER_BY_USERID } from '../../../database/constants'
import { DataUsageTwoTone } from '@mui/icons-material';
import Link from "next/link"
import { generateKey } from 'crypto';
import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../store/modules";

const Hint = () =>{
    const hintValue = useSelector((state: RootState) => state.feedback);
    console.log("hinthint------------");
    console.log(hintValue);

    const [hints, setHint] = useState<any[]>([]);
    const [hintNum, setHintNum] = useState(0);

    // useEffect(() => {
    //     getHintData();
    // }, [])
    
    // const getHintData = async () => {
    //     await axios.post('http://localhost:4000/feedback/get_feedback', {
    //         //feedback api 완성되면 연결
    //     })
    //     .then((res) => {
    //         console.log("getHintData success");
    //         console.log(res.data);
    //         setHint(res.data);
    //         let cnt = 0;
    //         const hint = Object.keys(res.data).map((line) => (
    //             res.data[line].map((contents) => (
    //                 Object.keys(contents).map((content) => (
    //                     cnt++
    //                 ))
    //             ))
    //         ));
    //         setHintNum(cnt);
    // })
    //     .catch(error => {
    //         console.log("getHintData failed");
    //         console.log(error.response);
    //     })
    // }

    return(
        <>
            <Box sx={{width: '25vw'}} >
                <Box sx={{ height: 40, backgroundColor: "#414E5A", pt:1.2}}>
                    <Grid container>
                        <Grid item width="15%">
                            <Typography fontWeight='bold' fontSize={15} style={{ marginLeft: "20%", marginRight: "6%", color: 'white'}}>힌트</Typography>
                        </Grid>
                        <Grid item width="8%">
                            <Box sx={{ backgroundColor: "#FFD600", borderRadius: 2}}>
                                <Typography fontWeight='bold' fontSize={13}  align="center">+{hintValue.num}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {hintValue.res == null &&
                    <div>Loading ... </div>
                }

                {hintValue.res == "Server Error" &&
                    <div>{hintValue.res} </div>
                }

                {hintValue.res != null && hintValue.res != "Server Error" && 
                    Object.keys(hintValue.res).map((line) => (
                        hintValue.res[line].map((contents) => (
                            Object.keys(contents).map((content) => (
                                <List key={line.toString()+content.toString()} disablePadding>
                                    <ListItem>
                                        <Grid container sx={{ml:3, mt:2}}>
                                            <Grid item width="15%">
                                                <Box sx={{backgroundColor: "#FFD600", borderRadius: 1}}>
                                                    <ListItemText>
                                                        <Typography align="center" fontWeight='bold' fontSize={15}>line {line}</Typography>
                                                    </ListItemText> 
                                                </Box>
                                            </Grid>
                                            <Grid item width="75%">
                                                <ListItemText>
                                                    <Typography fontSize={13} style={{ marginLeft: "5%" }}>{content+" "+contents[content]}</Typography>
                                                </ListItemText>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    </List>                                
                            ))
                        ))
                    ))
                }

                {/* <Grid container sx={{ml:3, mt:2}}>
                    <Grid item width="15%">
                        <Box sx={{backgroundColor: "#FFD600", borderRadius: 1}}>
                            <Typography align="center" fontWeight='bold' fontSize={15}>line 2</Typography>
                        </Box>
                    </Grid>
                    <Grid item width="75%">
                        <Typography fontSize={13} style={{ marginLeft: "5%" }}>Replace Return value</Typography>
                    </Grid>
                </Grid>

                <Grid container sx={{ml:3, mt:2}}>
                    <Grid item width="15%">
                        <Box sx={{backgroundColor: "#FFD600", borderRadius: 1}}>
                            <Typography align="center" fontWeight='bold' fontSize={15}>line 2</Typography>
                        </Box>
                    </Grid>
                    <Grid item width="75%">
                        <Typography fontSize={13} style={{ marginLeft: "5%" }}>Insert Assignment statement</Typography>
                    </Grid>
                </Grid>

                <Grid container sx={{ml:3, mt:2}}>
                    <Grid item width="15%">
                        <Box sx={{backgroundColor: "#FFD600", borderRadius: 1}}>
                            <Typography align="center" fontWeight='bold' fontSize={15}>line 3</Typography>
                        </Box>
                    </Grid>
                    <Grid item width="75%">
                        <Typography fontSize={13} style={{ marginLeft: "5%" }}>Insert For statement</Typography>
                    </Grid>
                </Grid>

                <Grid container sx={{ml:3, mt:2}}>
                    <Grid item width="15%">
                        <Box sx={{backgroundColor: "#FFD600", borderRadius: 1}}>
                            <Typography align="center" fontWeight='bold' fontSize={15}>line 4</Typography>
                        </Box>
                    </Grid>
                    <Grid item width="75%">
                        <Typography fontSize={13} style={{ marginLeft: "5%" }}>Insert If statement</Typography>
                    </Grid>
                </Grid> */}

            </Box>
        </>
    )

}

export default Hint
