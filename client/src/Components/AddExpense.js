import {Modal, Form, ModalBody, FormGroup, FormLabel, FormControl, FormSelect, Button} from "react-bootstrap"

function AddExpense({show, handleClose, expense}){
return( 
    <Modal show={show}>
        <Form className="mt-3" className="mb-3">
         <Modal.Title>AddExpense</Modal.Title>
         <ModalBody>
             <FormGroup className="mb-3" controlId="amount">
                 <FormLabel>Amount</FormLabel>
                 <FormControl type="text required" placeholder="$" ></FormControl>
             </FormGroup>
             <FormGroup className="mb-3" controlId="category">
                 <FormLabel>Category</FormLabel>
                 <Form.Select > 
                     <option >
                     {expense.category.category}
                     </option>
                 </Form.Select>
             </FormGroup>
             <Button variant="info" onClick={handleClose}> Close</Button>
         </ModalBody>
         <Button variant="info" > Create</Button>
        </Form >
        </Modal>
)
}

export default AddExpense