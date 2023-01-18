import React from 'react';
import { MdOutlineCancel, currency } from 'react-icons/md';

import { Button } from "."
import { useStateContext } from '../contexts/ContextProvider';
import avatar from "../data/avatar3.png";
import { userProfileData } from "../data/dummy";

const UserProfile = () => {
    const { currentColor, handleCloseClick } = useStateContext()
    return (
        <div className="nav-item absolute sm:h-30 sm:right-1 sm:top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 max-sm:w-screen max-sm:h-screen">
            <div className='flex justify-between items-center'>
                <p className='font-semibold text-lg dark:text-gray-200'>User Profile</p>
                <Button
                    icon={<MdOutlineCancel />}
                    color="rgb(153, 171, 180)"
                    bgHoverColor="light-gray"
                    size="2xl"
                    borderRadius="50%"
                    clickEvent={() => handleCloseClick("useProfil")}
                />
            </div>

            <div className='flex gap-5 items-center mt-6 border-color border-b-1 pb-6'>
                <img src={avatar} alt="user avatar" className="rounded-full h-24 w-24" />
                <div>
                    <p className="font-semibold text-xl dark:text-gray-200"> Michael Roberts </p>
                    <p className="text-gray-500 text-sm dark:text-gray-400">  Administrator   </p>
                    <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> info@shop.com </p>
                </div>
            </div>

            {userProfileData.map((item, index) => (

                <div key={index} className='flex content-center gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]'>
                    <button
                        className='text-xl p-3 rounded-lg hover:bg-light-gray'
                        style={{ backgroundColor: item.iconBg, color: item.iconColor }}>
                        {item.icon}
                    </button>
                    <div>
                        <p className="font-semibold dark:text-gray-400">{item.title}</p>
                        <p className="text-gray-500 text-sm dark:text-gray-400">{item.desc}</p>
                    </div>
                </div>

            ))}
            <button className="text-white w-full p-2 rounded-lg mt-3" style={{ backgroundColor: currentColor }}>
                Logout
            </button>
        </div>
    )
}

export default UserProfile