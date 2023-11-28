import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
