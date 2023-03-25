import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import Swal from "sweetalert2";
import { api } from "services/api.js";
import { useEffect, useState } from "react";
const myApi = new api();
export default function SettingsForm({ user }) {
  const id = user?.userId;
  const auth = user?.token;
  const [dataUser, setDataUser] = useState([]);
  const [Form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    avatar: "",
    isSex: "",
  });

  const CallAPI = async () => {
    try {
      const result = await myApi.FUNC_VIEW_PROFILE_USER(id);
      console.log(result);
      var re = result.data.data;
      setForm({
        first_name: re.first_name,
        last_name: re.last_name,
        email: re.email,
        phone: re.phone,
        avatar: re.avatar,
        isSex: re.isSex,
      });
      setDataUser(result.data.data);
    } catch (error) {}
  };
  const handleChange = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };

  const isFormEmpty = () => {
    return Object.values(Form).some((x) => x === "" || x === null);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(e);

    try {
      if (Form.phone.length == 10) {
        if (!isFormEmpty()) {
          console.log(Form);
          const result = await myApi.FUNC_UPDATE_PROFILE_USER(auth, Form);
          console.log(result);
          if (result.status == 200) {
            if (result.data.status == 200) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: `Xác Nhận Cập Nhật Thông Tin`,
                showConfirmButton: false,
                timer: 1500,
              });
              localStorage.clear();
              window.location = "/login";
            }
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: result.message,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Vui Lòng Điền Đủ Thông tin",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Số điện thoại không hợp lệ",
        });
      }
    } catch (error) {}
  };

  useEffect(() => {
    CallAPI();
    setForm({
      first_name: dataUser.first_name,
      last_name: dataUser.last_name,
      email: dataUser.email,
      phone: dataUser.phone,
      avatar: dataUser.avatar,
      isSex: dataUser.isSex,
    });
  }, []);
  useEffect(() => {
    console.table(Form);
  }, [Form]);
  return (
    <Card>
      <CardHeader color="purple" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">My Account</h2>
          <Button variant="outlined">Change Avatar</Button>
        </div>
      </CardHeader>
      <CardBody>
        <div>
          <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
            User Information
          </h6>
          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
              <Input
                type="text"
                name="first_name"
                onChange={handleChange}
                value={Form.first_name}
                // onChange={(e) => setFirstName(e.target.value)}
                id="first-name"
                color="purple"
                placeholder="First Name"
              />
            </div>
            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
              <Input
                name="last_name"
                onChange={handleChange}
                value={Form.last_name}
                // onChange={(e) => setLastName(e.target.value)}
                id="last-name"
                type="text"
                color="purple"
                placeholder="Last Name"
              />
            </div>

            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
              <Input
                name="email"
                onChange={handleChange}
                value={Form.email}
                // onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                color="purple"
                placeholder="Email Address"
              />
            </div>
            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
              <Input
                type="number"
                name="phone"
                value={Form.phone}
                // onChange={(e) => setPhone(e.target.value)}
                onChange={handleChange}
                id="phone"
                color="purple"
                placeholder="Phone"
              />
            </div>
          </div>
          {/* 
            <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
              Contact Information
            </h6>
            <div className="flex flex-wrap mt-10">
              <div className="w-full lg:w-12/12 mb-10 font-light">
                <Input type="text" color="purple" placeholder="Address" />
              </div>
              <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
                <Input type="text" color="purple" placeholder="City" />
              </div>
              <div className="w-full lg:w-4/12 px-4 mb-10 font-light">
                <Input type="text" color="purple" placeholder="Country" />
              </div>
              <div className="w-full lg:w-4/12 pl-4 mb-10 font-light">
                <Input type="text" color="purple" placeholder="Postal Code" />
              </div>
            </div>

            <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
              About Me
            </h6>
            <div className="flex flex-wrap mt-10 font-light">
              <Textarea color="purple" placeholder="About Me" />
            </div> */}
          <Button onClick={handleUpdate}>Submit</Button>
        </div>
      </CardBody>
    </Card>
  );
}
