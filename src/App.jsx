import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Engagement from "./component/pages/developer/settings/engagements/Engagement";
import Category from "./component/pages/developer/settings/engagements/category/category";
import Template from "./component/pages/developer/settings/engagements/template/Template";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/settings/engagements" element={<Engagement />} />
          <Route path="/settings/engagements/category" element={<Category />} />
          <Route path="/settings/engagements/template" element={<Template />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
