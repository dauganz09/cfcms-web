import React from 'react';
import { FiHome,FiBarChart2,FiTruck, FiUsers } from 'react-icons/fi';
import {IoFishOutline} from 'react-icons/io5';
import {BsShop} from 'react-icons/bs';
import {GiBoatFishing} from 'react-icons/gi';
import {GiSpeedBoat} from 'react-icons/gi';




 export const MenuData = [
    {
        title: 'Analytics',
        links : [
            {
                linkname: 'Dashboard',
                link: '/',
                icon : FiHome,
                active : true,
                sublinks : false
                
            },
            {
                linkname: 'Graphs',
                link : '/',
                icon : FiBarChart2,
                active :false,
                sublinks : false

            }
        ]
    },
    {
        title: 'Management',
        links : [
            {
                linkname: 'Fisherman',
                link: '/',
                icon : GiBoatFishing,
                active :false,
                sublinks : [
                    {
                        sublinkname: 'Add Fisherman',
                        sublink: '/',
                        subactive : false

                    },
                    {
                        sublinkname: 'Fisherman List',
                        sublink: '/',
                        subactive : false
                    },
                    {
                        sublinkname: 'Fisherman Report',
                        sublink: '/',
                        subactive : false
                    }
            ]
            },
            {
                linkname: 'Fish',
                link: '/',
                icon : IoFishOutline,
                active :false,
                sublinks : [
                    {
                        sublinkname: 'Add Fish',
                        sublink: '/',
                        subactive : false
                    },
                    {
                        sublinkname: 'Fish List',
                        sublink: '/',
                        subactive : false
                    }
                    
                ]
            },
            {
                linkname: 'Vessels',
                link: '/',
                icon : GiSpeedBoat,
                active :false,
                sublinks : [
                    {
                        sublinkname: 'Add Vessel',
                        sublink: '/',
                        active : true,
                    },
                    {
                        sublinkname: 'Vessel List',
                        sublink: '/',
                        active : false,
                    }
                ]

            },
            {
                linkname: 'Market',
                link: '/',
                icon : BsShop,
                active :false,
                sublinks : [
                    {
                        sublinkname: 'Add Market',
                        sublink: '/',
                        active : false,
                    },
                    {
                        sublinkname: 'Market List',
                        sublink: '/',
                        active : false,
                    }
                ]
            }
        ]
    }
]

export default MenuData;