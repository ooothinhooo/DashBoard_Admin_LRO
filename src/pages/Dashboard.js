import StatusCard from 'components/StatusCard';
import ChartLine from 'components/ChartLine';
import ChartBar from 'components/ChartBar';
import PageVisitsCard from 'components/PageVisitsCard';
import TrafficCard from 'components/TrafficCard';
import { api } from "services/api.js";
import { useEffect, useState } from "react";
const myApi = new api();
export default function Dashboard() {
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState([]);

  const GetApi = async () => {
    try {
      const result = await myApi.FUNC_GET_CHART();
      // console.log(result);
      setData(result.data.data);
    } catch (error) {}
  };

  const GetApiUser = async () => {
    try {
      const result = await myApi.FUNC_GET_STATISTICSUSERS();
      // console.log(result);
      setDataUser(result.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    GetApi();
    GetApiUser();
  }, []);

  return (
    <>
      <div className="bg-light-blue-500 px-3 md:px-8 h-40" />

      <div className="px-3 md:px-8 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
              <ChartLine data={data} />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              <ChartBar data={data} />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="px-3 md:px-8">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
            <StatusCard
              color="pink"
              icon="trending_up"
              title="Traffic"
              amount="350,897"
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
            <StatusCard
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
            />
          </div>
        </div>
      </div> */}

      <div className="px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
              <PageVisitsCard data={dataUser?.UserHot} />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              <TrafficCard data={dataUser?.countsForm} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
