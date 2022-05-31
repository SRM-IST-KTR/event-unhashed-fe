import { useState, useEffect } from "react";

import { RegistrationForm, FeedbackForm, DuringEvent } from "./";
import { getEventStage } from "../../../utils/services/rest";

const Forms = () => {
  const [eventStage, setEventStage] = useState("registration");

  useEffect(() => {
    (async () => {
      try {
        const stage = await getEventStage();
        setEventStage(stage);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {(() => {
        switch (eventStage) {
          case "registration":
            return <RegistrationForm />;
          case "onspot":
            return <DuringEvent />;
          case "closed":
            return <FeedbackForm />;
          default:
            return <></>;
        }
      })()}
    </>
  );
};

export default Forms;
