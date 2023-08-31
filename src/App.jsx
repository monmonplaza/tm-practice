import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WonReason from "./component/pages/developer/settings/won-reason/WonReason";
// import Roles from "./component/pages/developer/settings/users/roles/Roles";
// import Users from "./component/pages/developer/settings/users/Users";
// import Others from "./component/pages/developer/settings/users/others/Others";
// import SystemLogin from "./component/pages/access/developer/SystemLogin";
// import SystemForgotPassword from "./component/pages/access/developer/SystemForgotPassword";
// import SystemCreatePassword from "./component/pages/access/developer/SystemCreatePassword";
// import Systems from "./component/pages/developer/settings/users/system/Systems";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/settings/won-reason" element={<WonReason />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
