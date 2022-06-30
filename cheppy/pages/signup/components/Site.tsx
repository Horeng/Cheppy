import { Stack, Grid, TextField, Typography, Button, InputAdornment } from '@mui/material'
import { gql, useMutation, useQuery, ApolloClient, ApolloProvider } from '@apollo/client'
import { useState } from 'react'
import Link from 'next/link'
import router from 'next/router'
import { UserInventory, UserInput } from '../../interface'
import { NEW_USER, GET_ID_BY_USER_ID } from '../../../database/constants'
import mongoose from 'mongoose'

const Site = () => {
    
    const [values, setValues] = useState({ username: "", userid: "", email: "", password: "", check_password: ""})
    const [idError, setIdError] = useState(false)
    const [pwError, setPwError] = useState(false)
    const [idhelperText, setIdHelperText] = useState("")
    const [pwhelperText, setPwHelperText] = useState("")

    const [newUser, {}] = useMutation<
        {newUser: UserInventory},
        {input: UserInput}
    >(NEW_USER, {
        variables: { input: { userid: values.userid, password: values.password, email: values.email, username: values.username}}
    })

    const {data, loading, error } = useQuery(GET_ID_BY_USER_ID, {
        variables: { userid: values.userid }
    })

    const handleClick = () => {
        if (values.password == values.check_password && !idError && idhelperText != "" ) {
            newUser()
            router.push('/')
        }
        else{
            if (values.password != values.check_password) {
                setPwError(true)
                setPwHelperText("비밀번호를 재확인해주세요")
            }
        }
    }

    const handleCheckUserId = () => {
        if ( data.getIdByUserId == null) {
            console.log("success")
            setIdError(false)
            setIdHelperText("사용 가능한 아이디입니다")

        } else {
            console.log(data.getIdByUserId._id)
            setIdError(true)
            setIdHelperText("중복된 아이디입니다")

        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value })
    }

    return(

        <div>
            {/* {loading ? <p>loading! </p> : null}
            {error ? <p>Oh no! {error.message}</p> : null}
            {data && data.newUser ? <p>Saved!</p> : null} */}
            <Stack alignItems="center" direction="column" justifyContent="center">
                {/* <h4>이름</h4> */}
                <Typography mt={1}> 이름</Typography>
                <TextField id="input-name" label="이름" variant="outlined" size="small" 
                style ={{width: '40%'}} onChange={handleChange} name="username"/>
                <Typography mt={1}>아이디</Typography>
                <TextField id="input-userid" error={idError} helperText={idhelperText} label="아이디" variant="outlined" size="small" style ={{width: '40%'}} 
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            {/* href 변경 (아이디 중복) */}
                            <Button variant='outlined' size="small" onClick={handleCheckUserId}>중복 확인</Button>
                        </InputAdornment>
                    ),}} onChange={handleChange} name="userid"/>
                <Typography mt={1}>이메일</Typography>
                <TextField id="input-email" label="이메일" variant="outlined" size="small" style ={{width: '40%'}}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            {/* href 변경 (이메일 인증) */}
                            <Button variant='outlined' size="small" href="/">인증</Button>
                        </InputAdornment>
                    ),}}
                    onChange={handleChange} name="email">
                </TextField>
                <Typography mt={1}>비밀번호</Typography>
                <TextField id="input-password" label="비밀번호" variant="outlined" size="small" 
                style ={{width: '40%'}} type="password" onChange={handleChange} name="password"/>
                <Typography mt={1}>비밀번호 확인</Typography>
                <TextField id="input-check-password" error={pwError} helperText={pwhelperText} label="비밀번호 확인" variant="outlined" size="small" 
                style ={{width: '40%'}} type="password" onChange={handleChange} name="check_password"/>
                <Typography mt={2}></Typography>
                <Button type='submit' variant="contained" style ={{width: '40%'}} 
                onClick={handleClick}>회원가입</Button>
            </Stack>
        </div>

    )
}

export default Site