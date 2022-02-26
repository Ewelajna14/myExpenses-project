import React, {useState} from "react"
import {Container, Button, Stack, Row} from "react-bootstrap"
import ExpenseCard from "./ExpenseCard"
import CreateExpense from "./CreateExpense";
import NavBar from "./NavBar"
import useFetch from "./useFetch";
import { useHistory} from "react-router-dom";

function Home({setUser, user}){

    const history = useHistory()
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    const {data: expenses, setData: setExpenses, isPending, error} = useFetch(`/users/${user.id}/expenses`)

    function onCreateExpense(newExpense){
     const newExpensesArray = [...expenses, newExpense]
     setExpenses(newExpensesArray)
    }
    

    const handleLogout = () =>{
    fetch("/logout", {
        method: "DELETE"
    })  
    .then(res => {
        if (res.ok) {
          setUser(null)
        }
      })  
    history.push("/login")
    }

   let oneExpense = expenses.map((expense)=>{
       return(<ExpenseCard key={expense.id} expense={expense}/>)
   })

    return(
        <Container className="my-3">
            <NavBar user={user}/>
            <Stack direction="horizontal" gap="4" className="mb-5">
            </Stack>
            <Button variant="info" onClick={handleShow}> Create Expense</Button>
            <Button variant="info" onClick={handleLogout} >Log Out</Button>
             <CreateExpense show={show} handleClose={handleClose} user={user} onCreateExpense={onCreateExpense}/>
            <Row className="mt-5">
             {error && <div>{error}</div>} 
             {isPending && <div>Loading...</div> }  
             {oneExpense}
            </Row>
        </Container>
    )
}

export default Home