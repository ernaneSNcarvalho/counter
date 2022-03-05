import {useState} from "react";

function App() {

  const [count, setCount] = useState(0);

  const handlePlusClick = () => {
    if(count < 10) {
      setCount(count + 1);
    }
  }

  const handleMinusClick = () => {
    if(count > 0){
      setCount(count -1);
    }
  }
  return (
    <>
      <h1>Contador: {count}</h1>
      <button class="plus" onClick={handlePlusClick}>+</button>
      <button class="minus" onClick={handleMinusClick}>-</button>
    </>
  );
}

export default App;
