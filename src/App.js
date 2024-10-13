import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Header from "./components/Header";

function App() {
  return (
    <div className="max-w-[1110px] my-[50px] mx-auto bg-[FFF] font-roboto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="characters" element={<Characters />} />
        <Route path="comics" element={<Comics />} />
      </Routes>
    </div>
  );
}

export default App;
