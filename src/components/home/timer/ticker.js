import { Cell, Separator } from "./";
import { useTicker } from "../../../utils/hooks";

export const Ticker = ({ futureDate }) => {
  const { days, hours, minutes, seconds, isTimeUp } = useTicker(futureDate);

  return (
    <div className="flex w-10/12 mx-auto my-auto p-4 md:p-8 gradientBox">
      {isTimeUp ? (
        <div className="flex-1 text-center uppercase text-2xl md:text-5xl font-semibold">
          Registrations are closed.
        </div>
      ) : (
        <>
          <Cell value={days} label="Days" />
          <Separator />
          <Cell value={hours} label="Hours" />
          <Separator />
          <Cell value={minutes} label="Minutes" />
          <Separator />
          <Cell value={seconds} label="Seconds" />
        </>
      )}
    </div>
  );
};
