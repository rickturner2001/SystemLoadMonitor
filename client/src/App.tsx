import { useState } from "react";
import ConsumptionDisplay from "./components/ConsumptionDisplay";
import useAPIResponse from "./hooks/hooks";
import MemoryDataDisplay from "./components/MemoryDataDisplay";

const App = () => {
  const [isPersist, setIsPersist] = useState(false);
  const { data, isError, isLoading, sendRequest } = useAPIResponse(isPersist);

  return (
    <section className="bg-gradient-to-br p-8 from-blue-800 to-sky-800 min-h-screen w-screen flex flex-col justify-center items-center">
      <div className="flex flex-col max-w-7xl w-full mx-auto rounded-lg gap-12 items-center justify-center">
        <h1 className="text-center text-white font-bold text-5xl">
          System Load Monitor
        </h1>
        <div className="flex gap-x-4">
          <button
            className="bg-orange-500 text-white font-bold rounded-md px-5 py-2.5 w-max hover:bg-orange-600"
            onClick={sendRequest}
          >
            Start Monitoring
          </button>

          <div className="flex items-center mr-4">
            <input
              type="checkbox"
              defaultChecked={isPersist}
              onClick={() => setIsPersist((prev) => !prev)}
              className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="orange-checkbox"
              className="ml-2 text-sm font-medium text-white"
            >
              Persist requests
            </label>
          </div>
        </div>

        <div className="w-full border"></div>
        <div className="w-full flex flex-col rounded-md p-8 bg-white/10">
          {isLoading && !isPersist ? (
            <p className="text-center font-bold text-white text-2xl">
              loading...
            </p>
          ) : (
            data && (
              <>
                <MemoryDataDisplay data={data.memory} />

                <h2 className="mt-6 mb-2 text-white text-3xl text-center font-bold">
                  CPU Consumption
                </h2>
                <p className="text-center mb-4 text-gray-300">
                  {data.cpu.length} CPUs
                </p>
                {data.cpu.map((cpu, idx) => {
                  return (
                    <ConsumptionDisplay
                      key={idx}
                      consumption={cpu}
                      cpuNumber={idx + 1}
                    />
                  );
                })}
              </>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default App;
