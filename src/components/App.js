import { BrowserRouter, Routes, Route } from "react-router-dom";

import MoviesScreen from "./Screens/MoviesScreen";
import SessionScreen from "./Screens/SessionScreen";
import SeatsScreen from "./Screens/SeatsScreen";
import SuccessScreen from "./Screens/SuccessScreen";

import PageHeader from "./Screen components/PageHeader";


export default function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/" element={<MoviesScreen />} />
        <Route path="/sessoes/:id/" element={<SessionScreen />} />
        <Route path="/assentos/:id" element={<SeatsScreen />} />
        <Route path="/success" element={<SuccessScreen />} />
      </Routes>
    </BrowserRouter>
  )
}