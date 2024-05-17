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
      <div>
        <div className=" text-black items-center max-w-7xl mx-auto p-5 pt-48">
          <div className="row justify-center">
            <div className="col-lg-12 col-md-6 wow fadeInUp animate__animated animate__fadeInUp animate__delay-500ms">
              <p className="mb-4 font-bold text-4xl text-center pb-20">
                Cabang <em className="text-blue-500">Mistar</em>
              </p>
              <p className="font-bol">FOTO COPY MISTAR</p>
              <p className="mb-2">
                Jl. Bibis Raya, Jetis, Tamantirto, Kec. Kasihan, Kabupaten
                Bantul, Daerah Istimewa Yogyakarta 55183
              </p>
              <p className="mb-4">+62 823-2229-2996</p>
              <p>Cabang ke 1</p>
              <iframe
                className="w-full h-[450px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.659936843413!2d110.3276442!3d-7.825770599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af876f9a038dd%3A0x7552edb30a2f36b8!2sMistar%20Foto%20Copy!5e0!3m2!1sid!2sid!4v1714748958744!5m2!1sid!2sid"
                scrolling="no"
              ></iframe>
              <br />
              <p>Cabang ke 2</p>

              <p>
                Jl. KRT Pringgodiningrat, Beran Kidul, Tridadi, Kec. Sleman,
                Kabupaten Sleman, Daerah Istimewa Yogyakarta 55511
              </p>
              <iframe
                className="w-full h-[450px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.65459528409!2d110.35354817586467!3d-7.720158792297829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a596c78a11889%3A0x85ec619c0f04a806!2sMistar%20Foto%20Copy!5e0!3m2!1sid!2sid!4v1714749113494!5m2!1sid!2sid"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
