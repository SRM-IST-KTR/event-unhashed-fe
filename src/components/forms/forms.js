import { useState, useEffect } from "react";

import { RegistrationForm, FeedbackForm, DuringEvent } from "./";
import { getEventStage } from "../../utils/services/rest";

const Forms = () => {
  const [eventStage, setEventStage] = useState("PRE");

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
          case "PRE":
            return <RegistrationForm />;
          case "DURING":
            return <DuringEvent />;
          case "POST":
            return <FeedbackForm />;
          default:
            return <></>;
        }
      })()}
    </>
  );
};

export default Forms;
