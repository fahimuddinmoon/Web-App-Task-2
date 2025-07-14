"use client";
import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FcDepartment } from "react-icons/fc";
import { MdSubtitles } from "react-icons/md";
import { motion } from 'framer-motion';
export default function Card({ data , index}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0,
                x: Math.random() * 200 - 100, 
                y: Math.random() * 200 - 100, 
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                transition: {
                    delay: 0.1 * index,
                    duration: 0.8,
                    ease: "easeOut",
                },
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="leading-16 rounded-2xl bg-gray-200 my-2 overflow-auto p-5" key={data?.id}>

            <div className="flex items-center justify-between my-3">

                <div>
                    <img className="h-12 w-12 object-cover rounded-full border border-gray-500" src={data?.image} alt="" />

                </div>
                <div>

                    <p className='text-xl font-bold text-right'>{data?.firstName} {data.lastName}</p>
                    <p className='text-sm font-bold text-right underline hover:text-gray-700 text-blue-500'>{data?.role}</p>
                </div>
            </div>

            <p className='text-sm font-bold flex items-center gap-3'><MdEmail /> {data?.email}</p>
            <p className='text-sm font-bold flex items-center gap-3'><FaLocationDot /> {data?.address?.city}, {data?.address?.state}, {data?.address?.country}.</p>
            <p className='text-sm font-bold flex items-center gap-3'><FaPhone /> {data?.phone}</p>
            <p className='text-sm font-bold flex items-center gap-3'><FaUniversity /> {data?.university}</p>
            <hr className=" my-4" />
            <p className='text-xl font-bold flex items-center gap-3'>Job-Details</p>
            <p className='text-sm font-bold flex items-center gap-3'><MdWork /> {data?.company?.name}</p>
            <p className='text-sm font-bold flex items-center gap-3'><FcDepartment /> {data?.company?.department}</p>
            <p className='text-sm font-bold flex items-center gap-3'><MdSubtitles /> {data?.company?.title}</p>
        </motion.div>
    )
}
