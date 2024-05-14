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
                  src="/hitamputih.webp"
                  width="1000"
                  height="300"
                  alt="some value"
                  className=" w-full h-48 object-cover"
                />
                <div className="p-10 bg-slate-50">
                  <h3 className="text-lg font-semibold mb-2  text-black">
                    Fotokopi Hitam Putih
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Layanan fotokopi dokumen hitam putih dengan berbagai pilihan
                    ukuran kertas, seperti A4, A3, Folio, dan lain-lain.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 flex flex-col items-center rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/fcberwarna.jpg"
                  width="1000"
                  height="300"
                  alt="some value"
                  className=" w-full h-48 object-cover"
                />
                <div className="p-10 bg-slate-50">
                  <h3 className="text-lg font-semibold mb-2  text-black">
                    Fotokopi Berwarna
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Layanan fotokopi dokumen berwarna dengan kualitas gambar
                    yang baik, cocok untuk menyalin gambar, grafik, atau dokumen
                    dengan warna yang penting.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 flex flex-col items-center rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/fcdokumen.jpg"
                  width="1000"
                  height="300"
                  alt="some value"
                  className=" w-full h-48 object-cover"
                />
                <div className="p-10 bg-slate-50">
                  <h3 className="text-lg font-semibold mb-2  text-black">
                    Pencetakan Dokumen
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Pencetakan Dokumen Layanan pencetakan dokumen dari file
                    digital, seperti Microsoft Word, PDF, atau format lainnya,
                    dengan pilihan hitam putih atau berwarna.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 flex flex-col items-center rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/fcjilid.jpg"
                  width="1000"
                  height="300"
                  alt="some value"
                  className=" w-full h-48 object-cover"
                />
                <div className="p-10 bg-slate-50">
                  <h3 className="text-lg font-semibold mb-2  text-black">
                    Penjilidan Dokumen
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Penjilidan Dokumen Layanan penjilidan dokumen dengan
                    berbagai opsi, seperti jilid spiral, jilid kawat, atau jilid
                    buku.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 flex flex-col items-center rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/pemotongan.png"
                  width="1000"
                  height="300"
                  alt="some value"
                  className=" w-full h-48 object-cover"
                />
                <div className="p-10 bg-slate-50">
                  <h3 className="text-lg font-semibold mb-2  text-black">
                    Pemotongan Kertas
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Layanan pemotongan kertas sesuai ukuran yang diinginkan,
                    seperti memotong kertas ukuran A4 menjadi ukuran kartu nama
                    atau brosur.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 flex flex-col items-center rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/dokumen.jpg"
                  width="1000"
                  height="300"
                  alt="some value"
                  className=" w-full h-48 object-cover"
                />
                <div className="p-10 bg-slate-50">
                  <h3 className="text-lg font-semibold mb-2  text-black">
                    Pemindaian Dokumen
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Pemindaian Dokumen Layanan memindai dokumen fisik menjadi
                    file digital seperti PDF atau format lainnya.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 flex flex-col items-center rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/penggandaanfc.jpg"
                  width="1000"
                  height="300"
                  alt="some value"
                  className=" w-full h-48 object-cover"
                />
                <div className="p-10 bg-slate-50">
                  <h3 className="text-lg font-semibold mb-2  text-black">
                    Penggandaan Dokumen
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Penggandaan Dokumen Layanan penggandaan dokumen dalam jumlah
                    banyak, seperti untuk keperluan rapat, seminar, atau
                    distribusi materi.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 flex flex-col items-center rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/fcfoto.webp"
                  width="1000"
                  height="300"
                  alt="some value"
                  className=" w-full h-48 object-cover"
                />
                <div className="p-10 bg-slate-50">
                  <h3 className="text-lg font-semibold mb-2  text-black">
                    Pencetakan Foto
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Pencetakan Foto Layanan pencetakan foto berkualitas tinggi
                    dari file digital atau media penyimpanan seperti flashdisk
                    atau kartu memori.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 flex flex-col items-center rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/kirim.png"
                  width="1000"
                  height="200"
                  alt="some value"
                  className=" w-full h-48 object-cover"
                />
                <div className="p-10 bg-slate-50">
                  <h3 className="text-lg font-semibold mb-2  text-black">
                    Layanan Pengiriman
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Layanan Pengiriman Layanan pengiriman dokumen atau barang
                    yang sudah difotokopi atau dicetak ke alamat yang ditentukan
                    oleh pelanggan.
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
