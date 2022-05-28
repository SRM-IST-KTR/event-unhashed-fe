import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar';
import { Sponsors } from './components/Sponsors';

function App() {
  return (
    <div className="App" style={{backgroundImage: 'url("/BG.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
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
