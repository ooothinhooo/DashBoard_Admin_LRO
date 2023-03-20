import React, { useEffect, useState } from "react";
import StatusCard from "components/StatusCard";
import TableCard from "components/TableCard";
import TableDoc from "components/Documents/TableDoc.js";

import { api } from "services/api.js";
const myApi = new api();
function DocumentManagement() {
  const [data, setData] = useState([]);

  const GetApi = () => {
    myApi
      .FUNC_GET_STATISTICSDOCS()
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    GetApi();
  }, []);

  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <StatusCard
              color="pink"
              icon="trending_up"
              title="Total Docs"
              amount={data?.TotalDoc}
              percentage="3.48"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Since last month"
            />
            <StatusCard
              color="orange"
              icon="groups"
              title="New Docs"
              amount={data?.NewDoc}
              percentage="3.48"
              percentageIcon="arrow_downward"
              percentageColor="red"
              date="Since last week"
            />
            <StatusCard
              color="purple"
              icon="paid"
              title="Total View"
              amount={data?.TotalViewDoc}
              percentage="1.10"
              percentageIcon="arrow_downward"
              percentageColor="orange"
              date="Since yesterday"
            />
            <StatusCard
              color="blue"
              icon="poll"
              title="Total Like"
              amount={data?.TotalLikeDoc}
              percentage="12"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Since last month"
            />
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <TableDoc />
          </div>
        </div>
      </div>
    </>
  );
}

export default DocumentManagement;
