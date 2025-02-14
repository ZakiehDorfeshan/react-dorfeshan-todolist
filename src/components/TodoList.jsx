import React, { useState } from 'react'
import moonImage from "../assets/image/moon-l.svg"
import sunImage from "../assets/image/sunImage.png"
import plusButton from "../assets/image/plus.svg"
import top from "../assets/image/top.png"
import down from "../assets/image/down.png"




export default function TodoList(props) {
    const [searchNote, setSearchNote] = useState("")
    const changeHandler = (event) => {
        setSearchNote(event.target.value)
    }
    const [isOpenSvg, setIsOpenSvg] = useState(false)
    const toggleMenu = () => {
        setIsOpenSvg(prevState => !prevState)
    }
    return (
        <>
            <div className='flex flex-col  justify-between'>
                <h1 className={`${props.colorBg ? "text-black" : "text-white"} text-3xl font-bold uppercase font-[interLight] mt-10 pb-4`}>todo list</h1>
                <div className="flex justify-between items-center gap-4">
                    <div className=' flex w-[595px] h-[38px] justify-between items-center border border-[#6C63FF] rounded-md'>
                        <input type="text" placeholder="Search note..."
                            className={`${!props.colorBg && "bg-black"} border-none focus:outline-none  pl-4 w-full text-base`} value={searchNote} onChange={changeHandler} />
                        <i className="fas fa-search  text-[#3e3d5b] pr-4" />
                    </div>
                    <div className="relative flex flex-col items-center  ">
                        <div className='py-3'>
                            <button onClick={toggleMenu} className=" bg-[#5850DD] text-white h-[38px] w-[85px] px-4 inline-flex items-center justify-center rounded-md  ">
                                <span className="px-4 ">ALL</span>
                                <img src={top} className=" w-[18px] px-1" alt="Top Icon" />
                            </button>
                        </div>
                        {isOpenSvg && (
                            <div >
                                <div className="absolute right-0  w-[85px] rounded-md   bg-white  shadow-md  ">
                                    <button onClick={toggleMenu} className=" relative bg-[#5850DD] text-white h-[38px] w-[85px]  px-4  inline-flex items-center justify-center rounded-md ">
                                        <span className="px-4 ">ALL</span>
                                        <img src={down} className="w-[18px] px-1" alt="down Icon" />
                                    </button>
                                    <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <a href="#" className="text-[#5850DD] block px-4 py-2 text-sm  hover:bg-gray-100" role="menuitem">All</a>
                                        <a href="#" className="text-[#5850DD] block px-4 py-2  text-sm  hover:bg-gray-100" role="menuitem">Complete</a>
                                        <a href="#" className="text-[#5850DD] block px-4 py-2  text-sm  hover:bg-gray-100" role="menuitem">Incomplete</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <img src={props.colorBg ? moonImage : sunImage}
                        onClick={() => props.funcColorBg()}
                        alt="colorBg"
                        style={{ cursor: 'pointer' }}
                        className="w-[38px] h-[38px]"
                    />
                </div>
                <div
                    className='absolute bottom-4  right-96 flex items-center justify-center w-12 h-12 rounded-full cursor-pointer'
                    onClick={() => props.setIsModalOpen(true)}
                    aria-label="Open modal" >
                    <img src={plusButton} alt="Plus Icon" className="w-10 h-10" />
                </div>
            </div >
        </>
    )
}
