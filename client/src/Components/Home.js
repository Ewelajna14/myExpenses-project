import React, {useState} from "react"
import {Container, Button, Stack, Row} from "react-bootstrap"
import ExpenseCard from "./ExpenseCard"
import CreateExpense from "./CreateExpense";
import useFetch from "./useFetch";
import { useHistory, Redirect } from "react-router-dom";

function Home({user}){

    console.log(user)

    const history = useHistory()
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    

    const handleLogout = () =>{
    fetch("/logout", {
        method: "DELETE"
    })    
    history.push("/login")
    }


    const {data: expenses, isPending, error} = useFetch(`/users/${user.id}/expenses`)


   let oneExpense = expenses.map((expense)=>{
       return(<ExpenseCard key={expense.id} expense={expense}/>)
   })

   if (!user) return <Redirect to="/login" />;
    
    return(
        <Container className="my-3">
            <Stack direction="horizontal" gap="4" className="mb-5">
            <h2 className="me-auto">Hello</h2>
            </Stack>
            <Button variant="info" onClick={handleShow}> Create Expense</Button>
            <Button variant="info" onClick={handleLogout} >Log Out</Button>
             <CreateExpense show={show} handleClose={handleClose}/>
            <Row className="mt-5">
             {error && <div>{error}</div>} 
             {isPending && <div>Loading...</div> }  
             {oneExpense}
            </Row>
        </Container>
    )
}

export default Home