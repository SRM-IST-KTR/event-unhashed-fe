import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import "./App.css";
import { Navbar, Footer } from "./components/shared";
import { Home } from "./components/home";

const App = () => {
  return (
    <div
      className="App"
      style={{
        backgroundImage: 'url("/BG.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <body>
        <ToastContainer />
        <Navbar />
        <Home />
        <Footer />
      </body>
    </div>
  );
};

export default App;
