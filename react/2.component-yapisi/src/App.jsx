import { useState } from 'react'
import './App.css'
import Login from './Login'
import { users } from './Login'

function App() {
  console.log(users)

  //Fragment
  return (
    <>
      <div>
        <Login />
      </div>
    </>

  )
}

export default App
