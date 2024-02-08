import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Feed from "./components/Feed";
import Users from "./components/Users";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login"></Navigate>} />
        <Route path="register" element={<Register></Register>} />
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="home" element={<Home></Home>}>
          <Route path="" element={<Navigate to="feed"></Navigate>}></Route>
          {/* <Route index element={<Feed></Feed>}></Route> */}
          <Route path="feed" element={<Feed></Feed>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="profile" element={<UserProfile></UserProfile>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
