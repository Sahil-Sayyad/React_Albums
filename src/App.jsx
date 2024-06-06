import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Album from "./components/AlbumComponent"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Album />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
