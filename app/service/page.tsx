"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { skills } from "@/lib/skills";

function Skills() {
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
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-5"
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
