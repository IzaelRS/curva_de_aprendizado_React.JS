import logo from './logo.svg';
import './App.css';
import UserDetails from './component/UserDetails';


// mostrar todos os nomes e dados e fazer uma funao que mostre que se for maior de 18 anos pode tirar a carta de motorista

function App() {

  const users = [
    { id: 1, name: "Izael", job: "Programador", age: 28 },
    { id: 2, name: "Patricia", job: "RH", age: 30 },
    { id: 3, name: "Pablo", job: "desenhista", age: 17 },
  ]
  return (
    <div>
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          job={user.job}
          age={user.age}
        />
      ))};
    </div>

  );
}

export default App;
