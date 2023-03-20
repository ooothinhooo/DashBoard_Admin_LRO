import { useEffect, useState } from "react";

import StatusCard from "components/StatusCard";
import TableCard from "components/TableCard";

import { api } from "services/api.js";
const myApi = new api();
function AccountManagement() {
  const [dataUser, setDataUser] = useState([]);

  const GetApi = () => {
    myApi
      .FUNC_GET_STATISTICSUSERS()
      .then((response) => {
        // console.log(response.data.data);
        setDataUser(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    GetApi();
  }, []);
  return (
    <div>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <StatusCard
              color="pink"
              icon="trending_up"
              title="Total Users"
              amount={`${dataUser.TotalUser}`}
              percentage="3.48"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Since last month"
            />
            <StatusCard
              color="orange"
              icon="groups"
              title="New Users"
              amount="2,356"
              percentage="3.48"
              percentageIcon="arrow_downward"
              percentageColor="red"
              date="Since last week"
            />
            {/* <StatusCard
              color="purple"
              icon="paid"
              title="Sales"
              amount="924"
              percentage="1.10"
              percentageIcon="arrow_downward"
              percentageColor="orange"
              date="Since yesterday"
            />
            <StatusCard
              color="blue"
              icon="poll"
              title="Performance"
              amount="49,65%"
              percentage="12"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Since last month"
            /> */}
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <TableCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountManagement;
