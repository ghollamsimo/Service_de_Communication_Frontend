import React from "react";

const Register: React.FC = () => {
  return(
      <>
          <div className="bg-white h-auto md:h-[30rem]">
              <div className="w-80 sm:w-96 flex flex-col gap-5 m-6 place-self-center">
                  <h1 className="text-3xl font-bold">Sign Up</h1>
                  <span>Enter your email and password</span>
                  <input
                      className="rounded-lg p-2 outline-0 border-gray-100 focus:border-gray-200 focus:outline-0 focus:ring-0"
                      placeholder="name..."
                  />
                  <input
                      className="rounded-lg p-2 outline-0 border-gray-100 focus:border-gray-200 focus:outline-0 focus:ring-0"
                      placeholder="example@gmail.com"
                  />
                  <input
                      className="rounded-lg p-2 outline-0 border-gray-100 focus:border-gray-200 focus:outline-0 focus:ring-0"
                      placeholder="password"
                  />
                  <div className="flex gap-3">
                      <label className="label">
                          <div className="toggle text-white bg-[#476ACD]">
                              <input
                                  className="toggle-state text-white"
                                  type="checkbox"
                                  name="check"
                                  defaultValue="check"
                              />
                              <div className="indicator"/>
                          </div>
                      </label>
                      <span className='flex justify-center items-center'>Remember me for 30 days</span>
                  </div>
                  <button className="bg-[#476ACD] p-2 text-white rounded-lg">register</button>

              </div>
          </div>
      </>
  )
}

export default Register