import {Box, Button, Grid, InputAdornment, Stack, TextField, Typography} from '@mui/material'
import { GET_USER, GET_USER_BY_USERID } from '../../../database/constants'
import { DataUsageTwoTone } from '@mui/icons-material';
import Link from "next/link"
import { generateKey } from 'crypto';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';


const Hint = () =>{

    const hints = {"2":[{"Delete":"this statement"}, {"Insert":"'if' statement"}], "3":[{"Insert":"'Return' statement"}]};    
    const lines = Object.keys(hints);

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
                                <Typography fontWeight='bold' fontSize={13}  align="center">+5</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {lines.map((line) => (
                    hints[line].map((contents) => (
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
                ))}

                {/* {lines.map((line) => (
                    <List key={line.toString()} disablePadding>
                        <ListItem>
                            <Grid container sx={{ml:3, mt:2}}>
                                <Grid item width="15%">
                                    <Box sx={{backgroundColor: "#FFD600", borderRadius: 1}}>
                                        <ListItemText>
                                            <Typography align="center" fontWeight='bold' fontSize={15}>{line}</Typography>
                                        </ListItemText> 
                                    </Box>
                                </Grid>
                                <Grid item width="75%">
                                    <ListItemText>
                                        <Typography fontSize={13} style={{ marginLeft: "5%" }}>Replace Return value</Typography>
                                    </ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                ))} */}

                <Grid container sx={{ml:3, mt:2}}>
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
                </Grid>

            </Box>
        </>
    )

}

export default Hint