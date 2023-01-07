import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import React, { useState} from 'react';

function ExpenseItemProps(props) {
  
    
    const [title, setTitulo] = useState(props.title);
    
    function clickHandler(){
        if (title == "Actualizado") {
            setTitulo(props.title)
        } else {
            setTitulo("Actualizado");
        }; 
        
        //setTitulo("Actualizado");
        return (
            
            console.log(title)
        );
    }
 
    return (
        <div className="expense-item">
            <div onMouseLeave={clickHandler}>
            <ExpenseDate date={props.date}></ExpenseDate>
            </div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.cantidad}</div>
            </div> 
            <button onClick={clickHandler}>Take the shot!</button>           
        </div>
    );
}

export default ExpenseItemProps;