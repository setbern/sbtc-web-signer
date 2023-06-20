import { useState } from "react";
import TxDetail from "./TxDetail";
import DashboardStats from "./DashboardStats";
import { classNames } from "../const/util";

const HomeDashboard = () => {
  const [open, setOpen] = useState(false);

  const [dateRangeFilter, setDateRange] = useState(0);
  /* 
    0 = last 7 days
    1 = last 30 days
    2 = all time
  */

  return (
    <>
      <div className="py-5 pt-20 ">
        <div className="mx-auto max-w-7xl px-4 flex flex-wrap justify-end items-center gap-6 sm:flex-nowrap sm:px-6 lg:px-8">
          <div className="order-last flex justify-end w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:pl-6 sm:leading-7">
            <a
              onClick={() => setDateRange(0)}
              className={classNames(
                dateRangeFilter === 0 ? "text-secondary" : "text-white",
                "cursor-pointer text-lg"
              )}
            >
              Last 7 days
            </a>
            <a
              onClick={() => setDateRange(1)}
              className={classNames(
                dateRangeFilter === 1 ? "text-secondary" : "text-white",
                " text-lg cursor-pointer"
              )}
            >
              Last 30 days
            </a>
            <a
              onClick={() => setDateRange(2)}
              className={classNames(
                dateRangeFilter === 2 ? "text-secondary" : "text-white",
                "cursor-pointer text-lg"
              )}
            >
              All-time
            </a>
          </div>
        </div>
      </div>
      <TxDetail open={open} setOpen={setOpen} />
      <DashboardStats />
    </>
  );
};

export default HomeDashboard;
