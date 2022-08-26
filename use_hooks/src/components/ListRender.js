import React, { useState } from "react";

const ListRender = () => {

     const [list] = useState(["Izael", "Patricia", "Pablo"]); //ex1

     const [user, setUser] = useState([
          { id: 1, name: "Maria", age: 32 },
          { id: 2, name: "Rosana", age: 40 },
          { id: 3, name: "Jenny", age: 24 },
     ]);                                                     // ex2 com key ou id


     const deleteRandom = () => {

          // vai criar uma variavel que faz passar uma funcao que vai randomizar um numero aleatorio para baixo e vai passar o valor de 3
          const randomNumber = Math.floor(Math.random() * 4);


          //depois vai pegar o resultado anterior e filtar o valor com o randomnumber, todos que forem diferente do numero gerado pelo randomNumber vai ficar na lista
          setUser((prevUser) => {

               return prevUser.filter((user) => randomNumber !== user.id);

          })
     }


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

                    <button onClick={deleteRandom}> Delete User</button>
               </div>

          </div>
     );
}

export default ListRender;

//il = .
//ul = lista
//ol = personalizada <ol type="1"> </ol>