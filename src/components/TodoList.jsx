import React, { useState } from 'react'
import searchIconDark from "../assets/image/searchIconDark.png"
import searchIconLight from "../assets/image/searchIconLight.png"
import moonImage from "../assets/image/moon-l.svg"
import sunImage from "../assets/image/sunImage.png"
import plusButton from "../assets/image/plus.svg"
import top from "../assets/image/top.png"
import down from "../assets/image/down.png"

export default function TodoList(props) {
    const [searchNotes, setSearchNotes] = useState("")
    const [noteInput, setNoteInput] = useState('')
    const [isOpenSvg, setIsOpenSvg] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const changeHandler = (event) => {
        setSearchNotes(event.target.value)
    }
    const toggleMenu = () => {
        setIsOpenSvg(prevState => !prevState)
    }
    const changeHandlerModal = (event) => {
        setNoteInput(event.target.value)
    }
    const applyHandler = () => {
        if (noteInput) {
            const newNote = {
                id: Date.now(),
                text: noteInput,
                completed: false,
            }
            props.setNotes([...props.notes, newNote])
            setNoteInput('')
        }
        setIsModalOpen(false)
    }
    const funcFilter = () => {
        props.notes.filter(note => note.text.toLowerCase().includes(searchNotes.toLowerCase())).map(note => (
            <>
                <div className='flex justify-between' key={note.id}>
                    <div className="flex gap-4">
                        <input
                            type="checkbox"
                            id={`note-${note.id}`}
                            checked={note.completed}
                            onChange={() => props.funcEdit(note.id)}
                        />
                        <label
                            htmlFor={`note-${note.id}`}
                            style={{
                                textDecoration: note.completed ? 'line-through' : 'none',
                                color: note.completed ? '#25252580' : '#000000'
                            }}
                        >
                            {note.text}
                        </label>
                    </div>
                    <div className='flex ml-auto'>
                        <img src={hoveredEditState === note.id ? hoverEdit : editButton}
                            alt="edit Icon"
                            onClick={() => props.funcEdit(note.id)}
                            onMouseEnter={() => setHoveredEditState(note.id)}
                            onMouseLeave={() => setHoveredEditState(null)}
                            className="cursor-pointer w-[18px] h-[18px]" />
                        <img src={hoveredDeleteState === note.id ? hoverDelete : deleteButton}
                            alt="delete Icon"
                            onClick={() => props.funcDelete(note.id)}
                            onMouseEnter={() => setHoveredDeleteState(note.id)}
                            onMouseLeave={() => setHoveredDeleteState(null)}
                            className="cursor-pointer w-[18px] h-[18px]" />
                    </div>
                </div>
            </>))
    }
    return (
        <>

            <div className='flex flex-col  justify-between'>
                <h1 className={`${props.colorBg ? "text-black" : "text-white"} text-3xl font-bold uppercase font-[interLight] mt-10 pb-4`}>todo list</h1>
                <div className="flex justify-between items-center gap-4">
                    <div className=' flex w-[595px] h-[38px] justify-between items-center border border-[#6C63FF] rounded-md'>
                        <input type="text" placeholder="Search note..."
                            className={`${!props.colorBg && "bg-black"} border-none focus:outline-none  pl-4 w-full text-base`}
                            value={searchNotes}
                            onChange={changeHandler} />
                        <img src={`${props.colorBg ? searchIconLight : searchIconDark} `}
                            alt="search Icon"
                            className="pr-4 w-9 h-5"
                            onClick={funcFilter}
                        />
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
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Open modal" >
                    <img src={plusButton} alt="Plus Icon" className="w-10 h-10" />
                </div>
            </div >
            {isModalOpen &&
                <div >
                    <div className="  fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" id="modal">
                        <div className={`${props.colorBg ? "bg-white  border-[#6C63FF]" : "bg-black border border-white"}
                modal-content  relative flex flex-col w-[500px] h-[289px] rounded-2xl shadow-lg  `} >
                            <h2 className={`${props.colorBg ? "text-black" : "text-white"} uppercase text-center pb-6 pt-5 font-bold text-2xl font-[KanitExtraBold]`}>new note</h2>
                            <input
                                type="text"
                                placeholder="input your note..."
                                className={`${props.colorBg ? "bg-white border-[#6C63FF] " : "bg-black border border-white"}
                                            focus:outline-none
                                             py-2 pl-4 mx-7 rounded-lg text-base border  `}
                                value={noteInput}
                                onChange={changeHandlerModal} />
                            <div className='flex justify-between '>
                                <button className={`${props.colorBg ? "bg-white" : "bg-black"}
                         text-[#6C63FF] font-bold  border border-[#6C63FF] uppercase py-2 px-6 ml-7 mt-24 rounded-md  `}
                                    type='button' onClick={() => setIsModalOpen(false)}>cancel</button>
                                <button className=' text-[white] bg-[#6C63FF]  uppercase py-2 px-6 mr-7 mt-24 rounded-md' type='button'
                                    onClick={() => applyHandler(noteInput)} >Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
