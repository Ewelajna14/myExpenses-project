import {Modal, Form, ModalBody, FormGroup, FormLabel, FormControl, FormSelect, Button, Stack} from "react-bootstrap"
import React, {useState} from "react"
import useFetch from "./useFetch";

function CreateExpense({show, handleClose}) {

const [amount, setAmount] = useState("")
const [cat, setCat] = useState("")

const {data: categories, isPending, error} = useFetch("/categories")
   

    function handleSubmit(e){
     e.preventDefault()
     const newExpense = {
         amount: amount,
         category: cat
     }
     fetch("/expenses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newExpense),
        })
       .then((r)=> r.json())
       .then ((newExpense)=>console.log(newExpense))
       setAmount("")
       setCat("")
    }

    return(
        <Modal show={show}>
        <Form className="mt-3" className="mb-3">
         <Modal.Title>Create Expense</Modal.Title>
         <ModalBody>
             <FormGroup className="mb-3" controlId="amount">
                 <FormLabel>Amount</FormLabel>
                 <FormControl type="text required" placeholder="$" onChange={(e)=>setAmount(e.target.value)}></FormControl>
             </FormGroup>
             <FormGroup className="mb-3" controlId="category">
                 <FormLabel>Category</FormLabel>
                 <Form.Select onSelect={(e)=>setCat(e.target.value)}>
                     {categories.map(category=>(
                         <option key={category.id} value={category.id}>{category.category}</option>
                     ))}
                 </Form.Select>
             </FormGroup>
             <Button variant="info" onClick={handleClose}> Close</Button>
         </ModalBody>
         <Stack direction="horizontal" gap="2" className="mt-3" className="mb-3">
         <Button variant="info" onClick={handleSubmit}> Create</Button>
         </Stack >
        </Form >
        </Modal>
    )
}

export default CreateExpense
