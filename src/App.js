import { Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import Header from "./components/Header";
import RightSideBar from "./components/RightSideBar";
import Sidebar from "./components/Sidebar";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video" element={<VideoSection />} />
          </Routes>
          <RightSideBar />
        </div>
      </div>
    </>
  );
}

export default App;
