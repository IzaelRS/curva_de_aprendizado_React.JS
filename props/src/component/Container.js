import React from 'react'

const Container = ({ children, meuValor }) => {
     return (
          <div>
               <h2> Este é o titulo do container </h2>
               {children}
               <p> {meuValor} </p>
          </div>
     )
}

export default Container