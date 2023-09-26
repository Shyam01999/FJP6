import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as HiIcons from 'react-icons/hi'

export const SidebarData = [
    {
        title:'KMS',
        path:'/kms',
        icon:<FaIcons.FaLaptop/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconClosed:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title:'My Docs',
                path:'/mydocs',
                icon:<IoIcons.IoDocumentTextOutline/>, 
            },
            {
                title:'All Docs',
                path:'/alldocs',
                icon:<HiIcons.HiOutlineClipboardDocumentList/>, 
            },
            
        ]
    }
]
