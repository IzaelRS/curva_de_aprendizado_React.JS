import React from 'react'

const ExecuteFunction = ({ myFunction }) => {
     return (
          // pega a funcao que esta na pagina app, manda da jsx que esta no app e depois manda para pagina ExecuteFuncion pela jsx
          <div>
               <button onClick={myFunction}>
                    Clique aqui para execultar a funcao
               </button>
          </div>
     )
}

export default ExecuteFunction