import React from 'react'

const CarDetails = ({ brand, km, color, year, newCar }) => { // aqui chama as propriedades de car detais

     return (
          <div>
               <h2> Detalhes do carro </h2>
               <ul>
                    <li> Marca: {brand}</li>
                    <li> Kilometragem: {km}</li>
                    <li> Cor: {color}</li>
                    <li> Ano: {year}</li>
               </ul>
               {newCar && <p> Este carro é novo </p>}
               {/* se é newCar !!!*/}
          </div>
     );
};


export default CarDetails;