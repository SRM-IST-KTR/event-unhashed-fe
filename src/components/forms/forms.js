import QueriesForm from "./queriesForm";
import RegistrationForm from "./registrationForm";
import FeedbackForm from "./feedbackForm";
import { useState } from "react";
import DuringEvent from "./duringEvent";

const Forms = () => {
  const [eventStage, setEventStage] = useState("PRE");

  const preEvent = (
    <>
      <RegistrationForm />
      <QueriesForm />
    </>
  );
  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#362A60] flex flex-col">
      {(() => {
        switch (eventStage) {
          case "PRE":
            return preEvent;
          case "DURING":
            return <DuringEvent />;
          case "POST":
            return <FeedbackForm />;
          default:
            return "";
        }
      })()}
    </div>
  );
};

export default Forms;
