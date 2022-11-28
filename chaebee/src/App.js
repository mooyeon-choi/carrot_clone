import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Start from './pages/Start';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/" element={<Start />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
