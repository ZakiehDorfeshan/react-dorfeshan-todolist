import React, { useState } from 'react'
import editButton from "../assets/image/edit.svg"
import deleteButton from "../assets/image/delete.svg"
import hoverEdit from "../assets/image/edit-blue.png"
import hoverDelete from "../assets/image/delete-red.svg"
export default function AddNotes(props) {
    const [hoveredEdit, setHoveredEdit] = useState(false)
    const [hoveredDelete, setHoveredDelete] = useState(false)
    return (
        <div className="pt-5 px-28">
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
                        <img src={hoveredEdit ? hoverEdit : editButton}
                            alt="edit Icon"
                            onClick={() => props.funcEditAll(note.id)}
                            onMouseEnter={() => setHoveredEdit(true)}
                            onMouseLeave={() => setHoveredEdit(false)}
                            className="cursor-pointer  w-[18px] h-[18px]" />
                        <img src={hoveredDelete ? hoverDelete : deleteButton}
                            alt="delete Icon"
                            onClick={() => props.funcDelete(note.id)}
                            onMouseEnter={() => setHoveredDelete(true)}
                            onMouseLeave={() => setHoveredDelete(false)}
                            className="cursor-pointer w-[18px] h-[18px]" />
                    </div>
                </div>
            ))}
        </div>
    )
}