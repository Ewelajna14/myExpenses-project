import {Modal, Form, ModalBody, FormGroup, FormLabel, FormControl, FormSelect, Button} from "react-bootstrap"
import React, {useState} from "react"

function CreateExpense({show, handleClose}) {

   

    const fetchCategories = fetch("/categories")
     .then((response) =>  response.json())
       .then((data) => {
           return data
       })
      
      async function loadCategories () {
      const a = await fetchCategories
      return a
      }



     //let selections = Array.from(categories).map(category =>(
        //<option key={category.id} value={category.id}>{category.category}</option>
    //))

    
   
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

//{categories.map(category=>(
 //   <option key={category.id} value={category.id}>{category.category}</option>
//))}