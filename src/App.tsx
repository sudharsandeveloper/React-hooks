import { Link } from "react-router-dom"

const App = () => {
  return (
    <section>
      <h1>Menu</h1>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/input'}>Input View</Link>
          </li>
          <li>
            <Link to={'/todo'}>Todo</Link>
          </li>
          <li>
            <Link to={'/color-picker'}>Color Picker</Link>
          </li>
          <li>
            <Link to={'/register'}>register user</Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default App