import React from "react";

function Clock() {
  return (
    <div className="pt-32">
      <div className="flex flex-col items-center   py-0 bg-blue-500">
        <div className="container">
          <div className="row items-center justify-center text-center">
            <div className="col-md-8">
              <span className=" text-white  font-bold text-lg">
                Jam Operasional
                <br />
                <br />
                SENIN - SABTU (08.00 - 21.00 WIB)
                <br />
                <br />
                Minggu Kadang Buka Kadang Tutup
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
