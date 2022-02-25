import {Modal, Form, ModalBody, FormGroup, FormLabel, FormControl, FormSelect, Button} from "react-bootstrap"
import React, {useState} from "react"
import useFetch from "./useFetch";

function CreateExpense({show, handleClose}) {

const {data: categories, isPending, error} = useFetch("/categories")
   

    function handleSubmit(){

    }

    return(
        <Modal show={show}>
        <Form onSubmit={handleSubmit}>
         <Modal.Title>Create Expense</Modal.Title>
         <ModalBody>
             <FormGroup className="mb-3" controlId="amount">
                 <FormLabel>Amount</FormLabel>
                 <FormControl type="text required" placeholder="$"></FormControl>
             </FormGroup>
             <FormGroup className="mb-3" controlId="category">
                 <FormLabel>Category</FormLabel>
                 <Form.Select>
                     {categories.map(category=>(
                         <option key={category.id} value={category.id}>{category.category}</option>
                     ))}
                 </Form.Select>
             </FormGroup>
             <Button variant="info" onClick={handleClose}> Close</Button>
         </ModalBody>
         <Button variant="info"> Create</Button>
        </Form>
        </Modal>
    )
}

export default CreateExpense
