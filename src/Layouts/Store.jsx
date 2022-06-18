import React, {useContext, useState} from 'react'
import * as type from '../Context/Types/User'

//Context
import {AppContext} from '../Context/AppContext'

//Bootstrap
import { Button, Form, Container } from 'react-bootstrap'

export default function Home() {

    const {state, dispatch} = useContext(AppContext)

    const [userData, setUserData] = useState({
        email:"",
        password:""
    })

    const handleChangeUser = (e) =>{
        e.preventDefault()
        dispatch({type:type.GET_USER_SUCCESS, user:userData})
    }

    const handleChangeData = (e) =>{
        const {value, name} = e.target
        setUserData({
            ...userData,
            [name]:value,
        })
    }


    return (
        <Container className="d-flex justify-content-center">
            <Form className='w-25' onSubmit={handleChangeUser} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Enter email" onChange={handleChangeData} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" password="password" placeholder="Password" onChange={handleChangeData} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
