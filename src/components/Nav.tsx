import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CandidateSearch from "../pages/CandidateSearch";
import SavedCandidates from "../pages/SavedCandidates";

const Nav = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Candidate Search</Link>
        <Link to="/saved">Saved Candidates</Link>
      </nav>

      <Routes>
        <Route path="/" element={<CandidateSearch />} />
        <Route path="/saved" element={<SavedCandidates />} />
      </Routes>
    </Router>
  );
};

export default Nav;
