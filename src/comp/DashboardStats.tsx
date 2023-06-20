import { classNames } from "../const/util";

const stats = [
  { name: "Current Cycle", value: "4053" },
  { name: "Approved Tx's", value: "50" },
  { name: "Rejected Tx's", value: "12" },
  { name: "Total sBTC", value: "358,000,000" },
];

interface StatProps {
  changeTimeFilter: (filter: number) => void;
}
const DashboardStats = () => {
  return (
    <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
      <dl className="mx-auto grid grid-cols-1 gap-px  sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.name}
            className={classNames(
              i === 0
                ? "rounded-t-2xl sm:rounded-tr-none lg:rounded-tl-2xl lg:rounded-bl-2xl  lg:border-r-0 lg:rounded-tr-none"
                : "",
              i === 1
                ? " sm:rounded-tr-2xl sm:rounded-br-none lg:rounded-tr-none lg:border-r-0"
                : "",
              "flex flex-wrap  items-baseline justify-between gap-x-4 gap-y-2 bg-[#121212]  py-6 px-6 xl:px-8 border-[#616161] border",
              i === 2
                ? "sm:rounded-bl-2xl  sm:rounded-br-none lg:rounded-none "
                : "",
              "flex flex-wrap  items-baseline justify-between gap-x-4 gap-y-2 bg-[#121212]  py-6 px-6 xl:px-8 border-[#616161] border",
              i === 3
                ? "rounded-br-2xl rounded-bl-2xl sm:rounded-bl-none lg:rounded-br-2xl lg:rounded-tr-2xl  lg:border-l-0  lg:rounded-bl-none"
                : ""
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
