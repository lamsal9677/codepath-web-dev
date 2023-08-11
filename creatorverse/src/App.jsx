import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      Hello Worldd
      <br />
      <br />
      <br />
      <br />
      <a href="/add-creators">Add Creators</a>
      <br />
      <a href="/show-creators">Show Creators</a>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Outlet />
    </>
  )
}

export default App
