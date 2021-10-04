import { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import useAuth from './useAuth'

export default function Dashboard({ code }) {
    const accessToken = useAuth(code)
    const [search, setSearch] = useState('')
        return (
        <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
            <Form.Control 
                type='search' 
                placeholder='Search Songs/Artists' 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
            />
        </Container>
    ) 
}
