import './App.css'
import React, { useState } from 'react'
import TodoList from './components/todoList'
import Modal from './components/modal'
import AddNotes from './components/AddNotes'

export default function App() {
  const [notes, setNotes] = useState([])
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [colorBg, setColorBg] = useState(true)

  const closeModal = () => { setIsModalOpen(false) }
  const funcEdit = (id) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, completed: !note.completed } : note))
  }
  const funcDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }
  // const funcEditAll = (id) => {
  //   setNotes(notes.map(note =>
  //     note.id === id ? {} : note))
  // }
  const funcColorBg = () => {
    setColorBg(!colorBg)
    if (colorBg) {
      document.body.style.backgroundColor = 'black'
    } else {
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <div>
      <TodoList
        setIsModalOpen={setIsModalOpen}
        notes={notes}
        funcColorBg={funcColorBg}
        colorBg={colorBg}
      />
      {isModalOpen && (
        <Modal
          onClose={closeModal}
          setIsModalOpen={setIsModalOpen}
          // noteInput={noteInput}
          // setNoteInput={setNoteInput}
          colorBg={colorBg}
          notes={notes}
          setNotes={setNotes}
        />
      )}
      <AddNotes
        // noteInput={noteInput}
        // setNoteInput={setNoteInput}
        notes={notes}
        onClose={closeModal}
        setNotes={setNotes}
        funcDelete={funcDelete}
        funcEdit={funcEdit}
      />
    </div>
  )
}
