import React from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

function NewExpense(props){
    //Funcion para recibir un nuevo gasto desde ExpenseForm
    function newData(newExpenseData){
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        }
        //console.log(expenseData);
        
        props.onAddNewExpense(expenseData)

    }

    return(
        <div className="new-expense">
            <ExpenseForm onReceiveNewData={newData} ></ExpenseForm>

        </div>
    )
}

export default NewExpense;