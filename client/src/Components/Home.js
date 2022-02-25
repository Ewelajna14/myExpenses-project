import React, {useEffect, useState} from "react"
import {Container, Button, Stack, Row} from "react-bootstrap"
import ExpenseCard from "./ExpenseCard"
import CreateExpense from "./CreateExpense";

function Home(){
    const [show, setShow] = useState(false);
    const [expenses, setExpense] = useState([])

    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);


    useEffect(()=>{
    fetch("/expenses")
    .then((r)=>r.json())
    .then(data=>setExpense(data))
    }, [])

   let oneExpense = expenses.map((expense)=>{
       return(<ExpenseCard key={expense.id} expense={expense}/>)
   })
    
    return(
        <Container className="my-3">
            <Stack direction="horizontal" gap="4" className="mb-5">
            <h2 className="me-auto">Hello</h2>
            </Stack>
            <Button variant="info" onClick={handleShow}> Create Expense</Button>
             <CreateExpense show={show} handleClose={handleClose}/>
            <Row className="mt-5">
            {oneExpense}
            </Row>
        </Container>
    )
}

export default Home