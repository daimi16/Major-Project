import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Predict from "./pages/Predict";
import Navigation from "./components/Navigation";
import backgroundvideo2 from "./assets/video.mp4";

function App() {
  return (
    <BrowserRouter>
      <div>
        <video
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            position: "fixed",
            left: "0",
            right: "0",
            top: "0",
            bottom: "0",
            zIndex: "-1",
            filter: "brightness(65%)",
          }}
          autoPlay
          loop
        >
          <source src={backgroundvideo2} type="video/mp4" />
        </video>
        <div>
          <Navigation />
          <Routes>
            <Route element={<Home />} path="/" index />
            <Route element={<Predict />} path="/predict" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
