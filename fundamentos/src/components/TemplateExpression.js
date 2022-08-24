const TemplatesExpression = () => {

     //aqui eu posso criar comandos JavaScript

     let name = "Izael";

     // objeto
     const data = {
          age: 28,
          job: "Programador",
     };

     return (
          <div>

               <h2>
                    Olá sou o {name} {/* aqui preciso passar {} */}
               </h2>
               <p>
                    Sou um {data.job} e tenho  {data.age} anos
               </p>


          </div>
     );


}

export default TemplatesExpression