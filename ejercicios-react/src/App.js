import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/containers/ComponenteA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <ComponenteA></ComponenteA>
      </header>
    </div>
  );
}

export default App;
