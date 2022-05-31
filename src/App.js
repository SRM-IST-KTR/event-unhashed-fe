import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import "./App.css";
import { Navbar, Footer } from "./components/shared";
import { Home } from "./components/home";
import { getEventData } from "./utils/services/rest";

const App = () => {
  const [eventStage, setEventStage] = useState("registration");
  const [eventDeadline, setEventDeadline] = useState(new Date("June 1, 2022"));

  useEffect(() => {
    (async () => {
      try {
        const { stage, registrationDeadline } = await getEventData();
        stage && setEventStage(stage);
        registrationDeadline && setEventDeadline(registrationDeadline);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="App bg-gradient-to-br from-black to-russian-violet">
      <body>
        <ToastContainer />
        <Navbar />
        <Home stage={eventStage} deadline={eventDeadline} />
        <Footer />
      </body>
    </div>
  );
};

export default App;
