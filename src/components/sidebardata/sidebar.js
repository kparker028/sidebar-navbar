import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { icons } from "react-icons/lib/cjs";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icons: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Contact Us',
        path: 'Contact Us',
        icons: <AiIcons.AiOutlinePhone />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: 'About',
        icons: <AiIcons.AiOutlineQuestionCircle />,
        cName: 'nav-text'
    }, 
    {
        title: 'Services',
        path: 'Servies',
        icons: <AiIcons.AiOutlineScissor />,
        cName: 'nav-text'
    },
]

