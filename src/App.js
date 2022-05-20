import './App.css';
// app navigation imports
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//app pages imports
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import EmployeePage from './pages/EmployeePage';

export default function App() {
  return (
    <div className="App">
      <Router>
        <div className="w-full h-full">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/employee" element={<EmployeePage />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

