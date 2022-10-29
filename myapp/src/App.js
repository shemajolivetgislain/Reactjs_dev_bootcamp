import Expense from "./components/Expense";
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
      <Expense items={expenses} />
    </div>
  );
}

export default App;