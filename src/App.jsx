import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccessLevel from "./component/pages/developer/settings/access-level/AccessLevel";
import Actions from "./component/pages/developer/settings/access-level/actions/Actions";
import Menu from "./component/pages/developer/settings/access-level/menus/Menu";
import Roles from "./component/pages/developer/settings/access-level/roles/Roles";
import LostTo from "./component/pages/developer/settings/lost-to/LostTo";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/settings/access-level" element={<AccessLevel />} />
          <Route path="/settings/access-level/actions" element={<Actions />} />
          <Route path="/settings/access-level/menus" element={<Menu />} />
          <Route path="/settings/access-level/roles" element={<Roles />} />
          <Route path="/settings/lost-to" element={<LostTo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
