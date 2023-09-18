import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { devNavUrl } from "./component/helpers/functions-general";
import Department from "./component/pages/developer/settings/department/Department";
import OtpSample from "./component/pages/developer/settings/otp-sample/OtpSample";
import { StoreProvider } from "./store/StoreContext";
import DepartmentView from "./component/pages/developer/settings/department/view/DepartmentView";

function App() {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route path={`*`} element={<Department />} />
            <Route path={`/settings/department`} element={<Department />} />
            <Route path={`/settings/department/view`} element={<DepartmentView />} />

            <Route
              path={`/${devNavUrl}/settings/sample-otp`}
              element={<OtpSample />}
            />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
}

export default App;
