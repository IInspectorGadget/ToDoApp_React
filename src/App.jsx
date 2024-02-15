import { useState } from 'react'
import './App.sass'
import Header from './components/Header/Header'
import ToDoList from './components//ToDoList/ToDoList'
import Footer from './components//Footer/Footer'

function App() {

  return (
    <>
      <div className="wrapper">
        <Header/>
        <ToDoList/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
