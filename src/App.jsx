import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { devNavUrl } from "./component/helpers/functions-general";
import Department from "./component/pages/developer/settings/department/Department";
import { StoreProvider } from "./store/StoreContext";
import ReferralType from "./component/pages/developer/settings/referral-type/ReferralType";
import ReferralSource from "./component/pages/developer/settings/referral-source/ReferralSource";
import LostTo from "./component/pages/developer/settings/lost-to/LostTo";
import ClientProfile from "./component/pages/developer/settings/client-profile/ClientProfile";
import UserProfile from "./component/pages/developer/settings/user-profile/UserProfile";
import Location from "./component/pages/developer/settings/location/Location";
import Client from "./component/pages/developer/client/Client";

function App() {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route path={`*`} element={<Department />} />
            <Route
              path={`/${devNavUrl}/settings/referral-type`}
              element={<ReferralType />}
            />
            <Route
              path={`/${devNavUrl}/settings/referral-source`}
              element={<ReferralSource />}
            />
            <Route
              path={`/${devNavUrl}/settings/lost-to`}
              element={<LostTo />}
            />
            <Route
              path={`/${devNavUrl}/settings/lost-reason`}
              element={<LostTo />}
            />
            <Route
              path={`/${devNavUrl}/settings/client-profile`}
              element={<ClientProfile />}
            />
            <Route
              path={`/${devNavUrl}/settings/user-profile`}
              element={<UserProfile />}
            />
            <Route
              path={`/${devNavUrl}/settings/location`}
              element={<Location />}
            />
            <Route path={`/${devNavUrl}/client`} element={<Client />} />
            <Route
              path={`/${devNavUrl}/settings/sample-otp`}
              element={<Client />}
            />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
}

export default App;
