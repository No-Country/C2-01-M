import "./App.css"
import ManagementRoute from "./components/management-route"
import Header from "./components/header"
import Landing from "./components/landing/landing"

function App() {
  return (
    <div className='App'>
      <ManagementRoute />
      <Header />
      <Landing />
    </div>
  )
}

export default App
