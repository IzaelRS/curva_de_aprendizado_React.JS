import './App.css';
import MyForm from './componets/MyForm';


function App() {
  return (
    <div className="App">
      <h2> Form </h2>
      <MyForm user={{
        name: "Josias",
        email: "josias@gmail.com",
        bio: "Sou Medico",
        role: "Administrador",
      }} />
    </div>
  );
}

export default App;
