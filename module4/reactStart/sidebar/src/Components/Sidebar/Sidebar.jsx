import React, { useState } from 'react';
import {AnimatePresence, motion} from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBagShopping, faBars, faChartSimple, faFile, faFloppyDisk, faGauge, faGear, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const menu = [
  {
    path:"/",
    name:"Dashboard",
    icon:<FontAwesomeIcon icon={faGauge} />
  },
  {
    path:"/filemanager",
    name:"File Manager",
    icon:<FontAwesomeIcon icon={faFile} />
  },
  {
    path:"/analytics",
    name:"Analytics",
    icon:<FontAwesomeIcon icon={faChartSimple} />
  },
  {
    path:"/messages",
    name:"Messages",
    icon:<FontAwesomeIcon icon={faMessage} />
  },
  {
    path:"/order",
    name:"Order",
    icon:<FontAwesomeIcon icon={faBagShopping} />
  },
  {
    path:"/saved",
    name:"Saved",
    icon:<FontAwesomeIcon icon={faFloppyDisk} />
  },
  {
    path:"/settings",
    name:"Settings",
    icon:<FontAwesomeIcon icon={faGear} />
  },
  {
    path:"/user",
    name:"Users",
    icon:<FontAwesomeIcon icon={faUser} />
  }
]


function Sidebar({children}) {
  const [isopen, setIsopen] = useState(false)

  const toggle = ()=>{
    setIsopen(!isopen)
  }

  const showAnimation = {
    hidden:{
      width:0,
      opacity:0,
      transition:{
        duration:0.5,
      },
    },
    show:{
      width:"auto",
      opacity:1,
      transition:{
        duration:0.2,
      }

    }
  }

  return (
    <div className='main-container'>
      <motion.div animate={{width:isopen ? '200px': '50px',transition:{
        duration:0.5,
        type:"spring",
        damping:11
      }}} className='sidebar'>
        <div className="top-section">
          {isopen && <h1 className='logo'>Logo </h1>}
          <div className="bars">
            <FontAwesomeIcon icon={faBars} onClick={toggle}/>
          </div>
        </div>
        <section className='routes'>
          {
            menu.map((item)=>(
              <NavLink activeclassname="active" to={item.path} key={item.name} className="menu-item">
                <div className='icon'>{item.icon}</div>
                <AnimatePresence>
                {isopen && <motion.div variants={showAnimation} initial="hidden" animate="show" exit="hidden" className='link_text'>{item.name}</motion.div>}
                </AnimatePresence>
                
              </NavLink>
            ))
          }
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar