import './App.css'
import React, { useState } from 'react'
import TodoList from './components/todoList'
import Modal from './components/modal';
import AddNotes from './components/AddNotes';
export default function App() {
  const [noteInput, setNoteInput] = useState('')
  const [notes, setNotes] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchNote, setSearchNote] = useState("")
  const [colorBg, setColorBg] = useState(true)
  const closeModal = () => setIsModalOpen(false)
  const funcEdit = (id) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, completed: !note.completed } : note))
  }
  const funcDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }
  const funcEditAll = (id) => {
    setNotes(notes.map(note =>
      note.id === id ? {} : note))
  }
  const add = () => {
    if (noteInput) {
      const newNote = {
        id: Date.now(),
        text: noteInput,
        completed: false,
      }
      setNotes([...notes, newNote])
      setNoteInput('')
    }
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
      <TodoList setIsModalOpen={setIsModalOpen} searchNote={searchNote} setSearchNote={setSearchNote} notes={notes} funcColorBg={funcColorBg} colorBg={colorBg}  />
      {isModalOpen && <Modal onClose={closeModal} noteInput={noteInput} setNoteInput={setNoteInput} add={add} colorBg={colorBg}/>}
      <AddNotes noteInput={noteInput} setNoteInput={setNoteInput} notes={notes} setNotes={setNotes} funcDelete={funcDelete}
        funcEdit={funcEdit} />
    </div>
  )
}
