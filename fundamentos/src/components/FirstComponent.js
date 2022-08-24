// nesse caso foi feita uma variavel com arrow function

import MyComponent from "./MyComponent";

//arquivo de estilos


const FirstComponent = () => {

     return (
          <div>
               <h2>Meu Primeiro Componente</h2>

               <p> Meu Texto</p>

               <MyComponent />


          </div>
     );

};

export default FirstComponent;