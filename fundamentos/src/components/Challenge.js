const Challenge = () => {

     const a = 10;
     const b = 15;


     return (

          <div>

               <p>nun1: {a} </p>

               <p>num2: {b} </p>

               <button onClick={() => console.log(a + b)}> clique para ver a soma no console </button>

          </div >
     );
};
export default Challenge;