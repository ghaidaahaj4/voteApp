import Main from "./components/main";
import "./App.css";
import { AuthProvider } from "./components/Context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VotingPage from "./components/Voting/VotingPage";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/voting" element={<VotingPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
