import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login"></Navigate>} />
        <Route path="register" element={<Register></Register>} />
        <Route path="login" element={<Login></Login>}></Route>
        {/* <Route path='home' element={<Home></Home>}></Route> */}
      </Routes>
    </>
  );
}

export default App;
