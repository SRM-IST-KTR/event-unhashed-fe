import './App.css';
import {Navbar} from './components/Navbar';
import { Sponsors } from './components/Sponsors';
import Speaker from './components/Speaker/Speaker';
import About from './components/About/About';
import {Banner} from './components/Banner';
import Footer from "./components/footer/footer";
import Timer from "./components/timer/timer";

function App() {
  return (
    <div className="App" style={{backgroundImage: 'url("/BG.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <header>
        <title>Unhashed</title>
      </header>
      <body>
      <Navbar />
      <Banner />
      <Speaker />
      <About />
      <Sponsors />
      <Timer />
      <Footer />
      </body>
    </div>
  );
}
 
export default App;