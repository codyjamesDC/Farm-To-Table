import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
    return (
        <BrowserRouter>
            <div className="app-shell">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<Login />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;