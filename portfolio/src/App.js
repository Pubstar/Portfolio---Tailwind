import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
