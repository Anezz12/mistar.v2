import React from "react";

function page() {
  return (
    <div className="relative py-20">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full  bg-cover bg-center h-[40vh]"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url("/bg.jpeg")`,
          }}
        ></div>
      </div>
      <div className="relative z-10">
        <header className="w-full h-[30vh] flex  justify-start items-center text-white">
          <span className=" text-lg cursor-pointer hover:underline p-5">
            {"Home"}
          </span>
          <p>{">"}</p>
          <span className="text-lg cursor-pointer hover:underline p-5">
            {" About "}
          </span>
          <div className="flex items-center gap-4 sm:flex-col"></div>
        </header>
      </div>
    </div>
  );
}

export default page;
