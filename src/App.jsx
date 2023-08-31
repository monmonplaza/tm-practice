import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LostReason from "./component/pages/developer/settings/LostReason/LostReason";
import ReferralSource from "./component/pages/developer/settings/ReferralSource/ReferralSource";
import Department from "./component/pages/developer/settings/Department/Department";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/settings/LostReason" element={<LostReason />} />
          <Route path="/settings/ReferralSource" element={<ReferralSource />} />
          <Route path="/settings/Department" element={<Department />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
