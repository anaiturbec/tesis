import './App.css';
// app navigation imports
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//app pages imports
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';

export default function App() {
  return (
    <div className="App">
      <Router>
        <div className="w-full h-full">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

