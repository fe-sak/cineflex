import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MoviesScreen from "./MoviesScreen";
import SessionScreen from "./SessionScreen";


export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MoviesScreen />} />
                <Route path="/sessoes/:id/" element={<SessionScreen />} />
            </Routes>
        </BrowserRouter>
    )
}