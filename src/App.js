import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
