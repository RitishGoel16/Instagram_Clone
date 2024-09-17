import React, { useState } from 'react';
import { IoReorderThree } from "react-icons/io5";
import { menu } from './SidebarConfig';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const [activeTab, setActiveTab] = useState();

    const navigate = useNavigate();

    let handleTabClick = (title) => {
        setActiveTab(title)
        if (title === "Profile") {
            navigate("/username")
        }
        else if (title === "Home") {
            navigate("/")
        }
    }
    return (

        <div className='sticky top-0 h-[100vh] pt-10 pl-6'>
            <div className='flex flex-col h-full justify-between'>
                <div>
                    <div>
                        <img className='w-40 ml-1' src="https://i.imgur.com/zqpwkLQ.png" alt="" />
                    </div>

                    <div className='mt-10'>
                        {menu.map((item) =>
                            <div onClick={() => handleTabClick(item.title)}
                                className='flex items-center mb-5 cursor-pointer text-xl pl-2 '>
                                <p>{activeTab === item.title ? item.activeIcon : item.icon}</p>
                                <p className={`${activeTab === item.title ? 'font-bold' : "font-normal"} ml-2`}>{item.title}</p>

                            </div>)}
                    </div>
                </div>

                <div className='flex cursor-pointer item-center pl-1 pb-16'>
                    <div className='text-3xl'><IoReorderThree /></div>
                    <p className='ml-2 text-xl'>More</p>
                </div>
            </div>
        </div>

    )

}


export default Sidebar