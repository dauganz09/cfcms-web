import React from 'react'
import Statwidget from './Statwidget'

const Stats = () => {
    return (
        <div className='grid grid-cols-1 h-full gap-y-0 lg:grid-cols-4 sm:grid-cols-2 lg:gap-x-4  sm:gap-x-2 sm:gap-y-0 sm:h-[250px] items-center border-0  border-t-2 border-t-slate-200 lg:h-[150px] w-full'>
           <Statwidget title='Daily Catch' num={300} percent='80%' label='1 week monitoring' status color='shadow-blue-400'/>
           <Statwidget title='Weekly Catch' num={1500} percent='-70%' label='1 week monitoring'status={false}  color='shadow-cyan-400' />
           <Statwidget title='Monthly Catch' num={5000} percent='+50%' label='4 months monitoring' status color='shadow-yellow-400' />
           <Statwidget title='Annual Catch' num={50000} percent='+70%' status label='Jan to Dec 2021' color='shadow-red-400'/>

        </div>
    )
}

export default Stats
