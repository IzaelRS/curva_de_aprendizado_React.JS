import React, { useState } from "react";

const ListRender = () => {

     const [list] = useState(["Izael", "Patricia", "Pablo"]); //ex1


     ///////////////////////////////////////////////////////////////////////////////     
     const [user] = useState([
          { id: 1, name: "Maria", age: 32 },
          { id: 2, name: "Rosana", age: 40 },
          { id: 3, name: "Jenny", age: 24 },
     ]);                                                     // ex2 com key ou id

     return (
          <div>

               <div>
                    <ul>
                         {list.map((item, i) => (
                              <li key={i}>{item}</li>
                         ))}
                    </ul>
               </div>

               <br />
               <br />

               <div>
                    <ul>
                         {user.map((user) => (
                              <li key={user.id}>
                                   {user.name}
                                   -
                                   {user.age}
                              </li>
                         ))}
                    </ul>
               </div>
          </div>
     );
}

export default ListRender;

//il = .
//ul = lista
//ol = personalizada <ol type="1"> </ol>