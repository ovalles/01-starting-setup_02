import './ExpenseItem.css'
function Bitcoin(){
    return (
        <div className="expense-item">
            <p>Aqui esta el componente modificado de BTC papa, va para largo</p>
            <button id="button">Presiona</button>
            {document.getElementById("button").innerHTML = "Fala"} 
             
        </div>        
    );
}
export default Bitcoin;