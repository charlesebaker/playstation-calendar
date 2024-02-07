import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import { Calendar } from "@pages/Calendar";
import { getCurrentYearMonth } from "@utils";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:year/:month" Component={Calendar} />
        <Route path="*" element={<Navigate to={getCurrentYearMonth()} replace={true} />} />
      </Routes>
    </Router>
  );
};

export default App;
