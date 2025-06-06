import React from 'react';

const HeaderTitle = ({title}) => {


    return (
        <div className='flex items-center mt-8 mb-6   w-full flex-row'>
            <div className='flex-1 md:hidden h-[2px] bg-[#a9a9a9] '></div>
            <div className='flex-1 md:font-bold md:text-2xl text-xl  font-semibold text-center'>Services</div>
            <div className='flex-1 md:hidden h-[2px] bg-[#a9a9a9] '></div>
        </div>

    )
}

export default HeaderTitle;