import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";

import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import { api } from "services/api.js";
import { NavLink } from "react-router-dom";
const myApi = new api();
export default function CardArts() {
  const [page, setPage] = useState(Number(1));
  const [data, setData] = useState([]);
  const GetApi = async () => {
    try {
      const result = await myApi.FUNC_GET_PAGE_ARTS(page);
      console.log(result.data);
      setData(result.data);
    } catch (error) {}
  };

  const nextPage = () => {
    const maxPage = Math.ceil(data.length / 15);
    setPage(page > maxPage ? 1 : page + 1);
    console.log(page);
  };

  const prevPage = () => {
    setPage(page <= 1 ? 1 : page - 1);
  };

  const handlerDeleteArt = async (userId, _id, title) => {
    try {
      const result = await myApi.FUNC_DELETE_ART(userId, _id);
      console.log(result.data);
      if (result.data.status == 200) {
        GetApi();
        Swal.fire({
          position: "center",
          icon: "success",
          // text: title,
          title: "Xoá Bài Viết Thành Công",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      // setDataDocs(result.data);
    } catch (error) {}
  };

  const DeleteArt = async (userId, _id, title) => {
    Swal.fire({
      title: "Bạn Chắc Chắn Muốn Xoá Bài Viết",
      text: title,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handlerDeleteArt(userId, _id, title);
      }
    });
  };

  useEffect(() => {
    GetApi();
  }, [page]);
  return (
    <Card>
      <CardHeader color="purple" contentPosition="left">
        <h2 className="text-white text-2xl">Featured Users</h2>
      </CardHeader>

      <CardBody>
        <div className="w-full justify-between">
          <div className="justify-end flex">
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
        <div className="overflow-x-auto"></div>
        {data &&
          data?.map((item) => {
            return (
              <>
                <div class="flex items-center justify-center my-2 ">
                  <div class="rounded-xl border p-5 shadow-md w-full bg-white">
                    <div class="flex w-full items-center justify-between border-b pb-3">
                      <div class="flex items-center space-x-3">
                        {/* <div class="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div> */}
                        <img
                          class="h-8 w-8 rounded-full bg-slate-400"
                          src={item?.creatorsPhoto}
                        />
                        <div class="text-lg font-bold text-slate-700">
                          {item?.creatorsName}
                        </div>
                      </div>
                      <div class="flex items-center space-x-8">
                        <button class="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">
                          <div class="flex cursor-pointer items-center transition hover:text-slate-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="mr-1.5 h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                              />
                            </svg>
                            <span>{item?.like.length}</span>
                          </div>
                        </button>
                        <div class="text-xs text-neutral-500">
                          {item?.view} view
                        </div>
                        <Button
                          onClick={(e) =>
                            DeleteArt(item?.creatorsId, item?._id, item?.title)
                          }
                        >
                          Delete
                        </Button>
                      </div>
                    </div>

                    <div class="mx-2">
                      <div class=" text-xl font-bold hover:text-blue-600">
                        <NavLink to={`/view/baiviet/${item?._id}`}>
                          {item?.title.substring(0, 50) + "..."}
                        </NavLink>
                      </div>
                      <div class="text-sm text-neutral-200">
                        {item?.content.substring(0, 200) + "..."}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </CardBody>
    </Card>
  );
}
