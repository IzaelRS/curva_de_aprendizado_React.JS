
import './App.css';

import VegetaSuperSayajin from './assets/img2.jpg';

function App() {
  return (
    <div className="App">
      <h1> IMAGEM </h1>


      {/* imagem em public / esse metodo nao precisa fazer o import*/}
      <img src="./img1.jpg" alt="Vegeta" />


      <br />
      <br />

      {/* imagem em assets // recomendado / precisa nomea-la no import e fazer importa-lo / a imagem vira um component*/}

      <img src={VegetaSuperSayajin} alt="MajinVegeta" />


    </div>
  );
}

export default App;
