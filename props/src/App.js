
import './App.css';
import { useState } from 'react';

import Propxxx from './component/Propxxx';
import CarDetails from './component/CarDetails';
import Fragment from './component/Fragment';
import Container from './component/Container';
import ExecuteFunction from './component/ExecuteFunction';
import Message from './component/Message';
import ChangeMessageState from './component/ChangeMessageState';

function App() {

  const nome = "Pablo" // ex 2

  const [userNome] = useState('Patricia'); // ex 3

  const cars = [
    { id: 1, brand: "ferrari", color: "Amarelo", newCar: true, km: 0, },
    { id: 2, brand: "Kia", color: "Branco", newCar: true, km: 0, },
    { id: 3, brand: "Ford", color: "Azul", newCar: false, km: 15000, }
  ];

  /////////////////////////////////////////////////
  //criando uma funcao com props

  function showProps() {
    console.log("Evento do component pai")
  }

  ////////////////////////////////////////////////
  // state lift

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (



    <div className="App">



      <div>
        {/* chamando props*/}
        <div>
          { /* Pega diretamente do pai, que no caso esta alocada no componente Propxx (tela App) e esta sendo recebida de Propxxx(props) e renderizada por {props.nome} */}
          <Propxxx nome="Izael" />
        </div>

        <div>

          <Propxxx nome={nome} /> {/* Passando por meio de variavel // 2  */}

        </div>

        <div>

          <Propxxx nome={userNome} /> {/* Passando por meio de uma state // 3 */}

        </div>
      </div>


      <div>
        {/* desconstruindo props*/}
        <h3> desconstruindo props </h3>
        <CarDetails
          brand="VW"
          km={100000}
          color="Preto"
          year={2015}
        />
      </div>

      <div>
        {/*reaproveitamento*/}

        <h3> reaproveitamento </h3>

        <CarDetails brand="Fiat" color="Preto" km={0} newCar={false} />

        <CarDetails brand="Ford" color="Branco" km={10000} newCar={true} />

        <CarDetails brand="Ford" color="Vermelho" km={0} newCar={false} />

      </div>

      <div>
        {/* loop em array de objetos*/}

        <h3> loop em array de objetos e pegando propriedades  </h3>

        {cars.map((car) => (
          <CarDetails
            key={car.id} // bug da key no console resolvido
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}

      </div>

      <div>
        <h3> Fragmentos </h3>
        {/* Fragmentos */}
        <Fragment />

        <Fragment propriedadeFragmentada="teste" />
      </div>

      <div>
        <h3> children  e HTML </h3>
        {/* children  e HTML */}
        <Container meuValor="teste">
          <p> E este é o conteudo </p>
        </Container>
      </div>

      <div>
        {/* execultar uma funcao com props */}
        <h3> execultar uma funcao com props  </h3>
        <ExecuteFunction myFunction={showProps} />

      </div>
      {/* State lift */}
      <h3> State lift </h3>
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />

    </div>
  );
}

export default App;
