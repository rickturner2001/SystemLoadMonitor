const MemoryDataDisplay = ({ data }: { data: MemoryData }) => {
  return (
    <div className="bg-white  p-12 mb-12">
      <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center md:grid-cols-2 lg:grid-cols-4">
        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt className="text-base leading-7 text-gray-600">Memory total</dt>
          <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            {data.total.toFixed(2)} MB
          </dd>
        </div>

        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt className="text-base leading-7 text-gray-600">
            Memory available
          </dt>
          <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            {data.available.toFixed(2)} MB
          </dd>
        </div>

        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt className="text-base leading-7 text-gray-600">Memory used</dt>
          <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            {data.used.toFixed(2)} MB
          </dd>
        </div>
        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt className="text-base leading-7 text-gray-600">
            Memory percentage
          </dt>
          <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            {data.pct.toFixed(2)}%
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default MemoryDataDisplay;
