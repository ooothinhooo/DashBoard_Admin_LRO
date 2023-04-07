import React, { useEffect, useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import axios from "axios";

import { api } from "services/api.js";
const myApi = new api();
export default function ChangePass({ user }) {
  // const { user } = useContext(ProductContext);
  let auth = user?.token;
  const [isMenu, setIsMenu] = useState(1);
  const [eye, setEye] = useState(false);
  const [isOldPass, setOldIsPass] = useState();
  const [isPass, setIsPass] = useState();
  const [isConfirmPass, setIsConfirmPass] = useState();
  const [Form, setForm] = useState({
    oldPassword: "",
    ConfirmPass: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    if (Form.ConfirmPass == Form.password) {
      const result = await myApi.FUNC_CHANGE_PASS(auth, Form);
      // console.log(result);
      // console.log("change");

      if (result.data.status == 200) {
        let timerInterval;
        Swal.fire({
          title: "Dữ Liệu Đang Cập Nhật",
          html: "I will close in <b></b> milliseconds.",
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);

            window.location.href(`/u/${user?.userId}`);

            setIsPass("");
            setIsConfirmPass("");
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      } else if (result.data.status == 201) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${result.data.message}`,
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Mật Khẩu Không Khớp",
      });
    }
  };

  const handleChange = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // console.log(Form);
  }, [Form]);

  return (
    <Card className="w-[50%]">
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <h3 variant="h3" color="white">
          Change Password
        </h3>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input
          // value={isOldPass}
          name="oldPassword"
          onChange={handleChange}
          // onChange={(e) => setOldIsPass(e.target.value)}
          label="Old Pass"
          size="lg"
          placeholder="Current Password"
        />
        <Input
          onChange={handleChange}
          // onChange={(e) => setIsPass(e.target.value)}
          // value={isPass}
          name="password"
          label="Password"
          size="lg"
          placeholder="New Password"
        />
        <Input
          // value={isConfirmPass}
          name="ConfirmPass"
          onChange={handleChange}
          // onChange={(e) => setIsConfirmPass(e.target.value)}
          label="Password"
          size="lg"
          placeholder="Password"
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={handleSubmit} variant="gradient" fullWidth>
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
