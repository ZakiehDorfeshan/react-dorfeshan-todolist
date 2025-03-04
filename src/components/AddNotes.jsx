import React, { useState } from 'react'
import editButton from "../assets/image/edit.svg"
import deleteButton from "../assets/image/delete.svg"
import hoverEdit from "../assets/image/edit-blue.png"
import hoverDelete from "../assets/image/delete-red.svg"
export default function AddNotes(props) {
    const [hoveredEditState, setHoveredEditState] = useState(null)
    const [hoveredDeleteState, setHoveredDeleteState] = useState(false)
    return (
        <>
            {props.searchEnter
                ?
                <div className='pt-5 px-28' id="newNote">
                    {props.searchNotes.map((note) => (
                        <div className='flex  justify-between' key={note.id}>
                            <div className="flex gap-4" >
                                <input
                                    type="checkbox"
                                    id={`note-${note.id}`}
                                    checked={note.completed}
                                    onChange={() => props.funcEdit(note.id)
                                    }
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
                                    className="cursor-pointer  w-[18px] h-[18px]" />
                                <img src={hoveredDeleteState === note.id ? hoverDelete : deleteButton}
                                    alt="delete Icon"
                                    onClick={() => props.funcDelete(note.id)}
                                    onMouseEnter={() => setHoveredDeleteState(note.id)}
                                    onMouseLeave={() => setHoveredDeleteState(null)}
                                    className="cursor-pointer w-[18px] h-[18px]" />
                            </div>
                        </div>
                    ))}
                </div> 
                :
                <div className='pt-5 px-28' id="newNote">
                    {props.notes.map((note) => (
                        <div className='flex  justify-between' key={note.id}>
                            <div className="flex gap-4" >
                                <input
                                    type="checkbox"
                                    id={`note-${note.id}`}
                                    checked={note.completed}
                                    onChange={() => props.funcEdit(note.id)
                                    }
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
                                    className="cursor-pointer  w-[18px] h-[18px]" />
                                <img src={hoveredDeleteState === note.id ? hoverDelete : deleteButton}
                                    alt="delete Icon"
                                    onClick={() => props.funcDelete(note.id)}
                                    onMouseEnter={() => setHoveredDeleteState(note.id)}
                                    onMouseLeave={() => setHoveredDeleteState(null)}
                                    className="cursor-pointer w-[18px] h-[18px]" />
                            </div>
                        </div>
                    ))}
                </div>
            }

        </>
    )
}
