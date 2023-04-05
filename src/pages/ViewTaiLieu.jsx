import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "services/api.js";
const myApi = new api();
function ViewTaiLieu() {
  let { id } = useParams();
  // let colDB = `CMT/tailieu/${id}`;
  const [data, setData] = useState();

  const GetAPI = async () => {
    try {
      const result = await myApi.FUNC_GET_DOC(id);
      // console.log(result);
      setData(result.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    GetAPI();
  }, []);
  return (
    <div>
      <div className="w-full bg-white flex justify-center items-center">
        <div className=" w-full h-full  ">
          <div className="w-full my-2 bg-white">
            {/* <!-- Breadcrumb --> */}
            <nav
              class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
              aria-label="Breadcrumb"
            >
              <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                  <Link
                    to={"/"}
                    class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    Trang Chủ
                  </Link>
                </li>
                <li>
                  <div class="flex items-center">
                    <svg
                      aria-hidden="true"
                      class="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <Link
                      to={"/tailieu"}
                      class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Tài Liệu
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div class="flex items-center">
                    <svg
                      aria-hidden="true"
                      class="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                      {data?.title}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>

            <div className="flex justify-start items-end my-1">
              <img className="h-8 w-8 rounded-full" src={data?.creatorsPhoto} />
              <Link
                class="text-black  hover:text-blue-400 mx-2 font-thin"
                to={`/u/${data?.creatorsId}`}
              >
                <h1 className="text-md">{data?.creatorsName}</h1>
              </Link>
            </div>
            <div class="p-4 rounded border border-gray-700 bg-gray-50 h-auto ">
              <div class="flex justify-between items-center">
                <div className="flex">
                  <a class="text-black font-bold hover:text-blue-400" href="#">
                    {data?.title}
                  </a>
                </div>
                <div className="flex gap-2">
                  <div class="flex">
                    <button class="hover:border-white text-black bg-white p-1 border border-gray-600 rounded-l hover:border-b hover:border-blue-400-lg">
                      ⭐{data?.view}
                    </button>
                    <button class="hover:border-white text-black bg-white p-1 border border-gray-600 rounded-r-lg">
                      Lượt xem
                    </button>
                  </div>
                  <div class="flex">
                    <button class="hover:border-white text-black bg-white p-1 border border-gray-600 rounded-l hover:border-b hover:border-blue-400-lg">
                      ⭐{data?.like.length}
                    </button>
                    <button class="hover:border-white text-black bg-white p-1 border border-gray-600 rounded-r-lg">
                      Lượt thích
                    </button>
                  </div>
                </div>
              </div>
              <p class="text-sm text-gray-400">{data?.content}</p>
              <div class="mt-3 flex items-center gap-5">
                {/* <p class="text-sm text-gray-400">🔴 C++</p> */}
                {data?.tag.map((i) => {
                  return (
                    <a href="#" class="text-sm text-gray-400">
                      ⭐ {i}
                    </a>
                  );
                })}
                <p class="text-sm text-gray-400">Update {data?.date}</p>
              </div>
            </div>
          </div>

          <div className="w-full h-screen flex justify-center items-center ">
            <iframe
              className=" w-full h-full rounded-xl
          "
              allowfullscreen=""
              frameborder="0"
              src={data?.docs_URL}
              title="Hello"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTaiLieu;
