import Hero from "../../utils/icons/githubHeroOld.png";
import { Ticker } from "../Ticker";
const Timer = () => {
  const deadline = new Date("June 5, 2022");
  return (
    <section id="register" className="md:m-12 mx-auto flex flex-col">
      <h2 className="uppercase text-buttontext text-3xl font-bold text-center">
        Registrations
      </h2>
      <div className="flex flex-col md:flex-row md:w-8/12 md:mx-auto my-8">
        <figure className="md:basis-2/5">
          <img src={Hero} alt="Github Hero" className=" w-64 h-auto mx-auto" />
        </figure>
        <Ticker futureDate={deadline} className="" />
      </div>
    </section>
  );
};

export default Timer;
