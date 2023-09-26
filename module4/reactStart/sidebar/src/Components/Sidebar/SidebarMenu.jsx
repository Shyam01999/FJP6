import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


function SidebarMenu({item}) {
  const [subnav,setSubnav] = useState(false);
  const showSubnav = ()=>{setSubnav(!subnav)}
  return (
    <>
    <Link to={item.path} className='flex text-white justify-between items-center p-[20px] list-none h-[60px] no-underline text-lg hover:bg-sky-400 hover:border-l-2 hover:cursor-pointer ' onClick={item.subNav && showSubnav}>
        <div className='flex items-center'>
            {item.icon}
            <span className='ml-[16px]'>{item.title}</span>
        </div>
        <div>
          {
            item.subNav && subnav ? item.iconOpened :item.subNav ? item.iconClosed:null
          }
        </div>
    </Link>
    {
      subnav && item.subNav.map((item,index)=>{
        return(
          <Link to={item.path} key={index} className='bg-gray-500 h-[60px] pl-[3rem] flex items-center no-underline text-white text-lg'>
            {item.icon}
            <span className='ml-[16px]'>{item.title}</span>
          </Link>
        )
      })
    }
    </>
  )
}

export default SidebarMenu