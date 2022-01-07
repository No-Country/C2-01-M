import "./App.css"
import Header from "./components/header"
import Error404 from "./components/404/error404"

function App() {
  return (
    <div className='App'>
      <Header />
      <Error404></Error404>
    </div>
  )
}

export default App
