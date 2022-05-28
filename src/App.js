import './App.css';
import {Navbar} from './components/Navbar';
import { Sponsors } from './components/Sponsors';
import Speaker from './components/Speaker/Speaker';
import About from './components/About/About';

function App() {
  return (
    <div className="App" style={{backgroundImage: 'url("/BG.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <header>
        <title>Unhashed</title>
      </header>
      <body>
      <Navbar />
      <Speaker />
      <About />
      <Sponsors />
      </body>
    </div>
  );
}
 
export default App;