import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LostReason from "./component/pages/developer/settings/LostReason/LostReason";
import ReferralSource from "./component/pages/developer/settings/ReferralSource/ReferralSource";
import Department from "./component/pages/developer/settings/Department/Department";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "./store/StoreContext";
import EngagementCategory from "./component/pages/developer/settings/EngagementCategory/EngagementCategory";

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
          <Route path="/settings/EngagementCategory" element={<EngagementCategory />} />
        </Routes>
      </Router>
      </StoreProvider>
    </QueryClientProvider>
    </>
  );
}

export default App;
