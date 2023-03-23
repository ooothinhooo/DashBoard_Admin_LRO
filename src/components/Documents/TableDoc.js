import React, { useEffect, useState } from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import { Select, Option } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Image from "@material-tailwind/react/Image";
import Progress from "@material-tailwind/react/Progress";
import ViewDoc from "./ViewDoc.js";
import Swal from "sweetalert2";
import Iframe from "react-iframe";

import { NavLink } from "react-router-dom";
import { CategoryArr } from "data/CategoryArr.js";
import { api } from "services/api.js";
const myApi = new api();
function TableDoc() {
  const [page, setPage] = useState(Number(1));
  const [cate, setCate] = useState("");
  const [dataDocs, setDataDocs] = useState([]);
  function renderCategory(value) {
    const category = CategoryArr.find((item) => item.value === value);
    const categoryName = category ? category.name : "Tất cả Danh Mục";
    return categoryName;
  }

  const GetApi = async () => {
    try {
      const result = await myApi.FUNC_GET_PAGE_DOCS(page, cate);
      console.log(result.data);
      setDataDocs(result.data);
    } catch (error) {}
  };

  const handlerDeleteDoc = async (userId, _id) => {
    try {
      const result = await myApi.FUNC_DELETE_DOC(userId, _id);
      console.log(result.data);
      if (result.data.status == 200) {
        GetApi();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Xoá 1 Doc Thành Công",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      // setDataDocs(result.data);
    } catch (error) {}
  };
  const DeleteDoc = async (userId, _id, title) => {
    try {
      Swal.fire({
        title: "Bạn Chắc Chắn Muốn Xoá Tài Liệu",
        text: title,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          handlerDeleteDoc(userId, _id, title);
        }
      });
    } catch (error) {}
  };

  function BoxDocs() {
    return (
      <>
        <div className="">
          <div className=" w-full  flex justify-center items-center">
            <div className=" w-full py-5 px-8 bg-blue-100 justify-center items-center ">
              <div class="block">
                {dataDocs &&
                  dataDocs.map((item, index) => {
                    return (
                      <div class="flex flex-col justify-center w-full my-2 ">
                        <div class="w-full  relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-3   mx-auto border border-white bg-white">
                          <p className="bg-green-100 w-auto h-8 flex text-md absolute -z-1 rounded-tl-lg rounded-br-full top-0 left-0">
                            <span className="p-1">
                              {renderCategory(item?.category)}
                              {/* <renderCategory value={item?.category} /> */}
                            </span>
                          </p>
                          <div class="w-full h-full md:w-1/3  bg-white md:grid md:place-items-center top-4 ">
                            <iframe
                              class="w-full h-full overflow-hidden overflow-y-hidden overflow-x-hidden rounded cursor-grabbing  shadow-lg box-decoration-clone"
                              src={item?.docs_URL}
                              title="W3Schools Free Online Web Tutorials"
                              frameborder="0"
                              scrolling="0"
                            />
                          </div>
                          <div class="w-full md:w-2/3  bg-white md:flex md:flex-col md:space-y-2 md:p-3">
                            <div class="flex justify-between item-center">
                              <p class="text-gray-500 font-medium hidden md:block">
                                {item?.view} Lượt xem
                              </p>
                              <Button
                                onClick={(e) =>
                                  DeleteDoc(
                                    item?.creatorsId,
                                    item?._id,
                                    item?.title
                                  )
                                }
                              >
                                Delete
                              </Button>
                            </div>
                            <h3 class=" text-gray-800 md:text-lg text-[16px] font-light">
                              <NavLink to={`/tailieu/view/${item?._id}`}>
                                <h3 class="text-gray-900 hover:text-blue-500 cursor-pointer font-extrabold m-1 py-1 ">
                                  {item?.title.substring(0, 27) + "..."}
                                </h3>
                              </NavLink>
                            </h3>
                            <p class="md:text-xs font-thin text-gray-500 text-base">
                              {item?.content.substring(0, 90) + " ..."}
                            </p>

                            <div className="text-xs text-blue-800 w-auto h-auto whitespace-nowrap flex">
                              {item?.tag.slice(0, 3).map((i) => {
                                return (
                                  <>
                                    <div>
                                      <div class="inline-block relative py-1 text-xs mx-1">
                                        <div class="absolute inset-0 text-blue-200 flex">
                                          <svg
                                            height="100%"
                                            viewBox="0 0 50 100"
                                          >
                                            <path
                                              d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                          <div class="flex-grow h-full -ml-px bg-blue-200 rounded-md rounded-l-none"></div>
                                        </div>
                                        <span class="relative text-blue-500 uppercase font-semibold pr-px">
                                          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                          {i}
                                          <span>&nbsp;</span>
                                        </span>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </div>

                            <p className="bg-blue-100 flex text-md absolute -z-1 px-2 py-2  rounded-tl-3xl rounded-br-lg bottom-0 right-0 items-end">
                              <img
                                src={item?.creatorsPhoto}
                                alt="avatar"
                                className="w-8 h-8 rounded-full mr-2 "
                              />
                              <NavLink to={`/u/${item?.userId}`}>
                                <h1 className="text-md text-blue-900  hover:text-green-400  hover:font-semibold  cursor-pointer">
                                  {item?.creatorsName}
                                </h1>
                              </NavLink>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  function ListCategory() {
    return (
      <>
        <select
          id="countries"
          value={cate}
          onChange={(e) => setCate(e.target.value)}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value={""}>Choose a category</option>
          {CategoryArr.map((i) => {
            return (
              <>
                <option value={i.value}>{i.name}</option>
              </>
            );
          })}
        </select>
      </>
    );
  }

  const nextPage = () => {
    const maxPage = Math.ceil(dataDocs.length / 15);
    setPage(page > maxPage ? 1 : page + 1);
    console.log(page);
  };
  const prevPage = () => {
    setPage(page <= 1 ? 1 : page - 1);
  };

  useEffect(() => {
    GetApi();
  }, [cate, page]);
  return (
    <>
      <Card>
        <CardHeader color="purple" contentPosition="left">
          <h2 className="text-white text-2xl">Featured Users</h2>
        </CardHeader>
        <div className="justify-between flex items-center">
          <div className="justify-start">
            <ListCategory />
          </div>
          <div className="justify-end">
            <div className="flex gap-4 items-center">
              <Button
                onClick={(e) => {
                  prevPage();
                }}
              >
                Pre
              </Button>
              <span>{page}</span>
              <Button
                onClick={(e) => {
                  nextPage();
                }}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
        <CardBody>
          <div className="overflow-x-auto">
            <BoxDocs />
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default TableDoc;
