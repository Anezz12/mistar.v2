import Link from "next/link";
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
          <Link href="/">
            <span className=" text-lg cursor-pointer hover:underline p-5">
              {"Home"}
            </span>
          </Link>
          <p>{">"}</p>
          <span className="text-lg cursor-pointer hover:underline p-5">
            {" Contact "}
          </span>
          <div className="flex items-center gap-4 sm:flex-col"></div>
        </header>
      </div>
    </div>
  );
}

export default page;
