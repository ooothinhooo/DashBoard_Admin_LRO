import React from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Button, Image } from "@material-tailwind/react";

import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { api } from "services/api.js";
import BoxView from "./BoxView.jsx";
import { useParams } from "react-router-dom";

const myApi = new api();
function ViewProfileUser() {
  // const { user } = useContext(ProductContext);
  // let auth = user?.token;
  let { id } = useParams();
  const [isMenu, setIsMenu] = useState(1);
  const [data, setData] = useState([]);
  //   const [isConfirmPass, setIsConfirmPass] = useState();

  // console.log(data);
  const CallAPI = async () => {
    console.log(id);
    const result = await myApi.FUNC_CALL_USER(id);
    console.log(result.data);
    setData(result.data.data);
  };

  function render() {
    if (isMenu == 1) {
      return <BoxView data={data.docs} />;
    } else if (isMenu == 2) {
      return <BoxView data={data.articles} />;
    }
  }

  useEffect(() => {
    CallAPI();
  }, []);
  return (
    <div className=" ">
      <Card>
        <CardHeader
          className="flex justify-between items-center"
          color="purple"
          contentPosition="left"
        ></CardHeader>
        <CardBody>
          <>
            <div class="card w-full mx-auto bg-white  shadow-xl hover:shadow">
              <img
                class="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
                src={data?.avatar}
                alt=""
              />
              <div class="text-center mt-2 text-3xl font-medium">
                {" "}
                {data.first_name + " " + data.last_name}
              </div>
              <div class="text-center mt-2 font-light text-sm">
                {data.email}
              </div>
              <div class="flex justify-center items-center  text-center font-normal my-2 text-lg">
                <div className="mx-2">
                  <p class="font-bold text-gray-700 text-xl">
                    {data?.docs?.length}
                  </p>
                  <p class="text-gray-400">Tài Liệu</p>
                </div>
                <div className="mx-2">
                  <p class="font-bold text-gray-700 text-xl">
                    {data?.articles?.length}
                  </p>
                  <p class="text-gray-400">Bài Viết</p>
                </div>
              </div>
              {/* <div class="px-6 text-center mt-2 font-light text-sm">
                <p>
                  Front end Developer, avid reader. Love to take a long walk,
                  swim
                </p>
              </div> */}
              <div class="mt-8"></div>
              {/* <div class="flex p-4">
                <div class="w-1/2 text-center">
                  <span class="font-bold">1.8 k</span> Followers
                </div>
                <div class="w-0 border border-gray-300"></div>
                <div class="w-1/2 text-center">
                  <span class="font-bold">2.0 k</span> Following
                </div>
              </div> */}
              <div class="mt-12 flex flex-col justify-center">
                <div className="">
                  {" "}
                  <div class="grid grid-cols-2 gap-5">
                    {" "}
                    <button
                      onClick={() => setIsMenu(1)}
                      class={`${
                        isMenu == 1
                          ? "bg-indigo-500 text-white"
                          : "bg-white text-indigo-500  "
                      } p-4 rounded shadow-md flex items-center justify-center`}
                    >
                      Tài Liệu
                    </button>{" "}
                    <button
                      onClick={() => setIsMenu(2)}
                      class={`${
                        isMenu == 2
                          ? "bg-indigo-500 text-white"
                          : "bg-white text-indigo-500  "
                      } p-4 rounded shadow-md flex items-center justify-center`}
                    >
                      Bài Viết
                    </button>{" "}
                  </div>{" "}
                  <div
                    class={`${
                      isMenu == 1 ? "block" : "hidden"
                    } bg-green-200 shadow-xl border border-gray-100 font-light p-8 rounded text-gray-500 bg-white mt-6`}
                  >
                    {render()}
                  </div>{" "}
                  <div
                    class={`${
                      isMenu == 2 ? "block" : "hidden"
                    } bg-green-200 shadow-xl border border-gray-100 font-light p-8 rounded text-gray-500 bg-white mt-6`}
                  >
                    {render()}
                  </div>{" "}
                </div>
              </div>
            </div>
          </>
        </CardBody>
      </Card>
    </div>
  );
}

export default ViewProfileUser;
