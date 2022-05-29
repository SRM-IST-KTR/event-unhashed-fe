import QueriesForm from "./queriesForm";
import RegistrationForm from "./registrationForm";
import FeedbackForm from "./feedbackForm";
import { useState } from "react";

const Forms = () => {
  const [eventStage, setEventStage] = useState(0);
  return (
    <div>
      <RegistrationForm />
      <QueriesForm />
      <FeedbackForm />
    </div>
  );
};

export default Forms;
