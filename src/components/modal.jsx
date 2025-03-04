// import React, { useState } from 'react';
// export default function Modal(props) {
//     const [noteInput, setNoteInput] = useState('')
//     const changeHandler = (event) => {
//         setNoteInput(event.target.value)
//     }
//     const applyHandler = () => {
//         if (noteInput) {
//             const newNote = {
//                 id: Date.now(),
//                 text: noteInput,
//                 completed: false,
//             }
//             props.setNotes([...props.notes, newNote])
//             setNoteInput('')
//         }
//         props.setIsModalOpen(false)
//     }
//     return (
//         <div >
//             <div className="  fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" id="modal">
//                 <div className={`${props.colorBg ? "bg-white  border-[#6C63FF]" : "bg-black border border-white"}
//                 modal-content  relative flex flex-col w-[500px] h-[289px] rounded-2xl shadow-lg  `} >
//                     <h2 className={`${props.colorBg ? "text-black" : "text-white"} uppercase text-center pb-6 pt-5 font-bold text-2xl font-[KanitExtraBold]`}>new note</h2>
//                     <input
//                         type="text"
//                         placeholder="input your note..."
//                         className={`${props.colorBg ? "bg-white border-[#6C63FF] " : "bg-black border border-white"}
//                         focus:outline-none
//                         py-2 pl-4 mx-7 rounded-lg text-base border  `}
//                         value={noteInput}
//                         onChange={changeHandler} />
//                     <div className='flex justify-between '>
//                         <button className={`${props.colorBg ? "bg-white" : "bg-black"}
//                          text-[#6C63FF] font-bold  border border-[#6C63FF] uppercase py-2 px-6 ml-7 mt-24 rounded-md  `}
//                             type='button' onClick={props.onClose}>cancel</button>
//                         <button className=' text-[white] bg-[#6C63FF]  uppercase py-2 px-6 mr-7 mt-24 rounded-md' type='button'
//                             onClick={() => applyHandler(noteInput)} >Apply</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
