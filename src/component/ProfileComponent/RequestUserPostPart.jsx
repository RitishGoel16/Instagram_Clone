import React from 'react'
import { AiOutlineTable, AiOutlineUser, } from 'react-icons/ai';
import {RiVideoLine} from 'react-icons/ri';
import {BiBookmark} from 'react-icons/bi';
const RequestUserPostPart = () => {
     const tabs=[
        
        {
            tab:"post",
            icon:<AiOutlineTable></AiOutlineTable>,
            activeIcon:""
        },
        {
            tab:"Reels",
            icon:<RiVideoLine></RiVideoLine>,
            activeIcon:""
        },
        {
            tab:"Saved",
            icon:<BiBookmark/>,
            activeIcon:""
        },
        {
            tab:"Tagged",
            icon:<BiBookmark/>,
            activeIcon:<AiOutlineUser></AiOutlineUser>
        },
     ]
    return (

        <div className='flex justify-around'>
            {tabs.map((item)=>
                <div className='flex items-center cursor-pointer py-2 text-sm'>
                    <p>{item.icon}</p>
                    <p>{item.tab}</p>
                </div>
            )}
        </div>

    )
}

export default RequestUserPostPart