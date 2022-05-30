import "./App.css";
import { Navbar } from "./components/Navbar";
import { Sponsors } from "./components/Sponsors";
import Speaker from "./components/Speaker/Speaker";
import About from "./components/About/About";
import { Banner } from "./components/Banner";
import Footer from "./components/footer/footer";
import Timer from "./components/timer/timer";
import { Register } from "./components/Register";
import Forms from "./components/forms/forms";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
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
        <Banner />
        <Register />
        <About />
        <Speaker />
        <Sponsors />
        <Timer />
        <Forms />
        <Footer />
      </body>
    </div>
  );
}

export default App;
