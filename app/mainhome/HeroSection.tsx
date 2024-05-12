import React from "react";

function page() {
  return (
    <div className="relative py-20">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-screen bg-cover bg-center"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url("/bg.jpeg")`,
          }}
        ></div>
      </div>
      <div className="relative z-10">
        <header className="w-full h-screen flex flex-col gap-5 justify-center items-center text-white">
          <span className="text-xl font-bold">
            Fotocopy <em className="text-blue-500">Mistar</em>
          </span>
          <div className=" font-bold text-7xl md:text-7xl text-center">
            Jasa Fotocopy Terbaik
          </div>
          <span className="text text-center px-4 sm:px-0">
            We Care for Your File, So You Can Care for Your Task.
          </span>
          <div className="flex items-center gap-4 sm:flex-col">
            <div className="flex gap-5">
              <a
                className="bg-white w-fit flex gap-2 items-center text-black px-4 py-2 rounded-md"
                href="https://api.whatsapp.com/send?phone=6281230498560"
              >
                <span>Pesan sekarang</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-shopping-bag"
                >
                  <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
                  <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
                </svg>
              </a>
              <a
                className="bg-blue-500 w-fit flex gap-2 items-center px-4 py-2 text-white rounded-md"
                href="/service"
              >
                <span>Services kami</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-chevron-right"
                >
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default page;
