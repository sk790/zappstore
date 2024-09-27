import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import HomePage from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:username" element={<HomePage />} />
        </Routes>
        <Toaster/>
      </BrowserRouter>
    </>
  );
}

export default App;
