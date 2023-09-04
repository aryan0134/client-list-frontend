import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import ToDoList from "./pages/ToDoList";
import ClientsForm from "./pages/ClientsForm";
import ViewProfile from "./pages/ViewProfile";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <>
      <Router>
          <Navbar fixedToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todo" element={<ToDoList />} />
              <Route path="/addclient" element={<ClientsForm />} />
              <Route path="/viewprofile/:id" element={<ViewProfile />} />
              <Route path="/editprofile/:id" element={<EditProfile />} />
            </Routes>
      </Router>
    </>
  );
}

export default App;
