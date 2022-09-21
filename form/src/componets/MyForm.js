import { useState } from 'react';
import './MyForm.css';


const MyForm = ({ user }) => {
   //7 - controlled inputs
   // 3 - gerenciamento de dados 
   const [name, setName] = useState(user ? user.name : '');

   const [email, setEmail] = useState(user ? user.email : '');

   const [bio, setBio] = useState(user ? user.bio : '');

   const [role, setRole] = useState(user ? user.role : '');


   // 4 - funcao bloco
   const handleName = (evento) => {
      setName(evento.target.value);  // pegando o estado final do valor 
   };


   const handleSubmit = (event) => {
      event.preventDefault(); // serve para que a pagina náo recarregue totalmente assim deixando feiarta UX
      console.log("enviando formulario");
      console.log(name);
      console.log(email);
      console.log(bio);
      console.log(role);

      //8 - limpar formulario
      setEmail('');
      setName('');
      setBio('');
      setRole('');
   };


   return (
      <div>

         <div>
            {/*1-criacao de form*/}
            {/*6-envio de form */}
            <form onSubmit={handleSubmit}>
               <div>
                  <label htmlFor='name'>Nome: </label>
                  <input
                     type='text'
                     name='name' // mesmo 'name' de htmlfor...
                     placeholder='Digite o seu nome'
                     onChange={handleName}
                     value={name}
                  />
               </div>

               {/*2-Label envolvendo input */}
               <label>
                  <span> E-mail: </span>
                  <input
                     type='email'
                     name='email'
                     placeholder='Digite o seu email'
                     //5- funcao inline
                     onChange={(evento) => setEmail(evento.target.value)}
                     value={email}
                  />
               </label>

               {/*9-Textarea*/}
               <label>
                  <span> BIO :</span>
                  <textarea
                     name='bio'
                     placeholder='Descricao do usuario'
                     onChange={(evento) => setBio.target.value}
                     value={bio}
                     id='' // não precisa 
                     cols=''// não precisa
                  ></textarea>
               </label>

               {/*10- select*/}
               <label>
                  <span> funcao no sistema</span>
                  <select
                     name='role'
                     id='' // nao precisa
                     onChange={(evento) => setRole(evento.target.value)}
                     value={role}
                  >
                     <option value="Usuario"> Usuario </option>
                     <option value="editor"> Editor </option>
                     <option value="admin"> Administrador</option>

                  </select>
               </label>
               <input type='submit' value='Enviar' />
            </form>
         </div>

      </div>
   )
}

export default MyForm

