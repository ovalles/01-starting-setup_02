import ExpenseItemProps from "./components/ExpenseItemProps";
import ExpenseItemBasic from "./components/ExpenseItemBasic";
import Expenses from "./components/Expenses";



function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2022, 12, 31),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get prior started!</h2>
      <p>..al bitcoin le ira bien mejor en el 2025</p>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
