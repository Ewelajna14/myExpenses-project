
import {Card, Stack, Button} from "react-bootstrap"
function ExpenseCard({expense}){


    return(
    <Card border="info" style={{ width: '18rem' }}>
    <h2>{expense.amount}</h2>
    <h3>{expense.category.category}</h3>
    <Stack direction="horizontal" gap="2" className="mt-3" className="mb-3">
        <Button variant="outline-info">Add Expense</Button>
    </Stack>
    </Card>
    )
}

export default ExpenseCard