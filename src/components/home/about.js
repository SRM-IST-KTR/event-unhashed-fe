import { Location, Calendar } from "../../utils/icons";

const About = () => {
  return (
    <section
      className="flex flex-col mx-8 max-w-4xl w-11/12 md:mx-auto gradientBox my-16 px-4 md:px-8 pt-8"
      id="about"
    >
      <h2 className="uppercase text-medium-turquoise text-3xl font-bold text-center">
        About
      </h2>

      <div className="flex w-full">
        <p className="italic font-medium mt-4 mb-8 w-full text-center text-xl">
          Getting acquainted with emerging technologies is one of the ways to
          move ahead of your competitors, and Blockchain is at the top. GitHub
          Community SRM present UNHASHED: Demystifying The Blockchain,a hands-on
          session superintended by industry professionals, aimed at providing
          knowledge for better understanding, and developing Smart Contracts
          based on Zilliqa.
        </p>
      </div>

      <div className="text-lg font-bold">
        <div className="flex justify-between w-11/12 mx-auto flex-col md:flex-row ">
          <p className="flex items-center gap-x-4 my-4">
            <span className="w-8">
              <Calendar />
            </span>
            6th June 2022
          </p>

          <p className="flex items-center gap-x-4 my-4">
            <span className="w-8">
              <Location />
            </span>
            TP Ganesan Auditorium
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-10/12 mx-auto md:mt-4">
          <p className="my-4">
            <span className="text-medium-turquoise">DURATION:</span> 4-5 Hours
          </p>

          <p className="my-4">
            <span className="text-medium-turquoise">TIME:</span> 12:30 PM - 5:30
            PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
