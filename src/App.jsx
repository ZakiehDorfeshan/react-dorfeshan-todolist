import './App.css'
import React, { useState } from 'react'
import TodoList from './components/todoList'
import AddNotes from './components/AddNotes'

export default function App() {
  const [notes, setNotes] = useState([])
  const [searchNotes, setSearchNotes] = useState([])
  const [searchOpen, setSearchOpen] = useState(false)
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
  // const funcEditAll = (id) => {
  //   setNotes(notes.map(note =>
  //     note.id === id ? {} : note))
  // }
  return (
    <div>
      <TodoList
        notes={notes}
        setNotes={setNotes}
        funcColorBg={funcColorBg}
        colorBg={colorBg}
        searchNotes={searchNotes}
        setSearchNotes={setSearchNotes}
        setSearchOpen={setSearchOpen}
      />
      <AddNotes
        notes={notes}
        setNotes={setNotes}
        funcDelete={funcDelete}
        funcEdit={funcEdit}
        searchNotes={searchNotes}
        setSearchNotes={setSearchNotes}
        setSearchOpen={setSearchOpen}
      />
    </div>
  )
}
