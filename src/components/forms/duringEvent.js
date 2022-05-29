import styles from "./box.module.css";

const DuringEvent = () => {
  return (
    <div className="flex justify-center items-center h-96 w-full">
      <div
        className={`text-white h-64 flex items-center justify-center p-1 m-10 w-[80%] lg:w-[40%] ${styles.border} `}
      >
        <span className="text-xl lg:text-2xl text-center p-10 font-semibold">
          The registrations have been closed, but still you can go to the venue
          for on-spot registrations.
        </span>
      </div>
    </div>
  );
};

export default DuringEvent;
