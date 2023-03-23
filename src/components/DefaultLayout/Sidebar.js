import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import Icon from "@material-tailwind/react/Icon";
import H6 from "@material-tailwind/react/Heading6";
import { Button } from "@material-tailwind/react";
import { ProductContext } from "contexts/ProductContextProvider.js";
export default function Sidebar() {
  const { user } = useContext(ProductContext);

  const [showSidebar, setShowSidebar] = useState("-left-64");

  const NavbarList = [
    {
      name: "Dashboard",
      icon: "dashboard",
      link: "/",
    },
    {
      name: "Quản Lý Tài Khoản",
      icon: "dashboard",
      link: "/acc",
    },
    {
      name: "Quản Lý Tài Liệu",
      icon: "dashboard",
      link: "/docs",
    },
    {
      name: "Quản Lý Bài Viết",
      icon: "dashboard",
      link: "/arts",
    },

    {
      name: "Cài Đặt",
      icon: "settings",
      link: "/settings",
    },
  ];
  const handlerLogout = () => {
    localStorage.clear();
    window.location = "/login";
  };
  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <NavLink to="/" className="mt-2 text-center w-full inline-block">
            <H6 color="gray">LRO Admin</H6>
          </NavLink>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              {NavbarList.map((item) => {
                return (
                  <>
                    <li className="rounded-lg mb-4">
                      <NavLink
                        to={item?.link}
                        exact
                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                      >
                        <Icon name={item?.icon} size="2xl" />
                        {item?.name}
                      </NavLink>
                    </li>
                  </>
                );
              })}
              {/* <li className="rounded-lg mb-4">
                <NavLink
                  to="/"
                  exact
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <Icon name="dashboard" size="2xl" />
                  Dashboard
                </NavLink>
              </li>
              <li className="rounded-lg mb-2">
                <NavLink
                  to="/settings"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <Icon name="settings" size="2xl" />
                  Settings
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 ">
                <NavLink
                  to="/tables"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <Icon name="toc" size="2xl" />
                  Tables
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 text-gray-700">
                <NavLink
                  to="/maps"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <Icon name="map" size="2xl" />
                  Maps
                </NavLink>
              </li>
              <li className="px-4 rounded-lg mb-2 text-gray-700">
                <a
                  href="https://demos.creative-tim.com/material-tailwind-kit-react/#/login"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-sm font-light py-3"
                >
                  <Icon name="fingerprint" size="2xl" />
                  Login
                </a>
              </li>
              <li className="px-4 rounded-lg mb-2 text-gray-700">
                <a
                  href="https://demos.creative-tim.com/material-tailwind-kit-react/#/register"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-sm font-light py-3"
                >
                  <Icon name="list_alt" size="2xl" />
                  Register
                </a>
              </li>
              <li className="px-4 rounded-lg mb-2 text-gray-700">
                <a
                  href="https://demos.creative-tim.com/material-tailwind-kit-react/#/landing"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-sm font-light py-3"
                >
                  <Icon name="web" size="2xl" />
                  Landing Page
                </a>
              </li>
              <li className="px-4 rounded-lg mb-2 text-gray-700">
                <a
                  href="https://demos.creative-tim.com/material-tailwind-kit-react/#/profile"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-sm font-light py-3"
                >
                  <Icon name="account_circle" size="2xl" />
                  Profile Page
                </a>
              </li> */}
            </ul>

            <ul className="flex-col min-w-full flex list-none absolute bottom-0">
              {/* <li className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 px-4 rounded-lg text-white mb-2">
                <a
                  href="https://material-tailwind.com/documentation/quick-start"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-sm font-light py-3"
                >
                  <Icon name="description" size="2xl" />
                  Documentation
                </a>
              </li> */}
              <li className="">
                <Button
                  onClick={(e) => handlerLogout()}
                  className="flex items-center justify-center gap-4 text-sm font-light py-3"
                >
                  Log out
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
