import React, {useContext} from 'react'

//Type
import * as type from '../Context/Types/User'

//Context
import {AppContext} from '../Context/AppContext'

//Bootstrap
import {Navbar, Container} from 'react-bootstrap'


export default function Header() {

    const {state, dispatch} = useContext(AppContext)

    const {user} = state.user

  return (
    <>
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Toko Online</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Keranjang 0
                    </Navbar.Text>
                    <Navbar.Text className="ms-2">
                        {user && user.username}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}
