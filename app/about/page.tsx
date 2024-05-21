import Link from "next/link";
import React from "react";
import Image from "next/image";

function page() {
  return (
    // Navbar navigation
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
            {" About "}
          </span>
          <div className="flex items-center gap-4 sm:flex-col"></div>
        </header>
      </div>
      {/* About */}
      <div>
        {/* <div className="py-20 flex flex-col items-center">
          <Image
            src="/bg2.jpg"
            width="1000"
            height="1000"
            alt="some value"
            className="items-center rounded-md"
          />
        </div> */}
        <section className="w-[90vw] mx-auto my-32 flex flex-col items-center gap-8">
          <div
          // className="w-full rounded-md bg-cover bg-center h-[120vh]"
          // style={{
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   backgroundImage: `url("/bg2.jpg")`,
          // }}
          >
            <Image
              src="/bg2.jpeg"
              alt="Image"
              width={1000}
              height={1000}
              className="w-full h-fit rounded-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="item w-full flex flex-col gap-4">
              <div className="title text-2xl font-bold text-black dark:text-white">
                Siapa kami?
              </div>
              <div className="text text-gray-500 text-justify dark:text-gray-50">
                Kami lebih dari sekadar layanan fotokopi. Kami adalah tim
                profesional berdedikasi yang bersemangat memberikan layanan yang
                luar biasa. Perjalanan kami dimulai dengan visi untuk memberikan
                pengalaman fotokopi yang memadukan kenyamanan, kualitas, dan
                keberlanjutan ekonomi. Dengan keahlian bertahun-tahun di
                industri fotokopi, kami telah berkembang menjadi nama yang
                terpercaya. Kami bangga atas komitmen kami terhadap kepuasan
                pelanggan dan praktik sadar lingkungan. Di Mistar Fotocopy, kami
                menawarkan berbagai layanan fotokopi, mulai dari fotokopi
                berwarna dan hitam putih, hingga pencetakan dokumen dalam
                berbagai ukuran. Kami menggunakan peralatan modern dan teknologi
                terbaru untuk memastikan hasil yang tajam dan jelas setiap kali
                Anda memerlukannya. Selain itu, kami juga menyediakan layanan
                tambahan seperti penjilidan, laminasi, dan pembuatan brosur,
                sehingga Anda dapat memenuhi semua kebutuhan dokumen Anda di
                satu tempat. Kami memahami pentingnya efisiensi dan kecepatan
                dalam setiap pekerjaan, itulah sebabnya kami selalu berusaha
                memberikan layanan cepat tanpa mengorbankan kualitas. Selain
                itu, kami juga menerapkan praktik ramah lingkungan dengan
                menggunakan kertas daur ulang dan bahan-bahan yang tidak merusak
                lingkungan. Kenali wajah-wajah di balik Mistar Fotocopy dan
                temukan layanan fotokopi yang peduli dengan kebutuhan Anda. Kami
                siap membantu Anda dengan layanan yang ramah, profesional, dan
                dapat diandalkan. Mistar Fotocopy adalah pilihan tepat untuk
                segala kebutuhan fotokopi Anda.
              </div>
            </div>
            <div className="item w-full flex flex-col gap-4">
              <div className="title text-2xl font-bold text-black dark:text-white">
                Apa yang kami kerjakan?
              </div>
              <div className="text text-gray-500 text-justify dark:text-gray-50">
                Misi inti kami sederhana: membuat hidup Anda lebih mudah dan
                kebutuhan dokumen Anda terpenuhi dengan cepat dan efisien. Kami
                menawarkan layanan komprehensif yang mencakup fotokopi,
                pencetakan, penjilidan, laminasi, dan pembuatan brosur. Setiap
                layanan dirancang dengan perhatian terhadap detail dan kualitas,
                memastikan hasil yang memuaskan setiap kali. Opsi penjemputan
                dan pengantaran kami yang efisien dirancang agar sesuai dengan
                jadwal Anda, memberikan Anda kenyamanan yang layak Anda
                dapatkan. Anda tidak perlu khawatir tentang waktu atau jarak;
                kami siap melayani Anda dengan fleksibilitas maksimal,
                memastikan bahwa semua kebutuhan dokumen Anda terpenuhi tepat
                waktu. Kami memahami bahwa setiap dokumen memiliki nilai dan
                pentingnya masing-masing. Oleh karena itu, selain kecepatan,
                kami memprioritaskan kualitas hasil cetakan dengan menggunakan
                peralatan modern dan teknologi terbaru. Hasil cetakan kami
                selalu tajam, jelas, dan profesional, sesuai dengan standar
                tertinggi dalam industri fotokopi. Selain efisiensi dan
                kualitas, kami juga memprioritaskan keberlanjutan dan
                kesejahteraan bumi kita. Melalui praktik ramah lingkungan
                seperti menggunakan kertas daur ulang dan bahan-bahan yang tidak
                merusak lingkungan, kami berkomitmen untuk menjaga kelestarian
                lingkungan sambil menyediakan layanan terbaik. Kami percaya
                bahwa setiap langkah kecil menuju keberlanjutan memiliki dampak
                besar bagi masa depan kita bersama.
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="w-[80vw] mx-auto items-center grid grid-cols-1 md:grid-cols-3">
        <div
          className="w-full rounded-md  items-center h-[55vh]"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url("/bg2.jpeg")`,
          }}
        />
        <div>
          <div className="font-bold text-3xl text-right text-black dark:text-white"></div>
          <div className="">
            <div className="items flex flex-col items-center gap-4">
              <div className="item flex items-center gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="font-bold text-3xl text-black/[.7] dark:text-white">
                    7
                  </div>
                  <p className="text-sm text-black/[.7] dark:text-white">
                    Mesin
                  </p>
                </div>
                <div className="flex justify-center items-center p-4 rounded-full">
                  <Image
                    src="/mesin1.png"
                    width="40"
                    height="100"
                    alt="some value"
                    className="items-center"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="font-bold text-3xl text-black/[.7] dark:text-white">
                    2
                  </div>
                  <p className="text-sm text-black/[.7] dark:text-white">
                    Cabang
                  </p>
                </div>
                <div className="flex justify-center items-center p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow-400"
                  >
                    <path d="M3 21v-13l9 -4l9 4v13"></path>
                    <path d="M13 13h4v8h-10v-6h6"></path>
                    <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3"></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="font-bold text-3xl text-black/[.7] dark:text-white">
                    6
                  </div>
                  <p className="text-sm text-black/[.7] dark:text-white">
                    Karyawan
                  </p>
                </div>
                <div className="flex justify-center items-center p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow-400"
                  >
                    <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                  </svg>
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
