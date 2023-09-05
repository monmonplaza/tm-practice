import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { devNavUrl } from "./component/helpers/functions-general";
import Department from "./component/pages/developer/settings/department/Department";
import { StoreProvider } from "./store/StoreContext";
import ReferralType from "./component/pages/developer/settings/referral-type/ReferralType";
import ReferralSource from "./component/pages/developer/settings/referral-source/ReferralSource";

function App() {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route
              path={`/${devNavUrl}/settings/department`}
              element={<Department />}
            />
            <Route
              path={`/${devNavUrl}/settings/referral-type`}
              element={<ReferralType />}
            />
            <Route
              path={`/${devNavUrl}/settings/referral-source`}
              element={<ReferralSource />}
            />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
}

export default App;
