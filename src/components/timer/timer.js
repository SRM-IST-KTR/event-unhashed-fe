import Hero from "../../utils/icons/githubHeroOld.png"

const Timer = () => {
  return <div className="flex flex-row mx-12 md:w-6/12 md:mx-auto">
    <figure className="basis-2/5">
      <img src={Hero} alt="Github Hero" className=" w-64 h-auto mx-auto" />
    </figure>
  </div>;
};

export default Timer;
