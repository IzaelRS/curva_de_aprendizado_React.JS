import { useState } from 'react'

function Ternario() {

     const [name, setName] = useState("Patricia");

     return (



          <div>
               <h1> If ternario </h1>

               {name === "Patricia" ? (
                    <div>
                         <p> Sim, meu nome é Patrica </p>
                    </div>
               ) : (
                    <div>
                         <p> Não encontrado</p>
                    </div>
               )}

               <br />

               <button onClick={() => { setName('') }}> Apagar nome </button>
          </div >
     )
}

export default Ternario

//{ argumento === "" ? () : ()};