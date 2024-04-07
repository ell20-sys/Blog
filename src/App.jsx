import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/nav/NavBar"
function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<NavBar/>}>
        
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
