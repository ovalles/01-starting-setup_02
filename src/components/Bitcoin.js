import './ExpenseItem.css'
function Bitcoin(){
    return (
        <div className="expense-item">
            <p>Aqui esta el componente de BTC papa</p>
            <button id="button">Presiona</button>
            {document.getElementById("button").innerHTML = "Fala"} 
             
        </div>        
    );
}
export default Bitcoin;