import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setfirstName] = useState('Kerem')
  const [lastName, setlastName] = useState('Dursun')

  const [sehirler, setSehirler] = useState(["istanbul", "izmir", "denizli", "ankara"])

  const [count, setCount] = useState(0)

  const handleChange = () => setfirstName("Tülinay")

  const handleCount = () => setCount(count + 1)


return (
  <div>
    <div>{firstName} {lastName}</div>
    <div><button onClick={handleChange}>İsmi değiştir</button></div>

    <hr />

    <div>{sehirler.map((sehir, index) => (
      <div key={index}>{sehir}</div>
    ))}
    </div>

    <div>
      <button onClick={handleCount}>
        Count is {count}
      </button>
    </div>

  </div>


)
}

export default App
