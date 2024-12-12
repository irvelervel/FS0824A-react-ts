import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'

interface MovieObject {
  Poster: string
  Title: string
}

function App() {
  const [count, setCount] = useState(0)
  const [movieData, setMovieData] = useState<null | MovieObject>(null)
  // in questo caso la TYPE INFERENCE ci pesta i piedi! TS ha intuito
  // dal valore iniziale di "null" che il TIPO di movieData sarà anch'esso "null"
  // dobbiamo far capire a TS che nonostante il valore iniziale di null, il TIPO della variable movieData non sarà sempre e solo null!

  useEffect(() => {
    console.log('componente montato!')
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ClassComponent mainTitle="Cattosello" />
      <FunctionalComponent
        imgSource="https://placecats.com/400/400"
        title="Card con gatto!"
      />
      <FunctionalComponent imgSource="https://placedog.net/200" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button
          onClick={() => setMovieData({ Poster: 'ssss', Title: 'Batman' })}
        >
          SETTA MOVIEDATA
        </button>
        {movieData && <p>{movieData.Title}</p>}
        {/* metodo alternativo */}
        {/* <p>{movieData?.Title}</p> */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
