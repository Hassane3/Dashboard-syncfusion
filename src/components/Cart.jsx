import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

import { cartData } from '../data/dummy'
import Button from '../components/Button'
import { useStateContext } from '../contexts/ContextProvider'

const Cart = () => {
    const { currentColor, handleCloseClick } = useStateContext()
    return (
        // <div className="nav-item absolute sm:h-30 sm:right-0 sm:top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 max-sm:w-screen max-sm:h-screen">
        <div className="bg-half-transparent w-full fixed nav-item top-0 right-0">
            <div className="float-right h-screen duration-1000 ease-in-out transition-all dark:text-gray-200 dark:bg-[#484B52] bg-white md:w-400 p-8">
                <div className='flex justify-between items-center'>
                    <p className='font-semibold text-lg dark:text-gray-200'>Cart</p>
                    <Button
                        icon={<MdOutlineCancel />}
                        color="rgb(153, 171, 180)"
                        bgHoverColor="light-gray"
                        size="2xl"
                        borderRadius="50%"
                        clickEvent={() => { handleCloseClick("cart") }}
                    />
                </div>

                {cartData.map((item, index) => (

                    <div key={index} className='flex content-center gap-5 border-b-1 border-color p-4 '>
                        {/* <div className="rounded-lg h-80 w-24"> */}
                        <img
                            alt="product"
                            className="rounded-lg h-80 w-24"
                            style={{ backgroundColor: item.iconBg, color: item.iconColor, objectFit: "cover" }}
                            src={item.image}
                        />

                        {/* </div> */}
                        <div>
                            <p className="font-semibold dark:text-gray-400">{item.name}</p>
                            <p className="text-gray-500 text-sm dark:text-gray-400">{item.category}</p>
                            <div className="flex gap-4 mt-2 items-center">
                                <p className="font-semibold text-lg">{item.price}</p>
                                <div className="flex items-center border-1 border-r-0 border-color rounded">
                                    <p className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 "><AiOutlineMinus /></p>
                                    <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">0</p>
                                    <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600"><AiOutlinePlus /></p>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
                <button
                    className="text-white w-full p-2 rounded-lg mt-3"
                    style={{ backgroundColor: currentColor }}>
                    Logout
                </button>

            </div >
        </div >
    )
}

export default Cart