import QueriesForm from "./queriesForm";
import RegistrationForm from "./registrationForm";
import FeedbackForm from "./feedbackForm";
import { useTicker } from "../../hooks";

const Forms = () => {
  const deadline = new Date("June 5, 2022");
  const {isTimeUp} = useTicker(deadline);

  return (
    <div>
      {
        isTimeUp ?
        (
          <FeedbackForm />
          ) :
          (
          <RegistrationForm />
        )
      }
    </div>
  );
};

export default Forms;
