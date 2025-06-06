import React from 'react';
import {ArrowRightIcon} from "@heroicons/react/16/solid";

const ServiceTile = ({title,content,image,action}) => {


    return (
        <div className='relative bg-white p-4 mb-3 flex-1 max-w-sm rounded  shadow-lg'>
            <div>
                <p className='mb-5 text-center text-xl font-bold'>{title}</p>
                <p className='mb-5 md:text-center font-semibold text-base text-[#9ca3af]'>{content}</p>
                <img src={image} alt="" className='w-full filter hover:grayscale-0 grayscale-[50%] h-50'/>
                <div className='rounded-lg md:hover:bg-white text-white md:hover:text-[#6935D1] md:hover:border-[#6935D1] md:hover:border absolute bottom-[-5%] z-20 flex justify-center items-center p-2 bg-[#6935D1]'>
                    <p className=''>{action}</p>
                    <ArrowRightIcon className=' h-8 w-8 '/>
                </div>
            </div>

        </div>
    )
}

export default ServiceTile;