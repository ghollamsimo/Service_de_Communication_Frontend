import React, {useState} from "react";
import {BsThreeDots} from "react-icons/bs";
import Profile from '../assets/profile.jpg'

const Friends: React.FC = () => {
    const [dropdown, setDropdown] = useState<boolean>(false)
    const toggle = () => {
        setDropdown(!dropdown);
    };

    return(
      <>
          <div className="flex w-full items-center h-fit cursor-pointer justify-between  py-3 px-7  rounded-lg">
              <div className="flex w-full items-center">
                  <div className='relative left-11 bottom-5'>
                      <div className={'rounded-full  bg-green-600 p-1.5'}></div>
                  </div>
                  <img
                      src={Profile}
                      alt="User"
                      className="w-10 h-10 rounded-lg mr-3"
                  />
                  <div>
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-gray-500">Sample message</p>
                  </div>
              </div>
              <button onClick={toggle} className="text-gray-400">
                  <BsThreeDots/>
              </button>
                  {dropdown && (
                      <>
                         hello
                      </>
                  )}

          </div>

      </>
  )
}

export default Friends