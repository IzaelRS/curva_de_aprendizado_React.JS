// Components
import FirstComponent from './components/FirstComponent';
import TemplatesExpression from './components/TemplateExpression';
import Events from './components/Events';
import EventJsx from './components/EventJsx';
import Challenge from './components/Challenge';

// Styles / css
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <TemplatesExpression />
      <FirstComponent />
      <MyComponent />
      <Events />
      <EventJsx />
      <Challenge />

    </div>
  );
}

export default App;
