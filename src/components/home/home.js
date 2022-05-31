import { Hero, About, Speaker, Sponsors, Timer, Forms } from ".";

const Home = ({ stage, deadline }) => {
  return (
    <>
      <Hero />
      <About />
      <Speaker />
      <Sponsors />
      <Timer deadline={deadline} />
      <Forms stage={stage} />
    </>
  );
};

export default Home;
