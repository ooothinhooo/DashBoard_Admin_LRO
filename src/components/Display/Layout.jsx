import React from "react";
import Content from "./Content.jsx";
import Navbar from "./Navbar.jsx";

function Layout() {
  return (
    <>
      <div class="antialiased bg-white/90 w-full min-h-screen text-slate-300 relative py-2">
        <div class="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-2 lg:gap-2 xl:gap-2 w-[97%] ">
          <Navbar />
          <Content />
        </div>
      </div>
    </>
  );
}

export default Layout;
