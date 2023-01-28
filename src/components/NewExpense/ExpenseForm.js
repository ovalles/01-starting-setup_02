import './ExpenseForm.css';
import React, {useState} from  'react';

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('')
    function titleChangeHandler(event){
        setEnteredTitle(event.target.value)
    }

    const [enteredDate, setEnteredDate] = useState('')
    function dateChangeHandler(event){
        setEnteredDate(event.target.value)
    }

    const [enteredAmount, setEnteredAmount] = useState('')
    function amountChangeHandler(event){
        setEnteredAmount(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount : enteredAmount,
            date: new Date(enteredDate)
        };

        //console.log(expenseData);
        //nota que los parentesis son para garantizar
        //la ejecucion de la funcion en el parent component
        props.onReceiveNewData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>

                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}></input>

                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler}></input>

                </div>

            </div>
            <div className="new_expense__actions">
                <button type="submit">Add Expense</button>
            </div>


        </form>
    )
};

export default ExpenseForm