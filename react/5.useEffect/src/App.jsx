import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')

  useEffect(() => {
    console.log("her zaman çalışır.")
  })

  useEffect(() => {
    console.log("ilk render edildiğinde.")
    // veritabanından ürünleri getir ve listele.
  }, [])

  useEffect(() => {
    console.log("ilk render edildiğinde ve firstname state değeri değiştirildiğinde çalışır.")
  }, [firstName])

  useEffect(() => {
    console.log("ilk render edildiğinde ve lastname state değeri değiştirildiğinde çalışır.")
  }, [lastName])


  return (
    <div>
      <div>
        <button onClick={() => setfirstName("Tülinay")}>ADI DEĞİŞTİR</button>
        <button onClick={() => setlastName("Tülinay")}>SOYADI DEĞİŞTİR</button>
      </div>
    </div>
  )
}

export default App
