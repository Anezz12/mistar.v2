import React from "react";

function Contact() {
  return (
    <div>
      <div className="py-20 text-black font-bold">
        <div className=" text-4xl text-center">
          KotaK <em className="text-blue-500">Saran</em>
        </div>
        <div className=" py-8">
          <div>
            <form id="contactFrom">
              <div className=" grid grid-cols-2 gap-4">
                <div>
                  <span className=" text-sm after:content-['_*'] text-black">
                    Name
                  </span>
                  <input
                    type="text"
                    className="w-full bg-white border border-blue-500 mt-2 p-3 rounded-xl focus:outline-none text-black"
                    placeholder="your name"
                    name="from"
                    required
                  />
                </div>
                <div>
                  <span className=" text-sm after:content-['_*'] text-black">
                    Email
                  </span>
                  <input
                    type="text"
                    className="w-full  bg-white border border-blue-500 mt-2 p-3 rounded-xl focus:outline-none text-black"
                    placeholder="your Email"
                    name="from"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm after:content-['_*'] text-black">
                  Message
                </span>
                <textarea
                  className="w-full h-32 bg-white border border-blue-500 mt-2 p-3 rounded-xl focus:outline-none text-black"
                  placeholder="type some thing... has 1024 max length."
                  name="msg"
                  maxLength={1024}
                  required
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  className="w-full disabled:opacity-75 disabled:pointer-events-none text-center bg-blue-400 hover:bg-blue-500 px-4 py-3 rounded-xl transition duration-200 ease-in-out"
                  type="submit"
                >
                  {"Send Message "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
