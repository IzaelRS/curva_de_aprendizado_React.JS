const EventJsx = () => {

     // podemos fazer uma renderizacao de uma jsx fora de um return

     const renderSomething = (x) => {

          if (x) {
               return <h1> Renderizando isso !</h1>
          } else {
               return <h1> Renderizando aquilo !</h1>
          };
     }


     return (


          <div>
               {/* depois é só passar a funcao com o argumento */}
               {renderSomething(true)}

               {renderSomething(false)}
          </div>
     );
};


export default EventJsx;