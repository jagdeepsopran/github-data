import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AboutUs from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Users from "./component/User";
import Page404 from "./component/Page404";
import UserProfile from "./component/UserProfile";
import SearchUser from "./component/SearchUser";
import Repo from "./component/Repo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/user/:username" element={<UserProfile />} />
            <Route path="/search" element={<SearchUser />} />
            <Route path="/repo/:full_name" element={<Repo />} />
          </Route>
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
