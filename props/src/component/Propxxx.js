import React from 'react'

function propxxx(props) {
     return (
          <div>
               <h1>
                    Props
               </h1>

               <div>
                    <h2> O nome do usuario é : {props.nome}</h2> {/* Aqui ele esta mandando as props para o app */}
               </div>
          </div>
     )
}

export default propxxx