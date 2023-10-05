import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LostReason from "./component/pages/developer/settings/LostReason/LostReason";
import ReferralSource from "./component/pages/developer/settings/ReferralSource/ReferralSource";
import Department from "./component/pages/developer/settings/Department/Department";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "./store/StoreContext";
import Activities from "./component/pages/developer/settings/Activities/Activities";
import EngagementCategory from "./component/pages/developer/settings/EngagementCategory/EngagementCategory";
import ClientClass from "./component/pages/developer/settings/ClientClass/ClientClass";
import Offices from "./component/pages/developer/settings/Offices/Offices";
import Rates from "./component/pages/developer/settings/Rates/Rates";
import ReferralType from "./component/pages/developer/settings/ReferralType/ReferralType";


function App() {
  const queryClient = new QueryClient();
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
      <Router>
        <Routes>
          <Route path="/settings/LostReason" element={<LostReason />} />
          <Route path="/settings/ReferralSource" element={<ReferralSource />} />
          <Route path="/settings/Department" element={<Department />} />
          <Route path="/settings/Activities" element={<Activities />} />
          <Route path="/settings/engagementcategory" element={<EngagementCategory />} />
          <Route path="/settings/clientclass" element={<ClientClass />} />
          <Route path="/settings/offices" element={<Offices />} />
          <Route path="/settings/rates" element={<Rates />} />
          <Route path="/settings/referraltype" element={<ReferralType />} />
        </Routes>
      </Router>
      </StoreProvider>
    </QueryClientProvider>
    </>
  );
}

export default App;
