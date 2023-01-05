import './Expenses.css'
import ExpenseItemProps from "./ExpenseItemProps";

function Expenses(props) {
    return ( 
        <div className="expenses">      
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
    );
}
export default Expenses;