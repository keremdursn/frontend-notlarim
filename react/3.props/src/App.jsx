import { useState } from 'react'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {

  const pName = "Kazak"

  return (
    <div>
      {/* <div>
      <Product productName="Ayakkabı" price={3200} />
      <hr />
      <Product productName="Pantolon" price={900} />
      <hr />
      <Product productName={pName} price={300} />
    </div> */}

      <div>
        <hr />
        <Container>
          <hr />
          <Product productName={pName} price={300} />
          <hr />
          <Product productName="Pantolon" price={900} />
        </Container >
      </div>
    </div>

  )
}

export default App
