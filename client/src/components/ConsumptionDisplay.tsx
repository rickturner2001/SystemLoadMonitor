const ConsumptionDisplay = ({
  cpuNumber,
  consumption,
}: {
  cpuNumber: number;
  consumption: number;
}) => {
  return (
    <div className="flex gap-x-4 items-center">
      <span className="block p-2 text-white font-bold rounded-md">
        {cpuNumber}
      </span>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-orange-600 h-2.5 transition-all rounded-full"
          style={{ width: `${consumption}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ConsumptionDisplay;
