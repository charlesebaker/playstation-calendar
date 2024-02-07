import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { format } from "date-fns";

import { Calendar } from "@pages/Calendar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:year/:month" Component={Calendar} />
        <Route path="*" element={<Navigate to={format(new Date(), "yyyy/M")} replace={true} />} />
      </Routes>
    </Router>
  );
};

export default App;
