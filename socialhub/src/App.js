import './App.css';
import Header from './Components/Header'
import {BrowserRouter} from 'react-router-dom';
import MainRouter from './MainRouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          SOCIAL HUB
        </p>
      </header>
      <Header/>
      <BrowserRouter>
      <MainRouter/>
    </BrowserRouter>
  </div>
  );
}

export default App;
