import React, {useState} from "react";
import NewCost from "./conponents/NewCost/NewCost";
import Costs from "./conponents/Costs/Costs";

const INITIAL_COSTS  = [
  {
    id: 'c1',
    date: new Date(2023, 2, 12),
    description: 'Карты',
    amount: 999.99
  },
  {
    id: 'c2',
    date: new Date(2023, 5, 26),
    description: 'Деньги',
    amount: 1399.99
  },
  {
    id: 'c3',
    date: new Date(2023, 11, 29),
    description: 'Два ствола',
    amount: 199.99
  }
];

const App = () => {

   const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  }; 

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
     <Costs costs={costs}/>
    </div>
  );
}

export default App;
