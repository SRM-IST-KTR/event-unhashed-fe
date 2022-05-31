import { HeroBanner } from "../../utils/images";

const Hero = () => {
  return (
    <section>
      <figure>
        <img
          src={HeroBanner}
          alt="Unhashed | GitHub Community SRM"
          className="w-10/12 max-w-4xl mx-auto my-20"
        />
      </figure>

      <a
        href="#register"
        className="mx-auto flex w-fit text-center bg-indigo-dye text-2xl px-8 py-4 rounded-lg font-semibold text-medium-turquoise hover:scale-125 transition-all"
      >
        REGISTER NOW
      </a>
    </section>
  );
};

export default Hero;
