import React from "react";

function About() {
  return (
    <div>
      <div>
        <div className="container mx-auto">
          <div className="row">
            <div className="col-md-12">
              <div className="more-info-content">
                <div className="row flex flex-wrap -mx-4">
                  <div className="col-md-6 px-4 mb-8 md:mb-0">
                    <div className="left-image">
                      {/* <img src="images/welcome-text-27.applicationoctet-stream" alt="" class="w-full"> */}
                    </div>
                  </div>
                  <div className="col-md-6 px-4 align-self-center flex items-center">
                    <div className="center-content text-center md:max-w-7xl">
                      <span className="text-gray-600 text-sm font-semibold">
                        Tentang Kami
                      </span>
                      <h2 className="text-3xl font-bold mb-4 text-gray-600">
                        Fotocopy <em className="text-blue-500">Mistar</em>
                      </h2>
                      <div>
                        <p className=" text-xl text-gray-600 text-justify mb-4 ">
                          Fotocopy Mistar bergerak di bidang jasa penggandaan
                          dokumen atau fotocopy dan penjilidan. Kami siap
                          melayani anda dengan kualitas yang terbaik dan untuk
                          harga jangan khawatir karena disini harga sesuai
                          dengan kualitas. Fotocopy Mistar ditangani Oleh Tim
                          yang Profesional dan sangat berpengalaman di
                          bidangnya.
                        </p>
                        <p className=" text-xl text-gray-600 text-justify mb-4">
                          Untuk Kertas, kami menggunakan Kertas Paper One, Copy
                          Laser Paper, Dunia Mas, Sinar Dunia, dll, yang
                          merupakan kertas yang terbaik, alat yang lengkap dan
                          mesin yang modern.
                        </p>
                      </div>
                      <div className="pt-10">
                        <a
                          href="/about"
                          className=" md:max-w-lg px-4 py-2 bg-blue-500 text-white rounded-md  hover:bg-blue-600 transition duration-300"
                        >
                          Selengkapnya
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
