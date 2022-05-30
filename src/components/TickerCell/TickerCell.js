export const TickerCell = ({ label, value }) => {
    const formattedValue = value < 10 ? `0${value}`: value.toString();

    return (
        <div className="flex items-center flex-col mx-center">
            <span className="text-5xl md:text-7xl lg:text-9xl  text-[#fff]">{ formattedValue }</span>
            <span className="italic text-[#fff]">{ label }</span>
        </div>
    );
} 