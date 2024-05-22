"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

function Skills() {
  const [skills, setSkills] = useState([
    {
      title: "Fotokopi Hitam Putih",
      text: "Layanan fotokopi dokumen hitam putih dengan berbagai pilihan ukuran kertas, seperti A4, A3, Folio, dan lain-lain.",
      img: "/hitamputih.webp",
    },
    {
      title: "Fotokopi Berwarna",
      text: " Layanan fotokopi dokumen berwarna dengan kualitas gambaryang baik, cocok untuk menyalin gambar, grafik, atau dokumen dengan warna yang penting.",
      img: "/fcberwarna.jpg",
    },
    {
      title: "Pencetakan Dokumen",
      text: " Pencetakan Dokumen Layanan pencetakan dokumen dari file digital, seperti Microsoft Word, PDF, atau format lainnya, dengan pilihan hitam putih atau berwarna.",
      img: "/fcdokumen.jpg",
    },
    {
      title: "Penjilidan Dokumen",
      text: "Penjilidan Dokumen Layanan penjilidan dokumen dengan berbagai opsi, seperti jilid spiral, jilid kawat, atau jilid buku.",
      img: "/fcjilid.jpg",
    },
    {
      title: "Pemotongan Kertas",
      text: "Layanan pemotongan kertas sesuai ukuran yang diinginkan, seperti memotong kertas ukuran A4 menjadi ukuran kartu nama atau brosur.",
      img: "/pemotongan.png",
    },

    {
      title: "Pemindaian Dokumen",
      text: " Pemindaian Dokumen Layanan memindai dokumen fisik menjadi file digital seperti PDF atau format lainnya.",
      img: "/dokumen.jpg",
    },
    {
      title: " Penggandaan Dokumen",
      text: "Penggandaan Dokumen Layanan penggandaan dokumen dalam jumlah banyak, seperti untuk keperluan rapat, seminar, atau distribusi materi..",
      img: "/penggandaanfc.jpg",
    },
    {
      title: "Pencetakan Foto",
      text: " Pencetakan Foto Layanan pencetakan foto berkualitas tinggi dari file digital atau media penyimpanan seperti flashdisk atau kartu memori.",
      img: "/fcfoto.webp",
    },
    {
      title: "Layanan Pengiriman",
      text: "Layanan Pengiriman Layanan pengiriman dokumen atau barang yang sudah difotokopi atau dicetak ke alamat yang ditentukan oleh pelanggan.",
      img: "/kirim.png",
    },
  ]);
  return (
    <div className="relative py-20">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full bg-cover bg-center h-[40vh]"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url("/bg.jpeg")`,
          }}
        ></div>
      </div>
      <div className="relative z-10">
        <header className="w-full h-[30vh] flex justify-start items-center text-white">
          <Link href="/">
            <span className="text-lg cursor-pointer hover:underline p-5">
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
          <div className="flex flex-col items-center max-w-7xl mx-auto p-5 pt-48">
            <span className="text-black font-bold text-4xl py-10 dark:text-white">
              Layanan <em className="text-blue-500">Mistar</em>
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5"
                >
                  <div className="bg-slate-50 flex flex-col items-center rounded-lg shadow-md overflow-hidden">
                    <Image
                      src={skill.img}
                      alt={skill.title}
                      width={1000}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-blue-500">
                    {skill.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {skill.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
