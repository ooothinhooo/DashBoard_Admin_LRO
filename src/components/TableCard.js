import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { Button } from "@material-tailwind/react";
import Image from "@material-tailwind/react/Image";
import Progress from "@material-tailwind/react/Progress";
import Team1 from "assets/img/team-1-800x800.jpg";
import Team2 from "assets/img/team-2-800x800.jpg";
import Team3 from "assets/img/team-3-800x800.jpg";
import Team4 from "assets/img/team-4-470x470.png";
import { useState } from "react";

export default function CardTable() {
  const [dataUser, setDataUser] = useState([
    {
      fist_name: "Tran",
      last_name: "Van Thinh",
      email: "tranvanthinh@gmail.com",
      avatar: "",
    },
  ]);

  function BoxUser() {
    return (
      <>
        {dataUser &&
          dataUser?.map((i) => {
            return (
              <>
                <tr>
                  <th className="border-b  border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <div className="flex justify-start items-center">
                      <div className="w-10 h-10 rounded-full border-2 border-white">
                        <Image src={Team1} rounded alt="..." />
                      </div>
                      <span className="mx-2">
                        {" "}
                        {i.fist_name + " " + i.last_name}
                      </span>
                    </div>
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    500
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{" "}
                    2
                  </th>

                  <th className="justify-end border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {/* <Progress color="red" value="60" /> */}
                    <div className="flex gap-4">
                      <Button variant="gradient">View User</Button>
                      <Button variant="outlined">Delete</Button>
                    </div>
                  </th>
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
