import { RegistrationForm, FeedbackForm, DuringEvent } from "./";

const Forms = ({ stage }) => {
  return (
    <>
      {(() => {
        switch (stage) {
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
