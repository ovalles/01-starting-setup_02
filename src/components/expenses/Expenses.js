import './Expenses.css'
import ExpenseItemProps from "./ExpenseItemProps";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    //**Function to receive the year pick by user in ExpenseFilter component */
    function receiveYear(year) {
        const receivedYear = {year}
        console.log(receivedYear)
    }
    return (
        <div>
            <div>
                <ExpensesFilter onReceiveFilter={receiveYear}> </ExpensesFilter>
            </div> 
            <div className="expenses">
                {
                //Here we are going to renderize each expense item
                //by splitting each element of the array items using
                //the builtin method map
                //and applying the component ExpenseItemProps to each one
                //lesson 63
                }
                {props.items.map((gasto) =>(
                    <ExpenseItemProps 
                        title={gasto.title} 
                        date={gasto.date} 
                        cantidad={gasto.amount}>
                    </ExpenseItemProps>))
                }
                <h2>Renderizing old way</h2>
                <ExpenseItemProps
                    title={props.items[0].title} 
                    date={props.items[0].date} 
                    cantidad={props.items[0].amount}>
                </ExpenseItemProps>

                <ExpenseItemProps 
                    title={props.items[1].title} 
                    date={props.items[1].date} 
                    cantidad={props.items[1].amount}>
                </ExpenseItemProps>

                <ExpenseItemProps 
                    title={props.items[2].title} 
                    date={props.items[2].date} 
                    cantidad={props.items[2].amount}>
                </ExpenseItemProps>

                <ExpenseItemProps 
                    title={props.items[3].title} 
                    date={props.items[3].date} 
                    cantidad={props.items[3].amount}>
                </ExpenseItemProps>

            </div>
        </div>
    );
}
export default Expenses;