import { Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import Header from "./components/Header";
import RightSideBar from "./components/RightSideBar";
import Sidebar from "./components/Sidebar";
import VideoSection from "./components/VideoSection";
// import Shop from "./components/Shop";
import Group from "./components/Group";
import Gaming from "./components/Gaming";
import ShopItem from "./components/ShopItem";

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
            <Route path="/shop" element={<ShopItem />} />
            <Route path="/groups" element={<Group />} />
            <Route path="/sports" element={<Gaming />} />
          </Routes>
          <RightSideBar />
        </div>
      </div>
    </>
  );
}

export default App;
