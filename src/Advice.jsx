import React, { useEffect, useState } from 'react'
import desktop from "./images/pattern-divider-desktop.svg"
import mobile from "./images/pattern-divider-mobile.svg"
import dice from "./images/icon-dice.svg"

const Advice = () => {
    const [datas, setDatas] = useState("")
    const [ids, setIds] = useState("")

    useEffect(() => {
        fetchingData()
    }, [])

  const fetchingData = () =>  {fetch(`https://api.adviceslip.com/advice`)
    .then(res => res.json())
    .then(data => {
        const quotes = data.slip.advice;
        setDatas(quotes);
        const identity = data.slip.id;
        setIds(identity)
        console.log(data.slip.advice,data.slip.id)
    })
        };

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='md:p-10 p-4 bg-dark-grayish-blue rounded-xl md:w-1/3 w-full relative m-5 md:m-0'>
        <h3 className='text-neon-green tracking-[4px] uppercase font-semibold font-manrope text-center'>Advice #{ids}</h3> 
        <h1 className='text-light-cyan md:text-3xl text-2xl font-semibold text-center mt-8'>"{datas}"</h1>
        <div className='flex justify-center items-center mb-10'>
        <img src={desktop} alt="" className='mt-8 md:flex hidden'/>
        <img src={mobile} alt="" className='mt-8 md:hidden flex'/>

        <div className='absolute rounded-full bg-neon-green p-4 bottom-[-10%] hover:shadow-lg hover:shadow-green-400' onClick={fetchingData}>
            <img src={dice} alt="" />
        </div>
        </div>
       

        </div>

        </div>
 
  )
}

export default Advice