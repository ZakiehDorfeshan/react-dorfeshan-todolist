import './App.css'
import React, { useState } from 'react'
import TodoList from './components/todoList'
import AddNotes from './components/AddNotes'
import Modal from './components/modal'
export default function App() {
  const [notes, setNotes] = useState([])
  const [searchNotes, setSearchNotes] = useState([])



  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchEnter, setSearchEnter] = useState(false)
  const [colorBg, setColorBg] = useState(true)
  const funcEdit = (id) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, completed: !note.completed } : note))
  }
  const funcDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }
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
        notes={notes}
        setNotes={setNotes}
        setIsModalOpen={setIsModalOpen}
        funcColorBg={funcColorBg}
        colorBg={colorBg}
        searchNotes={searchNotes}
        setSearchNotes={setSearchNotes}
        searchEnter={searchEnter}
        setSearchEnter={setSearchEnter}
      />
      {isModalOpen &&
        <Modal
          notes={notes}
          setNotes={setNotes}
          colorBg={colorBg}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />}
      <AddNotes
        notes={notes}
        setNotes={setNotes}
        funcDelete={funcDelete}
        funcEdit={funcEdit}
        searchNotes={searchNotes}
        setSearchNotes={setSearchNotes}
        setSearchEnter={setSearchEnter}
        searchEnter={searchEnter}
      />
    </div>
  )
}
