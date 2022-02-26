import {useState} from "react"
import AddExpense from "./AddExpense"
import {Card, Stack, Button} from "react-bootstrap"

function ExpenseCard({expense}){

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return(
    <Card border="info" style={{ width: '18rem' }}>
    <h2>{expense.amount}</h2>
    <h3>{expense.category.category}</h3>
    <Stack direction="horizontal" gap="2" className="mt-3" className="mb-3">
        <Button variant="outline-info" onClick={handleShow}>Add Expense</Button>
        <AddExpense show={show} handleClose={handleClose} expense={expense}/>
    </Stack>
    </Card>
    )
}

export default ExpenseCard

