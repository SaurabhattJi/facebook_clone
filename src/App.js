import { Route, Routes } from "react-router-dom";
import Feed from "./components/routeComponent/Feed";
import Header from "./components/Header";
import RightSideBar from "./components/RightSideBar";
import Sidebar from "./components/Sidebar";
import VideoSection from "./components/routeComponent/VideoSection";
// import Shop from "./components/Shop";
import Group from "./components/routeComponent/Group";
// import Gaming from "./components/routeComponent/Gaming";
import ShopItem from "./components/routeComponent/ShopItem";
import Games from "./components/routeComponent/Games";
import LogIn from "./components/routeComponent/LogIn";
import CovidInfo from "./components/sidenavbar/CovidInfo";
import Friends from "./components/sidenavbar/Friends";
import DetailsFriends from "./components/sidenavbar/DetailsFriends";

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
            <Route path="/sports" element={<Games />} />
            <Route path="/logout" element={<LogIn />} />
            <Route path="/covidinfo" element={<CovidInfo />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/friends/:id" element={<DetailsFriends />} />
          </Routes>
          <RightSideBar />
        </div>
      </div>
    </>
  );
}

export default App;
