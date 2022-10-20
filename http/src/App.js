import './App.css';
import { useState, useEffect } from "react";

//

//4- custom hook
import { useFetch } from './hooks/useFetch';

//url base da API
const url = "http://localhost:3000/products";

function App() {

  const [products, setProducts] = useState([]);

  //4- custom

  const { data: items, httpConfig, loading, error } = useFetch(url);


  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - resgantando dados com useEffect

  {/*
  useEffect(() => {

    async function fetchData() {

      const res = await fetch(url); // fazendo a requisicao

      const data = await res.json(); // convertendo o res

      setProducts(data); // amazenado o valor data no setProdutos

    }

    fetchData();

  }, []);
*/}

  //2 - add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    };

    //const res = await fetch(url, {
    //  method: "POST",
    //  headers: {
    //    "content-Type": "application/json"
    // },
    // body: JSON.stringify(product)
    //});

    //3 - Carregamento dinamico

    // tranformando Json em JSX para usar  no setProducts
    //const addedProduct = await res.json();

    // implementendo a lisra com a nova adição 
    //setProducts((prevProduct) => [...prevProduct, addedProduct]);

    // 5 - refatorando post
    httpConfig(product, "POST");




    //resetando os states
    setPrice("");
    setName("");

  };


  return (
    <div className='App'>
      <h1> Lista de Produtos</h1>
      {/* 6 loading*/}

      {loading && <p> Carregando dados... </p>}
      {error && <p>{error}</p>}
      {!loading && (
        <ul>
          {items && items.map((products) => (
            <li key={products.id}>
              {products.name} - R$: {products.price}
            </li>
          ))}
        </ul>
      )}

      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          {/* 7- stete de loading no post */}
          {loading && <input type="submit" value="Aguarde" />}

          {!loading && <input type="submit" value="Criar" />}

        </form>
      </div>
    </div>
  );
}

export default App;


{/*
*instalar json : yarn add json-server

*criar uma pasta data e dentro dela colocar db.json

* depois ir no package.json e colocar
 "server": "json-server --watch data/db.json"

* iniciar a porta 3000 com api
yarn run server

*inicializar o react e aceitar usar a porta 3001
*/}


//////
{/*
O fetch devolve uma promessa de que algo será retornado, essa promessa é chamada de Promisse. Essa promessa pode tanto ser boa, ter retornado os dados, quanto ter falhado por algum motivo - como no caso da conexão com o servidor cair.
*/}