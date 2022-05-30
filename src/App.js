import "./App.css";
import Footer from "./components/footer/footer";
import "./App.css";
import Forms from "./components/forms/forms";
import About from './components/About/About';
import Speaker from './components/Speaker/Speaker';

function App() {
  return (
    <div className="App">
      <p className="text-5xl">Hello</p>
      <Forms />
      <About />
      <Speaker />
      <Footer />
    </div>
  );
}
 
export default App;