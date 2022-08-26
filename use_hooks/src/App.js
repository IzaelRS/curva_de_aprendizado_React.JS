
import './App.css';
import Hooks from './components/Hooks';
import ListRender from './components/ListRender';

function App() {
  return (
    <div className="App">
      <div>
        <h1> Hooks</h1>
        <Hooks />
      </div>
      <div>
        <ListRender />
      </div>
    </div>
  );
}

export default App;
