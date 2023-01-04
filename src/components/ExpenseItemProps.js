import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItemProps(props) {
    
 
    return (
        <div className="expense-item">
            <div>
            <ExpenseDate date={props.date}></ExpenseDate>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.cantidad}</div>
            </div>            
        </div>
    );
}

export default ExpenseItemProps;