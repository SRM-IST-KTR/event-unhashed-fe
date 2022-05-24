import logo from './logo.svg';
import './App.css';
import Speaker from './components/Speaker/Speaker';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Speaker} />
    </Router>
  );
}

export default App;
