import { TickerCell } from '../TickerCell';
import { TickerSeparator } from '../TickerSeparator';
import { useTicker } from '../../hooks';
 
import style from './Ticker.module.scss';

export const Ticker = ({ futureDate }) => {
    const { days, hours, minutes, seconds, isTimeUp } = useTicker(futureDate);
    const tickerContents = isTimeUp ? (
        <div className={ style.timeIsUp }>Registrations are closed.</div>
    ) : (
        <>
            <TickerCell value={days} label="Days" />
            <TickerSeparator />
            <TickerCell value={hours} label="Hours" />
            <TickerSeparator />
            <TickerCell value={minutes} label="Minutes" />
            <TickerSeparator />
            <TickerCell value={seconds} label="Seconds" />
        </>
    );

    return (             
        <div className={`flex mx-auto my-auto p-8  gradientBox`}>
            { tickerContents }           
        </div>              
    );
}