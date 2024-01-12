import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/Home";
import ProfileForm from "./Components/Account/Profile-Form";
import Certificate from "./Components/Certificates/Certificate";
import CertificateForm from "./Components/Certificates/CertificateForm";

const SidebarLayout = () => (
  <>
    <div id="header" />
    <SideBar />
    <Outlet />
  </>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route path="/certificates" element={<Certificate />} />

            <Route path="certificate-form" element={<CertificateForm />} />
            {/* <Route path="*" element={<NoPage />} />  */}
          </Route>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
