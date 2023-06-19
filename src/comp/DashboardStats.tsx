import { classNames } from "../const/util";

const stats = [
  { name: "Current Cycle", value: "4053" },
  { name: "Approved Tx's", value: "50" },
  { name: "Rejected Tx's", value: "12" },
  { name: "Total sBTC", value: "358,000,000" },
];
const DashboardStats = () => {
  return (
    <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
      <dl className="mx-auto grid grid-cols-1 gap-px  sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.name}
            className={classNames(
              i === 0 ? "rounded-tl-2xl rounded-bl-2xl  border-r-0" : "",
              i === 3 ? "rounded-br-2xl rounded-tr-2xl  border-l-0" : "",
              i === 1 ? "  border-r-0" : "",
              "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-[#121212]  py-6 sm:px-6 xl:px-8 border-[#616161] border"
            )}
          >
            <dt className="text-md font-medium leading-6 text-sub-gray">
              {stat.name}
            </dt>
            {/* <dd
            className={classNames(
              false ? 'text-rose-600' : 'text-gray-700',
              'text-xs font-medium'
            )}
          >
            {stat.change}
          </dd> */}
            <dd className="w-full flex-none text-white text-3xl font-medium leading-10 tracking-tight t">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default DashboardStats;
