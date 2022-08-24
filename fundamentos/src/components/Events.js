const Events = () => {

     const handMyEvent = (e) => {
          alert('Ativou o evento');

          console.log(e); // ou pode-se colococar o (e)
     };

     return (

          <div>
               <div>
                    {/* caso coloque () no final da funcao automaticamente a funcao vai ser inicializada, caso não coloque só vai ser inicializada com o click */}
                    <button onClick={handMyEvent}> clique aqui</button>
               </div>

               <br />

               <div> {/*exemplo 2 de como passar uma funcao diretamente */}
                    <button onClick={() => console.log('Clicou!')}>Clique aqui </button>

               </div>

               <br />

               <div>  {/* Funcao em blocos / nao recomendado*/}
                    <button onClick={() => {
                         if (true) {
                              console.log('Isso nao é recomendado!!!')
                         }
                    }}> 'Clica aqui' </button>
               </div>

          </div>
     );
};

export default Events;