import React, { useState } from 'react'

const CondicionalRender = () => {

     const [x] = useState(false);

     return (
          <div>
               <h1> Isso sera exibido ?</h1>

               {/* mostra o ele se for true */}
               {x && <p> Se x for true será exibido </p>}



               {/* mostra o ele se for false */}
               {!x && <p> Se x for false será exibido </p>}


          </div>
     )
}

export default CondicionalRender

//&& = and