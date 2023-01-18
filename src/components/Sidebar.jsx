import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize, setScreenSize, currentColor, currentMode } = useStateContext()

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)

        window.addEventListener('resize', handleResize)

        handleResize();


        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    //We get the scroll position if of the sidebar if set and apply it:
    useEffect(() => {
        const scrollPosition = sessionStorage.getItem('scrollPosition');
        if (scrollPosition) {
            document.getElementById("sidebar").scroll(0, scrollPosition)
        }
    }, [activeMenu])

    const handleCLoseSideBar = () => {
        if (activeMenu && screenSize <= 900) {
            setActiveMenu(false)
        }
    }

    // const handleCloseSideBar = () => {
    //     if(activeMenu !== undefined && screenSize <= 900) {
    //         setActiveMenu(false);
    //     }
    // }

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
    // const [isActive, setIsActive] = useState(false)

    return (
        <div id="sidebar" className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto'
            onScroll={
                (e) => sessionStorage.setItem('scrollPosition', e.target.scrollTop)
            }
        >
            {
                activeMenu && (
                    <div >
                        <div className="flex justify-between item-center">
                            <Link to="/" onClick={handleCLoseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                                <SiShopware /> <span>Shoppy</span>
                            </Link>
                            <TooltipComponent content="Menu" position="BottomCenter">
                                <button
                                    type="button"
                                    onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                                    className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                                >
                                    <MdOutlineCancel />
                                </button>

                            </TooltipComponent>


                        </div>
                        <div className="mt-10 ">
                            {links.map((item) => (
                                <div key={item.title}>
                                    <p className="text-gray-400 m-3 mt-4 uppercase">
                                        {item.title}
                                    </p>
                                    {item.links.map((link) => (
                                        // const 
                                        <NavLink
                                            to={`/${link.name}`}
                                            key={link.name}
                                            onClick={() => {
                                                handleCLoseSideBar()
                                            }}
                                            style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : 'white', })}
                                            className={({ isActive }) =>
                                                isActive ? activeLink : normalLink
                                            }>
                                            {link.icon}
                                            <span className="capitalize">{link.name}</span>
                                        </NavLink>
                                    ))}
                                </div>
                            )
                            )}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Sidebar