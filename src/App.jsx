import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home.jsx";
import Course from "./pages/Course.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/course" element={<Course/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
