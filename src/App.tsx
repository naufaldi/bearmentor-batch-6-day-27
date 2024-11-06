import { useState } from 'react'
import Button from './components/button'
import Card from './components/card'
import { HeaderOne, HeaderThree, HeaderTwo } from './components/heading'
import Breadcumb from './components/breadcumb'

function App() {
  const [count, setCount] = useState(0)
  // 2 type
  // componetns => button, input, modal, etc
  // pages => home, about, contact, etc

  return (
    <>
      <h1>Hello World</h1>
      <Button text="Click me" />
      <Card title="Card 1" description="Deskripsion" image={'wdawda'} />
      <Card title="Card 2" description="Dekstip" image={'awdawdaw'} />
      <Card title="Molto" description="Dekstip" image={'awdawdaw'} />
      <HeaderOne />
      <HeaderTwo />
      <HeaderThree />
      <Breadcumb />
      {/* nav parent dari ul */}
      <nav id="nav" className="bg-blue-500 text-white p-2 rounded-md">
        {/* ul parent dari li. tapi ul adalah child dari nav */}
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

    </>
  )
}

export default App
