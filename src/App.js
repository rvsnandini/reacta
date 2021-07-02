import Expenses from './components/Expenses';
import React from 'react';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'books',
      amount: 82.45,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'news',
      amount: 65.74,
      date: new Date(2021, 8, 17),
    },
    {
      id: 'e3',
      title: 'car Insurance',
      amount: 94.24,
      date: new Date(2021, 4, 12),
    },
    {
      id: 'e4',
      title: 'wooden',
      amount: 52.85,
      date: new Date(2021, 3, 18),
    },
  ];

  //return React.createElement(
   // 'div',
   // {},
   // React.createElement('h2', {}, "Let's get started!"),
    //React.createElement(Expenses, { items: expenses })
  //);
  return (
    <div>
     <h2>
       let's get started!
     </h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
