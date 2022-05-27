import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar';
import { Sponsors } from './components/Sponsors';

function App() {
  return (
    <div className="App">
      <header>
        <title>Unhashed</title>
      </header>
      <body>
      <Navbar />
      <Sponsors />
      </body>
    </div>
  );
}

export default App;
