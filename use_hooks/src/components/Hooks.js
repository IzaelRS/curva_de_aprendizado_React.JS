import { useState } from "react";

const Hooks = () => {
  let someData = 10; // valor atribuido diretamente

  const [number, setNumber] = useState(""); // valor dinamico 


  return (

    <div>
      <div>
        <p> Valor: {someData} </p>
        <button onClick={() => setNumber(25)}> Mudar variavel </button>
      </div>
      <div> valor: {number}</div>
    </div>
  );
}

export default Hooks;