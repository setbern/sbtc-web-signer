import { useState } from "react";
import TxDetail from "./TxDetail";
import DashboardStats from "./DashboardStats";

const HomeDashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="py-5 pt-20 ">
        <div className="mx-auto max-w-7xl px-4 flex flex-wrap justify-end items-center gap-6 sm:flex-nowrap sm:px-6 lg:px-8">
          <div className="order-last flex justify-end w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:pl-6 sm:leading-7">
            <a href="#" className="text-secondary text-lg">
              Last 7 days
            </a>
            <a href="#" className="text-white text-lg">
              Last 30 days
            </a>
            <a href="#" className="text-white text-lg">
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
