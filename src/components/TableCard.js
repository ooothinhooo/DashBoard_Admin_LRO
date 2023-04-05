import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { Button } from "@material-tailwind/react";
import Image from "@material-tailwind/react/Image";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { api } from "services/api.js";
import ViewProfileUser from "./ViewProfileUser.jsx";
import { NavLink } from "react-router-dom";
const myApi = new api();
export default function CardTable() {
  const [dataUser, setDataUser] = useState([]);

  const GetApi = () => {
    myApi
      .FUNC_GET_STATISTICSUSERS()
      .then((response) => {
        setDataUser(response.data.data.TUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (_id) => {
    myApi
      .FUNC_DELETE_USER(_id)
      .then((response) => {
        // setDataUser(response.data.data.TUser);
        // console.log(response);
        if (response.data.status == 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Xoá Người Dùng Thành Công",
            showConfirmButton: false,
            timer: 1500,
          });
          GetApi();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const DeleteUser = (_id, first_name, last_name) => {
    try {
      Swal.fire({
        title: "Bạn  Muốn Xoá Người Dùng",
        text: first_name + " " + last_name,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          handleDelete(_id);
        }
      });
    } catch (error) {}
  };

  const handleChangeAcces = (_id) => {
    myApi
      .FUNC_CHANGE_ACCESS_USER(_id)
      .then((response) => {
        // setDataUser(response.data.data.TUser);
        // console.log(response);
        if (response.data.status == 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thay Đổi Thành Công",
            showConfirmButton: false,
            timer: 1500,
          });
          GetApi();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ChangeAccesUser = (_id, first_name, last_name) => {
    try {
      Swal.fire({
        title: "Bạn Muốn Thay Đổi Quyền Cho Người Dùng",
        text: first_name + " " + last_name,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.isConfirmed) {
          handleChangeAcces(_id);
        }
      });
    } catch (error) {}
  };

  useEffect(() => {
    GetApi();
  }, []);

  function BoxUser() {
    return (
      <>
        {dataUser &&
          dataUser?.map((i) => {
            return (
              <>
                <tr
                  className={`${
                    i.access == "admin" ? "bg-gray-300 " : ""
                  }  rounded-3xl`}
                >
                  <th
                    className={` border-b  border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-2 text-left`}
                  >
                    <div className="flex justify-start items-center">
                      <div className="w-10 h-10 rounded-full border-2 border-white">
                        <Image
                          className="w-full h-full"
                          src={i.avatar}
                          rounded
                          alt="..."
                        />
                      </div>
                      <span className="mx-2">
                        {" "}
                        {i.first_name + " " + i.last_name}
                      </span>
                    </div>
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-2 text-left">
                    {i.docs.length}
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-2 text-left">
                    {i.articles.length}
                  </th>

                  <th className="justify-end border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-2 text-left">
                    {/* <Progress color="red" value="60" /> */}
                    <div className="flex gap-4">
                      <Button variant="gradient">
                        <NavLink to={`/u/${i._id}`}>View User</NavLink>
                      </Button>
                      <Button
                        onClick={(e) =>
                          DeleteUser(i?._id, i.first_name, i.last_name)
                        }
                        variant="outlined"
                      >
                        Delete
                      </Button>
                      <Button
                        onClick={(e) =>
                          ChangeAccesUser(i?._id, i.first_name, i.last_name)
                        }
                        variant="outlined"
                      >
                        Change Access
                      </Button>
                    </div>
                  </th>
                  {/* <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {i.access}
                  </th> */}
                </tr>
              </>
            );
          })}
      </>
    );
  }


  return (
    <Card>
      <CardHeader color="purple" contentPosition="left">
        <h2 className="text-white text-2xl">Featured Users</h2>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  User
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Docs
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Arts
                </th>

                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Action
                </th>
                {/* <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Access
                </th> */}
              </tr>
            </thead>
            <tbody>
              <BoxUser />
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
