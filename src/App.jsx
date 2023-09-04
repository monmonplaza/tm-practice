import { BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  // Create a client
  return (
    <Router>
      <Routes>{/* <Route path={`*`} element={<PageNotFound />} /> */}</Routes>
    </Router>
  );
}

export default App;
