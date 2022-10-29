import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Tiolet paper",
      amount: 94.12,
      date: new Date(2022, 7, 21),
    },
    {
      id: "e1",
      title: "Laptop",
      amount: 194.12,
      date: new Date(2021, 3, 21),
    },
    {
      id: "e1",
      title: "Smart phone",
      amount: 123.12,
      date: new Date(2022, 10, 21),
    },
  ];
  return (
    <div>
      <h2> let's get started!</h2>
      {/* expense components */}
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;