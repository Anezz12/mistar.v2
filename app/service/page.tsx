import Link from "next/link";
import React from "react";
import Image from "next/image";

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
            {"Service"}
          </span>
          <div className="flex items-center gap-4 sm:flex-col"></div>
        </header>
      </div>
      <section>
        <div>
          <div className=" flex flex-col items-center max-w-7xl mx-auto p-5  pt-48">
            <span className="text-black font-bold text-4xl py-10">
              Kenapa <em className="text-blue-500">Mistar</em>
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-50 flex flex-col items-center rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/bg.jpeg"
                  width="200"
                  height="300"
                  alt="some value"
                  className=" w-full h-48 object-cover"
                />
                <div className="p-10  text-center bg-slate-50">
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    Fotocopy Terlengkap
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Kami menyediakan alat tulis kantor / ATK, PC untuk ngetik
                    dan print, jasa cutting, jilid skripsi kilat, dll.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 flex flex-col items-center rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/bg.jpeg"
                  width="300"
                  height="300"
                  alt="some value"
                  className=" w-full h-48 object-cover"
                />
                <div className="p-10  text-center bg-slate-50">
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    Peralatan Terbaik
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Kami menggunakan mesin fotocopy terbaru dan terbaik saat ini
                    dan peralatan - peralatan pendukung kami yang terawat dan
                    berkualitas, tidak usah ragu lagi dengan hasil dari pada
                    kami.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 flex flex-col items-center rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/bg.jpeg"
                  width="300"
                  height="300"
                  alt="some value"
                  className=" w-full h-48 object-cover"
                />
                <div className="p-10  text-center bg-slate-50">
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    Layanan Terbaik
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dengan tenaga profesional dan berketerampilan khusus di
                    bidangnya, anda tidak perlu khawatir lagi dengan hasil kerja
                    kami, karna kami akan memberikan pelayanan yang prima kepada
                    seluruh pelanggan kami.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 flex flex-col items-center rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/bg.jpeg"
                  width="300"
                  height="300"
                  alt="some value"
                  className=" w-full h-48 object-cover"
                />
                <div className="p-10  text-center bg-slate-50">
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    Layanan Terbaik
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dengan tenaga profesional dan berketerampilan khusus di
                    bidangnya, anda tidak perlu khawatir lagi dengan hasil kerja
                    kami, karna kami akan memberikan pelayanan yang prima kepada
                    seluruh pelanggan kami.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 flex flex-col items-center rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/bg.jpeg"
                  width="300"
                  height="300"
                  alt="some value"
                  className=" w-full h-48 object-cover"
                />
                <div className="p-10  text-center bg-slate-50">
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    Layanan Terbaik
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dengan tenaga profesional dan berketerampilan khusus di
                    bidangnya, anda tidak perlu khawatir lagi dengan hasil kerja
                    kami, karna kami akan memberikan pelayanan yang prima kepada
                    seluruh pelanggan kami.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 flex flex-col items-center rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/bg.jpeg"
                  width="300"
                  height="300"
                  alt="some value"
                  className=" w-full h-48 object-cover"
                />
                <div className="p-10  text-center bg-slate-50">
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    Layanan Terbaik
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dengan tenaga profesional dan berketerampilan khusus di
                    bidangnya, anda tidak perlu khawatir lagi dengan hasil kerja
                    kami, karna kami akan memberikan pelayanan yang prima kepada
                    seluruh pelanggan kami.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 flex flex-col items-center rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/bg.jpeg"
                  width="300"
                  height="300"
                  alt="some value"
                  className=" w-full h-48 object-cover"
                />
                <div className="p-10  text-center bg-slate-50">
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    Layanan Terbaik
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dengan tenaga profesional dan berketerampilan khusus di
                    bidangnya, anda tidak perlu khawatir lagi dengan hasil kerja
                    kami, karna kami akan memberikan pelayanan yang prima kepada
                    seluruh pelanggan kami.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 flex flex-col items-center rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/bg.jpeg"
                  width="300"
                  height="300"
                  alt="some value"
                  className=" w-full h-48 object-cover"
                />
                <div className="p-10  text-center bg-slate-50">
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    Layanan Terbaik
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dengan tenaga profesional dan berketerampilan khusus di
                    bidangnya, anda tidak perlu khawatir lagi dengan hasil kerja
                    kami, karna kami akan memberikan pelayanan yang prima kepada
                    seluruh pelanggan kami.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 flex flex-col items-center rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/bg.jpeg"
                  width="300"
                  height="300"
                  alt="some value"
                  className=" w-full h-48 object-cover"
                />
                <div className="p-10  text-center bg-slate-50">
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    Layanan Terbaik
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dengan tenaga profesional dan berketerampilan khusus di
                    bidangnya, anda tidak perlu khawatir lagi dengan hasil kerja
                    kami, karna kami akan memberikan pelayanan yang prima kepada
                    seluruh pelanggan kami.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
